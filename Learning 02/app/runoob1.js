// 打印
// document.write("It works.");
// 添加样式 运行命令为webpack runoob1.js -o bundle.js
// require("!style-loader!css-loader!./style.css");
// 添加样式 但是运行时命令为webpack runoob1.js -o bundle.js --module-bind 'css=style-loader!css-loader'
require("./style.css");
// 添加外部js文件
document.write(require("./runoob2.js"));