const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const appConfig = require('./config/app.json');
const{dialog} = require('electron');
const{Menu} = require('electron');

let mainWindow;
 
function createWindow(){
    mainWindow = new BrowserWindow({width: 1400, height: 800, 'node-integration': false});
    mainWindow.loadURL(`http://localhost`);
    mainWindow.maximize();

    // Emitted when the window is closed.
    mainWindow.on('closed', function (){
        mainWindow = null;
    });

    var template = [{
        label: 'peopletalk',
        submenu: [
            {label: 'About peopletalk', selector: 'orderFrontStandardAboutPanel:'},
            {type: 'separator'},
            {label: 'Quit', accelerator: 'Command+Q', click: function(){ app.quit(); }}
        ]}, {
            label: 'Edit',
            submenu: [
                {label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:'},
                {label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:'},
                {type: 'separator'},
                {label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:'},
                {label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:'},
                {label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:'},
                {label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:'}
            ]},{
                label:'Users',
                submenu: [{
                    label:'Search',
                    accelerator:'CmdOrCtrl+Q',
                    click: function() {
                        mainWindow.loadURL(`http://localhost/u`);
                    }, 
                }, {
                    label:'My profile',
                    accelerator:'CmdOrCtrl+M',
                    click: function() {
                        mainWindow.loadURL('http://localhost/me')
                    }
                }
                ]

            }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// express.on('startedAdminMongo', createWindow);
app.on('ready', function (){
    createWindow()
});

// Quit when all windows are closed.
app.on('window-all-closed', function (){
    app.quit();
});

app.on('activate', function (){
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if(mainWindow === null){
        createWindow();
    }
});
