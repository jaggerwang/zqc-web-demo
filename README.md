# Zaiqiuchang admin web app demo

[Zaiqiuchang(在球场)](https://www.zaiqiuchang.com) is a mobile app developed using react native, both iOS and Android are supported. This open source project is the lite version of the admin web app, which developed using react, redux and bootstrap. This project can be used as a react web app starter kit.

### Screenshots

<img src="https://zqc.cdn.zaiqiuchang.com/screenshot/admin/admin-dev.png?x-oss-process=style/w-720" />

### Packages

|Package|Description|
|-------|-----------|
|[react](https://github.com/facebook/react)|Build ui component.|
|[redux](http://redux.js.org/)|Manage ui state.|
|[react-router](https://github.com/ReactTraining/react-router)|Page route.|
|[axios](https://github.com/mzabriskie/axios)|Http request.|
|[react-icons](https://github.com/gorangajic/react-icons)|Using material design and font awesome icon as react component.|
|[reactstrap](https://github.com/reactstrap/reactstrap)|Using bootstrap 4 components in react.|
|[bootstrap](https://v4-alpha.getbootstrap.com/)|Layout and css framework.|
|[karma](https://github.com/karma-runner/karma)|Run test.|
|[webpack](https://github.com/webpack/webpack)|Package app, transform es6 javascript and sass css source code.|

### How to run

```
> git clone git@github.com:jaggerwang/zqc-admin-demo.git && cd zqc-admin-demo
> npm i # you may need a proxy to improve download speed, if failed, remove node_modules directory and retry.
> npm run dev

> zqc-admin-demo@1.0.0 dev /Users/jagger/projects/zqc-admin-demo
> better-npm-run dev

running better-npm-run in /Users/jagger/projects/zqc-admin-demo
Executing script: dev

to be executed: nodemon bin/dev-server --ignore coverage --ignore dist --ignore tests --ignore src
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node bin/dev-server index.js`
  app:config:project Creating default configuration. +0ms
  app:config:project Looking for environment overrides for NODE_ENV "development". +5ms
  app:config:project Found overrides, applying to default configuration. +1ms
  app:config:webpack Creating configuration. +795ms
  app:config:webpack Enabling plugins for live development (HMR, NoErrors). +1ms
  app:server Enabling webpack dev and HMR middleware +113ms
  app:bin:dev-server Server is now running at http://localhost:3000. +63ms
webpack built 60b61024055be5179b61 in 5558ms
Hash: 60b61024055be5179b61
Version: webpack 1.14.0
Time: 5558ms
                                               Asset       Size  Chunks             Chunk Names
assets/zqc-icon-fc91afab9cf09a87bd2450a4a3a3adf7.png    19.2 kB          [emitted]
                         app-60b61024055be5179b61.js    1.56 MB       0  [emitted]  app
                      vendor-60b61024055be5179b61.js     391 kB       1  [emitted]  vendor
                     app-60b61024055be5179b61.js.map    1.78 MB       0  [emitted]  app
                  vendor-60b61024055be5179b61.js.map     461 kB       1  [emitted]  vendor
                                         favicon.ico    24.8 kB          [emitted]
                                          index.html  615 bytes          [emitted]
Child html-webpack-plugin for "index.html":
         Asset    Size  Chunks       Chunk Names
    index.html  578 kB       0
webpack: Compiled successfully.

```

Open url 'http://localhost:3000' to view the app. When code modified, the app will auto reload the change.

### How to package

```
> cd zqc-admin-demo
> npm run deploy:prod

> zqc-admin-demo@1.0.0 deploy:prod /Users/jagger/projects/zqc-admin-demo
> better-npm-run deploy:prod

running better-npm-run in /Users/jagger/projects/zqc-admin-demo
Executing script: deploy:prod

to be executed: npm run deploy

> zqc-admin-demo@1.0.0 deploy /Users/jagger/projects/zqc-admin-demo
> better-npm-run deploy

running better-npm-run in /Users/jagger/projects/zqc-admin-demo
Executing script: deploy

to be executed: npm run lint && npm run test && npm run clean && npm run compile

> zqc-admin-demo@1.0.0 lint /Users/jagger/projects/zqc-admin-demo
> eslint bin build config server src tests


> zqc-admin-demo@1.0.0 test /Users/jagger/projects/zqc-admin-demo
> better-npm-run test

running better-npm-run in /Users/jagger/projects/zqc-admin-demo
Executing script: test

to be executed: node ./node_modules/karma/bin/karma start config/karma.config
  app:config:project Creating default configuration. +0ms
  app:config:project Looking for environment overrides for NODE_ENV "test". +3ms
  app:config:project No environment overrides found, defaults will be used. +2ms
  app:config:webpack Creating configuration. +1s
  app:config:webpack Applying ExtractTextPlugin to CSS loaders. +109ms
  app:config:karma Creating configuration. +1ms

START:
20 02 2017 17:26:32.373:INFO [karma]: Karma v1.4.1 server started at http://0.0.0.0:9876/
20 02 2017 17:26:32.376:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
20 02 2017 17:26:32.390:INFO [launcher]: Starting browser PhantomJS
20 02 2017 17:26:34.321:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket 4ZtdATslJOb9pUobAAAA with id 33801207
  (Store) createStore
    ✔ should have an empty asyncReducers object
    (Location)
      ✔ store should be initialized with Location state

Finished in 0.125 secs / 0.004 secs @ 17:26:35 GMT+0800 (CST)

SUMMARY:
✔ 2 tests completed

> zqc-admin-demo@1.0.0 clean /Users/jagger/projects/zqc-admin-demo
> rimraf dist


> zqc-admin-demo@1.0.0 compile /Users/jagger/projects/zqc-admin-demo
> better-npm-run compile

running better-npm-run in /Users/jagger/projects/zqc-admin-demo
Executing script: compile

to be executed: node bin/compile
  app:config:project Creating default configuration. +0ms
  app:config:project Looking for environment overrides for NODE_ENV "production". +4ms
  app:config:project Found overrides, applying to default configuration. +1ms
  app:config:webpack Creating configuration. +1ms
  app:config:webpack Enabling plugins for production (OccurenceOrder, Dedupe & UglifyJS). +1ms
  app:config:webpack Applying ExtractTextPlugin to CSS loaders. +157ms
  ...
  app:bin:compile No errors or warnings encountered. +44ms
  app:bin:compile Copying static assets to dist folder. +3ms
  app:bin:compile Compilation completed successfully. +34ms
```

The packaged app is saved in dist directory. To deploy, you only need to copy dist to your web server's root path.

### Other resources

* [在球场官网](https://www.zaiqiuchang.com)
