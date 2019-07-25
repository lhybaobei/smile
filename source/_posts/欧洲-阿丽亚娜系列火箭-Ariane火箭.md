---
title: 欧洲---阿丽亚娜系列火箭(Ariane火箭)
tags:
  - Ada语言
  - Ariane火箭
url: 946.html
id: 946
categories:
  - 学习经验
date: 2010-08-31 02:51:48
---

1973年7月，法国提议并联合西欧11个国家成立欧洲空间局，着手实施研制阿丽亚娜火箭计划。  
  
阿丽亚娜（Ariane,也译为阿里安）是古希腊一位美丽公主的名字，她帮助热恋中的雅典王子塞休斯逃出魔鬼把守的迷宫，一起奔向自由。现在，阿丽亚娜成为现代火箭的名字，以冲出太空迷宫而举世闻名。  
  
阿丽亚娜火箭至今已研制成功了5种型号。分别是“Ariane-1”、“Ariane-2”、“Ariane-3”、“Ariane-4”和“Ariane-5”。  
  
  
  
阿丽亚娜系列火箭的成功，是欧洲联合自强的一个象征，它在国际航天市场的角逐中占有重要地位，世界商业卫星的发射业务大约有50%由阿丽亚娜火箭承担。  
  
将大的浮点数转换成整数是一种常见的程序错误来源。1996年6月4日，对于Ariane 5火箭的初次航行来说，这样一个错误产生了灾难性的后果。发射后仅仅37秒，火箭偏离它的飞行路径，解体并爆炸了。火箭上载有价值5亿美元的通信卫星。6亿美元付之一炬。后来的调查显示，控制惯性导航系统的计算机向控制引擎喷嘴的计算机发送了一个无效数据。失事调查报告指出，火箭爆炸是因为：  
  
during execution of a data conversion from 64-bit floating point to 16-bit signed integer value. The floating point number which was converted had a value greater than what could be represented by a 16-bit signed integer. This resulted in an Operand Error.  
  
它没有发送飞行控制信息，而是送出了一个诊断位模式，表明在将一个64位浮点数转换成16位有符号整数时，产生了溢出。 溢出值测量的是火箭的水平速率，这比早先的Ariane 4火箭所能达到的高出了5倍。在设计Ariane 4火箭的软件时，他们小心地分析了数字值，并且确定水平速率绝不会超出一个16位的数。不幸的是，他们在Ariane 5火箭的系统中简单地重新使用了这一部分，而没有检查它所基于的假设。  
  
上述程序是用Ada写成的。Ada代码如下：  
  
begin sensor\_get(vertical\_veloc\_sensor); sensor\_get(horizontal\_veloc\_sensor); vertical\_veloc\_bias := integer(vertical\_veloc\_sensor); horizontal\_veloc\_bias := integer(horizontal\_veloc\_sensor); ... exception when numeric\_error => calculate\_vertical\_veloc(); when others => use\_irs1(); end;  
  
1997年10月30日，阿丽亚娜5型运载火箭进行第二次鉴定发射时，终于获得成功。 2007年3月11日，在位于法属圭亚那的库鲁（Kourou）航天发射中心，阿丽亚娜-5ECA型大推力火箭发射升空。这枚火箭携带了英国国防部的军事通信卫星Skynet5A和印度空间研究组织的民用通信卫星INSAT4B。这是欧洲生产的最大推力火箭的2007年的第二次成功发射。  
  
Ariane 5 - third dual-payload launch of 2007（阿丽亚娜-5在2007年的第三次一箭双星）  
  
14 August 2007，an Ariane 5 ECA launcher lifted off from Europe's Spaceport in French Guiana on its mission to place two telecommunications satellites into geostationary transfer orbits.  
  
Lift-off of flight V177 took place at 23:44 GMT/UTC. The satellites were accurately injected into the correct transfer orbits about 30 minutes later.  
  
The payload comprised SPACEWAY 3, which will deliver broadband services throughout North America, and BSAT-3a, which will provide direct television links for Japan. The payload mass was 8848 kg; the satellite masses totalled 8042 kg, with payload adapters and dispensers making up the additional 806 kg.  
  
This third launch of the year keeps Arianespace and Europe's Spaceport on target to perform six Ariane 5 launches in 2007 as they head towards their target of seven to eight missions per year from 2009.   
  
欧洲空间局把阿丽亚娜火箭发射基地建在南美洲东北海岸的法属圭亚那，它的优越之处是靠近赤道，从这里易于把卫星送入极地轨道和赤道轨道。美国肯尼迪航天中心位于佛罗里达州东海岸的梅里特岛，我国的新火箭发射基地选海南。  
  
参观库鲁（Kourou）航天发射中心及火箭发射准备过程：[http://www.esa.int/SPECIALS/Launchers\_Europe\_s\_Spaceport/SEMZ3QWA6QD\_0.html](http://www.esa.int/SPECIALS/Launchers_Europe_s_Spaceport/SEMZ3QWA6QD_0.html)  
  
关于Ada： Ada 是一种表现能力很强的通用程序设计语言，它是 DoD（美国国防部）为克服软件开发危机，耗费巨资，历时近 20 年研制成功的。它被誉为第四代计算机语言的成功代表。与其他流行的程序设计语言不同，它不仅体现了许多现代软件的开发原理，而且将这些原理付诸实现。因此，Ada 语言的使用可大大改善软件系统的清晰性、可靠性、有效性、可维护性。Ada 是现有的语言中无与伦比的一种大型通用程序设计语言，它是现代计算机语言的成功代表，集中反映了程序语言研究的成果。Ada的出现，标志着软件工程成功地进入了国家和国际的规模。在一定意义上说，Ada还刺破了“冯.偌依曼思维模式” (Von Newman Mind-set) 的桎梏，连同 Ada 的支持环境(APSE)一起，形成了新一派的所谓 Ada 文化。它是迄今为止最复杂，最完备的软件工具。Ada 语言曾是 DoD 指定的唯一的一种可用于军用系统开发的语言，我国军方也将 Ada 做为军内开发标准（GJB1383《程序设计语言Ada》）。  
  
Ada语言已在安全性敏感的领域里显示了其不一般的力量，尤其是在交通运输业中。美国航空电子宇航系统部,使用Ada开发空中客车A340的飞行警报系统(FWS)。波音公司的777飞机大量使用了Ada语言，而且准备在具有最高安全性适航证书级别(DOl78b A和B级)的软件中继续使用该语言。Ada在地铁中也有应用，如伦敦Jubilee； 巴黎地铁最近的延伸段；纽约地铁的Camarsie线；法国的高速火(TGV)和欧洲、亚洲以及拉美的地铁轨道系统。还有在商业船用控制中也有它的应用。  
  
Ada在其它领域像电视、娱乐业、医学计算、通信网络开关、金融和信息系统都得到了应用。它也应用于含有高安全性核反应堆的工业控制中和桌面软件中。当然Ada象往常一样使用于美国和联合国的军事项目中。像NASA 和欧洲空间办事处之类的非军事政府机构也使用Ada。美国第四代战斗机JSF使用的500多万行代码100%采用Ada。在当今世界和外层空间中有数亿行的Ada的代码在使用。  
  
1996年6月4日欧洲航天局阿利亚纳五号火箭失败的原因  
  
欧洲航天局阿利亚纳五号火箭失败是因为 Ada 语言在编译过程的检查失败导致的。 将大的浮点数转换成整数是一种常见的程序错误来源。1996年6月4日，对于Ariane 5火箭的初次航行来说，这样一个错误产生了灾难性的后果。发射后仅仅37秒，火箭偏离它的飞行路径，解体并爆炸了。火箭上载有价值5亿美元的通信卫星。6亿美元付之一炬。后来的调查显示，控制惯性导航系统的计算机向控制引擎喷嘴的计算机发送了一个无效数据。失事调查报告指出，火箭爆炸是因为：   During execution of a data conversion from 64-bit floating point to 16-bit signed integer value, the floating point number which was converted had a value greater than what could be represented by a 16-bit signed integer. This resulted in an Operand Error.   它没有发送飞行控制信息，而是送出了一个诊断位模式，表明在将一个64位浮点数转换成16位有符号整数时，产生了溢出。 溢出值测量的是火箭的水平速率，这比早先的Ariane 4火箭所能达到的高出了5倍。在设计阿利亚纳4火箭的软件时，他们小心地分析了数字值，并且确定水平速率绝不会超出一个16位的数。不幸的是，他们在阿利亚纳5火箭的系统中简单地重新使用了这一部分，而没有检查它所基于的假设。Ada代码如下：   beginsensor\_get(vertical\_veloc\_sensor);sensor\_get(horizontal\_veloc\_sensor); vertical\_veloc\_bias := integer(vertical\_veloc\_sensor);horizontal\_veloc\_bias := integer(horizontal\_veloc\_sensor); ... exceptionwhen numeric\_error => calculate\_vertical\_veloc();when others => use\_irs1(); end;