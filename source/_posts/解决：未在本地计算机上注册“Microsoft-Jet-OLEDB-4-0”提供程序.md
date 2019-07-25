---
title: 解决：未在本地计算机上注册“Microsoft.Jet.OLEDB.4.0”提供程序
url: 1262.html
id: 1262
categories:
  - 技术总结
date: 2012-01-05 09:50:26
tags:
---

用.net写的程序，换成win7(64位)后，运行程序，抛出异常：未在本地计算机上注册 Microsoft.Jet.OLEDB.4.0 提供程序，解决问题的办法是：  
  
解决方法之一：编译项目指定目标平台为x86就完了，不能用any cpu  
  
首先，选择要调试项目的属性  
  
[![](https://res.cloudinary.com/lhybaobei/image/upload/v1563853352/17_iv0tiv.jpg "1")](https://res.cloudinary.com/lhybaobei/image/upload/v1563853352/17_iv0tiv.jpg)  
  
其次，将目标平台改为X86  
  
[![](https://res.cloudinary.com/lhybaobei/image/upload/v1563853350/25_aurrwh.jpg "2")](https://res.cloudinary.com/lhybaobei/image/upload/v1563853350/25_aurrwh.jpg)

![](file:///C:UserssmileAppDataRoamingTencentUsers179865310QQWinTempRichOle5E]5}0%QN37C955_`2Z(OWM.jpg)

解决方法之二是：  
  
在对应的 IIS 应用程序池中，“设置应用程序池默认属性”/“常规”/”启用32位应用程序”，设置为 true。