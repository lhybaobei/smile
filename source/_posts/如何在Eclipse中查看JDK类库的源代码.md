---
title: '如何在Eclipse中查看JDK类库的源代码 '
url: 1521.html
id: 1521
categories:
  - 学习经验
date: 2013-07-30 03:23:17
tags:
---

**设置：**   
  
1.点 “window”-> "Preferences" -> "Java" -> "Installed JRES"  
  
2.此时"Installed JRES"右边是列表窗格，列出了系统中的 JRE 环境，选择你的JRE，然后点边上的 "Edit..."， 会出现一个窗口(Edit JRE)  
  
3.选中rt.jar文件的这一项：“c:\\program files\\java\\jre\_1.5.0\_06\\lib\\rt.jar” 点 左边的“+” 号展开它，  
  
4.展开后，可以看到“Source Attachment:(none)”，点这一项，点右边的按钮“Source Attachment...”,  
  
选择external location，选择右边的external file，浏览到你的JDK目录下的 “src.zip”文件  
  
例如：C:/Program Files (x86)/Java/jdk1.6.0_45/src.zip  
  
5.一路点"ok",结束。  
  
   
  
选择想要查看的类，ctrl+鼠标左键即可查看  
  
dt.jar是关于运行环境的类库,主要是swing的包 tools.jar是关于一些工具的类库 rt.jar包含了jdk的基础类库，也就是你在java doc里面看到的所有的类的class文件