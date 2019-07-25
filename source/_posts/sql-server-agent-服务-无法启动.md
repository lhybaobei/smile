---
title: sql server agent 服务 无法启动
tags:
  - sql server agent启动
  - sql server agent服务
url: 1191.html
id: 1191
categories:
  - 技术总结
date: 2011-10-30 23:08:26
---

今天，一个学生的虚拟机上的的sql server agent 服务无法启动了。在计算机--管理--服务里面是：sql server agent 服务启动后又停止了。一些服务自动停止，如果它们没有什么可做的，例如“性能日志和警报“服务"；   日志里有相应的错误信息：SQLServerAgent could not be started (reason: 无法连接到服务器“(local)”； SQLServerAgent 无法启动)；在外围配置管理器里面提示要以管理员身份登录。可是他就是以管理员登录的。在网上搜索答案：（1）在服务器网络实用工具里面把VIA协议禁止掉；（2）企业管理器--右键SQL实例--属性--处理器--取消选择"使用 Windows NT 纤程"，然后重新启动sql服务。  
  
第一种他本身就禁止VIA协议了。在使用第二种方法时，才发现他查看不了该实例的属性，提示DDL xplog70.dll 文件找不到，于是我在他的虚拟机里面，在C:\\Program Files\\Microsoft SQL Server\\MSSQL.1\\MSSQL\\Binn目录下查找，没有文件xplog70.dll ，我把自己虚拟机里面此目录下面的该文件xplog70.dll 拷贝到他的电脑里面，居然好了。可能是操作的时候 他不小心误删了，或者是上网的时候病毒惹的祸吧，嘿嘿。供大家参考。