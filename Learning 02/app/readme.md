# 搭建webpack环境并创建demo
## 安装webpack
```bash
npm install webpack -g
```
## Loader
Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。
所以如果我们需要在应用中添加 css 文件，就需要使用到 css-loader 和 style-loader，他们做两件不同的事情，css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们，style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。
接下来我们使用以下命令来安装 css-loader 和 style-loader(全局安装需要参数 -g)。
```bash
npm install css-loader style-loader
```
## 创建项目
创建一个目录app:
```bash
mkdir app
```

在app下添加runoob1.js、index.html和style.css文件，接下来使用webpack命令进行打包：
```bash
webpack runoob1.js -o bundle.js --module-bind 'css=style-loader!css-loader'
```
## 配置文件
我们可以将一些编译选项放在配置文件中，以便于统一管理。在app目录下添加webpack.config.js文件，接下来只需要运行命令webpack即可生成bundle.js文件：
```bash
webpack
```
## 开发环境
当项目逐渐变大，webpack 的编译时间会变长，可以通过参数让编译的输出内容带有进度和颜色。
```bash
webpack --progress --colors
```
如果不想每次修改模块后都重新编译，那么可以启动监听模式。开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，所以监听模式的整体速度是很快的。
```bash
webpack --progress --colors --watch
```
当然，我们可以使用 webpack-dev-server 开发服务，这样我们就能通过 localhost:8080 启动一个 express 静态资源 web 服务器，并且会以监听模式自动运行 webpack，在浏览器打开http://localhost:8080/ 或http://localhost:8080/webpack-dev-server/可以浏览项目中的页面和编译后的资源输出，并且通过一个socket.io服务实时监听它们的变化并自动刷新页面。
安装webpack-dev-derver
```bash
# 安装
npm insatll webpack-dev-server -g

# 运行
webpack-dev-server --progress --colors
```

# webpack4 + san 快速构建一个项目
## 安装一些需要的依赖
```
npm install babel-core
npm install babel-loader
npm install babel-preset-env
npm instaall css-loader
npm install file-loader
npm install san-loader
npm install style-loader
npm install html-loader
npm install html-webpack-plugin
npm install webpack-cli
npm intsall webpack-dev-server
npm install webpack-merge
```
## 配置文件
* 新建一个config文件夹，配置以下文件webpack.common.js、webpack.dev.js和webpack.prod.js
* 在根目录创建 .babelrc文件
* 修改package.json文件，写入启动命令
* 根目录下新建 indexsan.html
* 新建src文件夹，新建main.js文件和组件Hello.san
* 运行yarn start，在http://localhost:8080/indexsan.html地址下可看到如下效果：
![png](image/p1.png)