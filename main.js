const { app, BrowserWindow } = require('electron')

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 1000,
    height: 1000,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.setBounds({ x: 300, y: -500 })

  // 加载index.html文件
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)