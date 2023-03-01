const package = require("./package.json");
const exec = require("child_process").exec;
const prompts = require("prompts");
const force = process.argv.find(s => s == "-f") != undefined;
let oldlog = console.log;
console.log = function(...args) {
  return oldlog("peopletalk update: " + args);
};

async function ask(question, cb) {
  prompts({
    type: "text",
    name: "value",
    message: question + " (y,n)",
    validate: value =>
      value != "y" && value != "n" ? `Please answer with y or n` : true
  })
    .then(function(data) {
      cb(false, data.value == "y" ? true : false);
    })
    .catch(function(err) {
      cb(new Error(err));
    });
}

async function checkForChanges(cb) {
  exec(
    "git init; git remote add peopletalk https://github.com/talonsmart/peopletalk; git fetch talonsmart; git rev-list HEAD...peopletalk/project-oak; git remote remove peopletalk",
    function(err, data) {
      if (!data || err) return cb(err || true);
      else cb(false, data.split("\n"));
    }
  );
}

async function installUpdates(cb) {
  exec(
    "git remote add peopletalk https://github.com/talonsmart/peopletalk; git fetch peopletalk; git stash; git pull peopletalk project-oak; git stash apply; git remote remove peopletalk",
    function(err) {
      if (err) return cb(err).catch(cb);
      cb(null, true);
    }
  );
}

(function() {
  if (package.update == false && !force) return;
  else console.log("checking for updates...");

  checkForChanges(function(err, data) {
    if (err != true && err) return console.error(err);
    if (err == true || !data) return console.log("all up to date");
    console.clear();
    console.log(data.length + " updates found");
    ask("Install updates?", function(err, install) {
      if (err) return console.error(err);
      if (!install) return console.log("aborting install");
      installUpdates(function(err, finished) {
        if (err) console.error(err.message);
        else console.log("update finished");
      });
    });
  });
})();
