---
title: 'c#中如何绑定鼠标右键事件'
tags:
  - 'c#鼠标右键事件'
url: 1109.html
id: 1109
categories:
  - 学习经验
date: 2011-04-19 07:43:55
---

this.pictureBox1.MouseClick += new MouseEventHandler(pictureBox1_MouseClick);
void pictureBox1_MouseClick(object sender, MouseEventArgs e)
{
if (e.Button == MouseButtons.Right)
{
//做你的处理
//MessageBox.Show("d");
}
}