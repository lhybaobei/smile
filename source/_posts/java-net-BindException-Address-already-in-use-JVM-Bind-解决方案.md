---
title: 'java.net.BindException: Address already in use: JVM_Bind 解决方案'
tags:
  - java 端口冲突
url: 1573.html
id: 1573
categories:
  - 技术总结
date: 2014-05-05 22:28:59
---

java.net.BindException: Address already in use: JVM_Bind，表示出现端口冲突异常，已经有进程占用了当前端口。  
  
解决方案如下：  
  
1、在cmd中输入命令：netstat -ano，查看所有端口的占用情况，比如我们要找的是8700端口  
  
[![7](https://res.cloudinary.com/lhybaobei/image/upload/h_198,w_300/v1563853157/71_gbcgph.jpg)](http://www.gleanbag.com/wp-content/uploads/71.jpg)  
  
2、找到占用端口8700的进程pid是2216，然后在任务管理器中删除该进程，再启动tomcat就可以了。  
  
[![8](https://res.cloudinary.com/lhybaobei/image/upload/h_300,w_290/v1563853154/81_kmm4fq.jpg)](http://www.gleanbag.com/wp-content/uploads/81.jpg)