// Use electron to define function for the app elements

//Window definition and path
const {BrowserWindow, app} = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,

        // this is a way to avoid the app interference with the local system
        webPreferences: {
            preload: path.join(__dirname, "electron-scripts/preload.js")
        }
    })
    
    // HTML file to call
    win.loadFile("index.html")
}

// Starting function
app.whenReady().then(() => {
    createWindow();
});

// Quit function 
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})