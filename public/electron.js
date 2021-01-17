
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require("electron-is-dev");
const { Client } = require('pg');
var database;

const connectDatabase = () => {

    database = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'd_casanely',
        password: 'admin',
        port: 5432,
    });

    database.connect(error => {
        if (error) {
            console.error('Failed to connect database.', error.stack);
            connectDatabase();
        } else {
            console.log('Database connected');
        }
    });
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });
    mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
}

app.whenReady().then(() => {
    createWindow();
    connectDatabase();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

ipcMain.on('database-request', (event, query) => {
    database.query(query).then(res => {
        event.reply('database-response', ['ok', res.rows])
    }).catch(e => event.reply('database-response', ['error', e]));
});