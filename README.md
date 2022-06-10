## Vue3-ts-Vite-axios of demo
写给那些正在了解前端的小伙伴，看别人博客还不如直接看操作来的快，本项目是主要为了演示最基本的使用axios，vite版和原来的vue版差不多，相关的内容我也贴出来了。  
### 1.下载本项目 -> clone命令  
### 2.解说内容  
  启动项目  
  ``
  npm i && npm run dev
  ``  


先查看package.json 我已经安装好axios了，直接查看源码即可还标注了相关的注释。  
查看顺序：
  1. components/PostData.vue  -> 调用接口 
  2. utils/http.ts & api/*    -> 封装axios 和 封装调用的接口
  3. vite.config.js (vue需要自建 vue.config.js) 解决跨域，访问异常等的配置问题

axios相关的内容  
axios中文文档：
http://www.axios-js.com/zh-cn/docs/index.html  
axios常见的解决问题：  
http://t.csdn.cn/zLUGB  
http://t.csdn.cn/eofNC  
http://t.csdn.cn/UV1xs  
http://t.csdn.cn/q914i  
http://t.csdn.cn/kLZja  