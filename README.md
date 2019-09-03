# radial-menu
微信小程序【圆形菜单】

关于：
圆上点的坐标
假设
圆心坐标：(x,y)
半径：r
角度：a
则圆上任意一点坐标：(x2,y2)
x2 = x + r * cos(a)
y2 = y + r * sin(a)

在小程序中,求 
sin 函数 Math.sin(radian)，其中 radian 单位为弧度
角度(a)转弧度(radian)：radian = a * Math.PI / 180
cos 函数同理

![Image text](https://raw.githubusercontent.com/Miaolegemi9527/radial-menu/master/pop.png)
![Image text](https://raw.githubusercontent.com/Miaolegemi9527/radial-menu/master/push.png)
![Image text](https://raw.githubusercontent.com/Miaolegemi9527/radial-menu/master/%E9%A2%84%E8%A7%88.gif)
