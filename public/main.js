const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1080,
        height: 960,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Czyszczenie pamięci cache przed załadowaniem aplikacji
    win.webContents.session.clearCache().then(() => {
        console.log("🧹 Cache cleared");

        // Wybór URL do załadowania
        const startUrl = process.env.ELECTRON_START_URL || "http://localhost:3000";
        win.loadURL(startUrl);

        // Otwiera narzędzia developerskie Electron
        win.webContents.openDevTools();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
