## 起步
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

## 资源管理
-- 加载CSS
npm install --save-dev style-loader css-loader  sass-loader node-sass
// npm install --save-dev style-loader css-loader  less less-loader 没用less
-- 加载图片
npm install --save-dev file-loader    
-- 热加载
npm install webpack-dev-server --save-dev
npm install --save-dev clean-webpack-plugin
npm install --save-dev html-webpack-plugin