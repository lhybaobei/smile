---
title: 解决 Windows XP下新建管理员账户后无法显示administrator
url: 1535.html
id: 1535
categories:
  - 学习经验
date: 2013-08-28 22:10:26
tags:
---

   
  
点击屏幕左下有的“开始”按钮，再选择“运行”命令：  
  
   
  
　在弹出的“运行”对话框中输入“regedit”命令： 打开注册表的后，定位到注册表HKEY\_LOCAL\_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionWinlogonSpecialAccountsUserList下： 在右边空白点地方，单击鼠标右键，在弹出的菜单中选择“新建”，再选择“DWORD值”： 　将新建的DOWRD值名称改为Administrator： 双击Administrator键值，在弹出的“编辑DOWRD 值”对话框中，将“数值数据”的值改为“1”：  
  
   
  
无法显示administrator账户怎么办 　　最后单击“确定”，并退出注册表重新启动电脑即可。