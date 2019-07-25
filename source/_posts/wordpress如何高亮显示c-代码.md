---
title: 'wordpress如何高亮显示c#代码'
url: 1116.html
id: 1116
categories:
  - 学习经验
date: 2011-04-19 08:06:15
tags:
---

**1 添加WP-CodeBox插件**  
  
**<pre lang="Csharp">** this.pictureBox1.MouseClick += new MouseEventHandler(pictureBox1\_MouseClick); void pictureBox1\_MouseClick(object sender, MouseEventArgs e) { if (e.Button == MouseButtons.Right) { //做你的处理 //MessageBox.Show("d"); } } **</pre>**  
  
**2 只需要将上面红色的标签加到代码两端就ok了，同志们可点击上一篇文章看看偶的效果，呵呵。**