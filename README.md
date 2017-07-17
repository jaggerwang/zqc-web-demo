# 在球场Web应用Demo

本应用可作为开发React Web应用的参考，React用于DOM自动生成，Redux用来管理应用状态，React-router来实现页面导航。

## 开发环境

开发环境使用 [Create React App](https://github.com/facebookincubator/create-react-app) 工具来创建，使用Webpack来转换和打包代码，支持ES6和JSX语法，允许在代码里引入CSS和图片资源文件，并提供了一个开发用的Dev Server。

## 编码规范

编码规范遵循 [StandardJS](https://standardjs.com/readme-zhcn.html) 。

## 第三方库

|库名|用途|
|-------|-----------|
|[react](https://github.com/facebook/react)|React|
|[redux](http://redux.js.org/)|应用状态管理|
|[react-router](https://github.com/ReactTraining/react-router)|页面导航|
|[reactstrap](https://github.com/reactstrap/reactstrap)|Bootstrap页面布局|

## 目录结构

```
zqc-web-app
├── README.md
├── build // 打包目录
├── node_modules
├── package-lock.json
├── package.json
├── public // 非JS引用的资源文件存放目录，JS引用的资源文件需放到src目录下
├── src // JS代码
└── yarn.lock
```

## 本地开发

### 安装Create React App工具

```
> npm install -g create-react-app
```

### 下载代码并安装NPM依赖包

```
> git clone ... && cd zqc-web-demo
> npm i
```

### 本地运行

```
> cd zqc-web-demo
> npm start
```
上面的命令将启动一个Dev Server，并自动在浏览器里打开应用。

## 打包

```
> cd zqc-app-demo
> npm run build
```
上面的命令会将所有JS，及其引用的CSS和图片资源打包到“build”目录，同时还会拷贝“public”目录下的文件到“build”下。

## 其它

### 代码格式化

本项目代码遵循StandardJS规范，可执行`npm run format`来检测代码规范性，执行`npm run format:fix`来自动格式化代码。

### 使用SASS

默认已安装“node-sass-chokidar”来支持SASS，执行`npm run build-css`将转换所有SASS文件为CSS文件，路径跟原文件一致。，执行`npm run watch-css`将监控SASS文件的修改并自动执行转换。

### API Proxy

为了避免请求后端API服务的时候出现跨域，可以在前端资源服务里配置Proxy来转发API请求。默认已安装“http-proxy-middleware”来支持Proxy，会转发所有以“/api”打头的请求路径到后端服务，具体可参考“package.json”文件里的“proxy”配置项。

更多特性支持请参考“Create React App”官方文档。
