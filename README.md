# radial-menu
# 微信小程序【圆形菜单】组件

关于：

**圆上点的坐标**

假设

**圆心坐标：(x,y)**

**半径：r**

**角度：a**

则圆上任意一点坐标：(x2,y2)

**x2 = x + r * cos(a)**

**y2 = y + r * sin(a)**

在小程序中,求

sin 函数 **Math.sin(radian)**，其中 radian 单位为弧度

角度(a)转弧度(radian)：

**radian = a * Math.PI / 180**

cos 函数 **Math.cos(radian)** 同理  

<img src="https://raw.githubusercontent.com/Miaolegemi9527/radial-menu/master/pop.png" width="240"><img src="https://raw.githubusercontent.com/Miaolegemi9527/radial-menu/master/push.png" width="240"><img src="https://raw.githubusercontent.com/Miaolegemi9527/radial-menu/master/%E9%A2%84%E8%A7%88.gif" width="240">

# 应用

在小程序【**红豆生蓝国**】中的应用

<img src="https://raw.githubusercontent.com/Miaolegemi9527/radial-menu/master/%E7%BA%A2%E8%B1%86%E7%94%9F%E8%93%9D%E5%9B%BD.jpg" width="375">
