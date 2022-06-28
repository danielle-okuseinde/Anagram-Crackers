const { app, BrowserWindow } = require("electron")
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 700
    })
    win.loadFile('index.html')
}

app.whenReady().then( () => {
    createWindow()
})
app.on('window-all-closed', () => {
    app.quit()
})