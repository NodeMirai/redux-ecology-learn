## 环境

### webpack与相关编译(ts,tsx,less...)

使用electron-webpack

### redux生态

1. react-redux
2. redux-saga
3. redux

### 调试相关

1. 日志logger

## 项目架构

### 主进程

主进程需要实时打包供electron运行，而无法使用webpack-dev-server的方式在内存中运行

### 渲染进程

渲染进程同网页应用相同，以renderer下的index为主文件，webpack正常以index为入口打包即可