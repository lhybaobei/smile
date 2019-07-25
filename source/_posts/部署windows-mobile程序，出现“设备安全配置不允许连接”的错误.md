---
title: 部署windows mobile程序，出现“设备安全配置不允许连接”的错误
tags:
  - windows mobile
  - 设备安全
url: 1198.html
id: 1198
categories:
  - 技术总结
date: 2011-11-04 02:25:52
---

今天和往常一样在windows mobile 6的设备上部署应用程序，但是有这个错误"设备安全配置不允许连接。请确保您具有所开发设备的适当证书。有关连接此设备的正确安全设置，请查阅 SDK 文档"。  
  
于是上网搜索解决方案：  
  
1.cmd下运行位于：C:\\Program Files\\Microsoft Visual Studio 8\\SmartDevices\\SDK\\SDKTools下面的RapiConfig.exe /P SecurityModels\\open.xml  
  
试过了，但还是不行。估计得重启吧，虚拟机开的东西太多了，懒得重启。另寻他法... 2.使用Security Configuration Manager改变设备的安全级别。  
  
C:\\Program Files\\Microsoft\\下，找到Security Configuration Manager，在Selected Configuration 部分的下拉列表中，单击Security Off，然后单击Provision按钮，等待  
  
Security Configuration Manager配置移动设备仿真器。在“Provisioning Result”消息框中，单击OK.  
  
切换到Windows Mobile 6 Professional仿真器，在“Tool.cab was successfully installed on your device”页上，单击“ok”。

单击“Start”，然后单击“File Explorer”。在“My Documents”页上，单击 LegalCourierCab 文件。 在“Installation was unsuccessful”页上，单击“ok”。

重新部署VS 里面的程序，大功告成 没有报错 呵呵。。。