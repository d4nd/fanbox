'use strict';

const electron = require('electron');

//Module to control application life
const app = electron.app;

//Module to create a native browser window
const BrowserWindow = electron.BrowserWindow;

require('electron-reload')(__dirname);

//global reference to the window object. This is needed otherwise it
//gets garbage collected
var mainWindow = null;


function createWindow() {

    //width and height should be configurable by the user. Change this!
    mainWindow = new BrowserWindow({
        height: 900,
        useContentSize: true,
        alwaysOnTop: true,
        frame: false
    });

    mainWindow.loadURL('file://' + __dirname + '/fanbox.htm');

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('window-all-closed', function() {
    //Macs handle things differently
    if (process.playform != 'darwin') {
        app.quit();
    }
});

app.on('ready', createWindow);
