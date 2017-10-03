# 在球场Web应用Demo

本项目可作为开发React Web应用的参考，主要用到的第三方库包括React、Redux、React-Router和Redux-Form。

## 开发环境

开发环境由Facebook官方提供的 [Create-React-App](https://github.com/facebookincubator/create-react-app) 工具创建。该工具基于Webpack，支持各种最新的Web开发技术和工具，比如ES6、JSX、SASS、Dev Server、代码打包等。

## 编码规范

编码规范遵循 [StandardJS](https://standardjs.com/readme-zhcn.html) ，统一代码风格，方便代码交流。

## 第三方库

|库名|用途|
|-------|-----------|
|[react](https://github.com/facebook/react)|DOM生成和更新|
|[redux](http://redux.js.org/)|应用状态管理|
|[react-router](https://github.com/ReactTraining/react-router)|页面导航|
|[redux-form](https://github.com/erikras/redux-form/)|表单输入保存、验证和提交|
|[reactstrap](https://github.com/reactstrap/reactstrap)|Bootstrap页面布局和组件|
|[axios](https://github.com/axios/axios)|后端服务请求|

## 目录结构

```
zqc-web-demo
├── README.md
├── build // 打包目录
├── node_modules
├── package-lock.json
├── package.json
├── public // 页面中引用的资源文件存放目录，JS引用的资源文件需放到“src/assets”目录下
├── src // JS代码
└── yarn.lock
```

## 本地开发

### 安装Create-React-App工具

```
> npm i -g create-react-app
```

### 下载代码并安装NPM依赖包

```
> git clone git@github.com:jaggerwang/zqc-app-demo.git
> cd zqc-web-demo && npm i
```

### 本地运行

```
> npm start
```
上面的命令将启动一个Dev Server，并自动在浏览器里打开应用。

## 运行测试

```
> npm test
```

## 打包

```
> npm run build
```
上面的命令会将所有JS，及其引用的CSS和图片资源打包到“build”目录，同时还会拷贝“public”目录下的文件到“build”下。

## 其它

### 代码格式化

本项目代码遵循StandardJS规范，可执行`npm run format`来检测代码规范性，执行`npm run format:fix`来自动格式化代码。

### 使用SASS

可安装`node-sass-chokidar`来支持SASS，具体安装配置参考Create-React-App工具官方文档。

### API代理
为了避免请求后端API服务的时候跨域，开发时可以在Dev Server里配置代理来转发API请求。默认已安装`http-proxy-middleware`来支持请求转发，并配置转发所有路径以“/api”打头的请求到后端服务，具体参考“package.json”文件里“proxy”配置项。

更多特性支持请参考Create-React-App官方文档。
