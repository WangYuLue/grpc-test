const { exec } = require('child_process');

const port = 20003;
const execPath = "cd C:\\Users\\12061\\Desktop\\release-202012291000\\release-202012291000 && server.exe";

execRpad = exec(`${execPath} --addr-uri 127.0.0.1:${port} --log-level trace`, {
  maxBuffer: 1024 * 1024 * 1024
});

execRpad.stdout.on('data', data => {
  console.warn(`inspector stdout message: ${data}`);
});

// exe 被意外关闭
execRpad.on('close', (code, signal) => {
  logger.warn(`inspector close code:${code}`);
  logger.warn(`inspector close signal:${signal}`);
});