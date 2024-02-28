const { app, BrowserWindow, nativeImage } = require('electron');

if(!app.isPackaged){
    require('electron-reload')(__dirname,{
        electron: require(`${__dirname}/node_modules/electron`)
    });
}

function createWindow(){
    const icon = nativeImage.createFromPath(`${app.getAppPath()}/src/app/assets/icons/icon.ico`);

    if(app.dock){
        app.dock.setIcon(icon);
    }

    const win = new BrowserWindow({
        icon,
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('src/app/index.html');
    win.removeMenu();
}

app.whenReady().then(createWindow);

app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin') app.quit();
});