* 快速开始
  > 项目说明文档
  + 项目目录说明
    1. server 表示所有nodejs放的地方。服务端的项目包括给后台管理界面(admin)提供的接口和给web端提供的接口 
  + node的秘密
    1. Mac 中node的安装路径查看：which node (打开terminal终端中使用command查看) /usr/local/bin/node 
    2. node 全局安装的路径：/usr/local/lib/node_modules'
    3. 使用npm init -y 初始化一个node项目
    4. 新建一个index.js文件，做为一个入口文件
    5. 在package.json中 "scripts":对象中加一个：“serve”:“nodemon index.js”
    6. 使用命令npm install -g nodemon 全局安装 因为以后任何一个node项目都会用到它 ，安装完以后就可以使用npm run serve 启动服务端的项目
    7. 使用命令 npm install axios 下载请求接口的js
  + vue的秘密
    1. 使用 sudo npm install -g @vue/cli 安装vue的command工具
    2. 使用vue create web 命令创建一个web端的项目
    3. 使用vue create admin 命令创建一个后台管理界面的项目
  > 管理后台的基础界面
  +  基于Element UI的后台管理基础界面的搭建  
    1. 使用vue cli脚手架工具command 安装Element UI这个框架 command：vue add element
    2. 同样使用工具命令安装vue-router 可以进行页面之间的跳转 command：vue add router
  > 移动端网站
    1. ‘工具样式的’概念和SASS（scss） 安装对应的包 npm install -D sass sass-loader
    2. 样式重置
    3. 网站色彩和自定义（color，text）
    4. 通用flex布局样式定义（flex）
    5. 常用边距离定义（margin，padding）
  * web端的开始
    > 路由
    1. 使用vue@cls3脚手架工具生成vue的一个项目命令 vue create web--项目名称
    2. 在项目目录下给项目添加路由   vue add router
    3. 在web下安装轮播图的一个插件  npm install vue-awesome-swiper
    4. 使用npm 安装axios 
    5. 处理格式化时间的模块 dayjs
   
   