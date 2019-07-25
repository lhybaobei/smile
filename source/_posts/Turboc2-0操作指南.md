---
title: Turboc2.0操作指南
tags:
  - turboc2.0
  - turboc使用指南
url: 994.html
id: 994
categories:
  - 技术总结
date: 2010-10-26 19:44:42
---

Turbo C 2.0是Borland公司1987年推出的C语言编译器，具有编译速度快、代码优化效率高等优点，所以在当时深受喜爱。Turbo C 2.0提供了两种编译环境：一种是类似于UNIX环境的命令行，包含一个TCC编译器和一个MAKE实用程序；一种是集成开发环境，由编辑器、编译器、MAKE实用程序和RUN实用程序，还有一个调试器组成。在这里，我就向大家简单介绍一下集成环境的使用方法。  
  
**Turbo C 2.0基本使用指南（二）**  
  
**配置**  
  
进入Tc，您可以看到类似下面这样的屏幕。按F10到菜单，将光标移到**Option**s，打开下拉菜单（或可以按Alt+o打开Options下拉菜单），选择Directories,第一行是include文件目录，是你的TC.EXE,所在的目录,假如你的TC.EXE是在C:\\TC20下那么就是c:\\tc20\\include；同样,第二行是library目录，设成c:\\tc20\\lib第三行为输出.EXE和.OBJ文件的目录，如果为空则输出到c:\\tc20目录下；第四行为Tc的目录，这里设为c:\\tc20；第五行是建立PICK文件，默认是TCPICK.TCP，该文件的作用是每次只要键入tc即可在启动TC时自动加载上次编辑的文件。完了以后一定要**Save Options。**否则下次你还要在设置保存时覆盖原来的就可以了.好了，设置完这些目录以后，您就可以开始进行基本的开发工作了。  
  
**Turbo C 2.0基本使用指南（二）** 现在我们来讲一下各菜单项的功能。  
  
File菜单： File菜单中都是些一般编辑器中常有的功能，如Load、Save等，相信没有必要再讲了，我们就省点口水吧。  
  
  
  
Edit菜单： Edit菜单的作用是从菜单切换到编辑栏。其实大可不必这么麻烦，只要按ESC键就可以了。  
  
Run菜单： Run菜单中的命令用于运行程序。  
  
RUN命令不用讲了，当然是用来运行编译好的程序的啦。  
  
Program Reset可以终止当前运行的程序，释放分配的内存空间。这在进行调试时退出程序的方法.  
  
Go To Cursor使程序执行到光标所在处。  
  
Trace Into单步执行程序，并且进入函数（必须是同一源文件中定义的函数）。  
  
Step Over单步运行程序，但不进入函数。  
  
User Screen返回到DOS界面，按任意键可返回。  
  
Compile菜单 Compile菜单用于编译.OBJ文件和连接生成.EXE可执行文件。  
  
Compile To OBJ编译生成OBJ目标文件。  
  
MAKE EXE File编译、连接一步完成，生成EXE可执行文件。  
  
Link EXE File连接OBJ文件以生成EXE可执行文件。  
  
Build all无条件编译所有文件，无论过时与否。  
  
Primary C File可在编译过程中发现错误是重新载入文件(.H .C)。  
  
Get Info可获得以下信息：  
  
源文件  
  
与当前文件相联系的目标文件  
  
当前源文件名  
  
文件大小  
  
程序退出码  
  
可用空间  
  
Project菜单 Project菜单提供与工程有关的命令。  
  
Project Name给你的工程起个好听的名字。  
  
Break Make On设定终止MAKE的缺省条件，通常为ERRORS。  
  
Auto Dependencies自动依赖检查。就是说让MAKE自动检查盘中是否有相应.C和.H文件。  
  
Clear Project清除工程文件名，重置消息窗口。  
  
Remove Messages将错误消息从消息窗口中清除。  
  
**Turbo C 2.0使用指南（三）** 6\. Options菜单  
  
前面我们已经使用过options菜单，可想而知这里主要设置一些集成环境的参数。  
  
Compiler  
  
Model内存模式，不同的内存模式将使用不同类型的指针。 Define宏定义，可用分号“；”划分多重宏定义。 Code Generation代码生成，控制编译器生成怎样的代码。 Optimization优化，可按用户的需要优化程序的代码。 Source源代码，控制编译器如何处理源代码。 Errors错误，让用户可以控制编译器如何处理和响应诊断信息。 Names，我也不知道是用来干嘛的。 Linker  
  
Map File Menu选择映射文件的类型。 Intialize Segments段初始化 Default Libraries设置缺省库表。 Graphics Libraries打开自动查找BGI图形库。 Warn Duplicate symbols打开可使连接器警告在目标及库文件里出现的相同字符。 Stack Warning抑制连接器产生No Strack消息。 Case-sensitive Link是否区别大小写。 Environment  
  
Message Tracking消息跟踪，编译时会跟踪编辑器里的语法错误。 Keep Messages告诉TC是否保存消息窗口内的消息。 Config Auto Save设置为ON时，TC将自动保存对TC所做的设置；否则必须使用Options->Save Options才将改动保存。 Brackup Files打开则会在保存文件时建立备份文件。 Tab Size设置制表符大小，缺省为缩进8个字节。 Zoomed Windows设置窗口为全屏幕。这样的话，编辑窗口或消息窗口都将变成整个屏幕的大小，只有活动窗口是可见的。用F6可以互相切换。 Screen Size设置屏幕大小。 Directories目录设置。（看者云：前面不是已经设置好了吗？少废话了！）  
  
Arguments在用run->run运行程序时，可在这里加上参数。  
  
Save Options更改好设置以后，一定要在这里保存一下。除非将Options->Environment-> Config Auto Save置为ON。  
  
Retrieve Options这个命令可以重新加载以前保存的配置文件。  
  
**Turbo C 2.0使用指南（四）** 7\. Debug菜单  
  
Debug菜单命令用来完成调试工作。  
  
Evaluate可以测试甚至修改一个变量或表达式的值。注意：表达式不能包含函数调用和宏。  
  
Call Stack用来跟踪当前函数的调用关系，他弹出一个包含调用栈的窗口。  
  
Find Function顾名思义，就是查找函数定义。只有在运行调试时可用。  
  
Refresh Display刷新屏幕。如果编辑屏被你的程序改写了，可以用它恢复。  
  
Display Swapping控制是否在程序运行是切换屏幕。  
  
Source Debugging打开源代码调试。  
  
8\. Break/watch菜单  
  
Break/watch菜单用来设置/删除断点或监视项。  
  
Add Watch添加监视项。可以监视一个变量或表达式的值。  
  
Delete Watch删除监视项。  
  
Edit Watch编辑你所监视的表达式。  
  
Remove All Watches删除所有监视项。  
  
Toggle Breakpoint设置或删除断点。如果设置了断点，程序运行到这一行就会停下来。  
  
Clear All Breakpoints清除所有断点。  
  
View Next Breakpoint按设置顺序移到下一个断点处。  
  
Turbo C 2.0集成环境的所有菜单命令已经介绍完了，下面我们将通过一个实例来看看在Turbo C下如何创建你的程序。  
  
**Turbo C 2.0使用指南（五）** 现在让我们来看看怎样在TurboC中创建程序。我们可以键入tc或tc test进入TC集成环境。在编辑窗中输入我们的程序代码，例如下面这段：  
  
/\* just for a testing */ /* print a string "Hello,world!" */ int main(void) { char str\[\]="Hello,world!"; void showstr(char \*p); showstr(str); return 0; } void showstr(char \*p) { printf(p); } 代码输入完后按F2来存盘。要进行编译最简单的是按F9用MAKE实用程序，编译并且连接生成EXE文件。此时如果程序中有错误，编译器会在底下的消息窗口给出错误信息（关于错误信息的意思，以后我会再写一篇），光标移到消息条上，按ENTER或F6可回到编辑窗再修改程序。  
  
我们可以通过设置断点和监视项来调试程序。将光标移到第5行，按ctrl+F8即可在这里设置断点。将光标移到第7行的str上，按ctrl+F7可添加监视项监视str的值。  
  
然后按ctrl+F9运行程序。由于刚才在第5行设置了断点，程序运行到第6行就会暂停，要再按一次F9才继续。从watch窗口中，我们可以看到str: "Hello,world!"，这是str当前的值。如果str的值改变，这里的显示也会跟着改变。  
  
我们还可以按F8或F7单步执行程序。我们来让程序运行到第7行，这时你就可以发现F8和F7的区别了。F8将执行完第7行的指令后，光条直接移到了第8行，也就是说它跳过了函数showstr()。而F7会从第7行跳到第10行而进入函数showstr()内部。请注意，F7只能进入当前编辑文件中定义的函数，而且不能进入库函数。