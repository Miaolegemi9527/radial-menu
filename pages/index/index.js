//index.js
//获取应用实例
const app = getApp()

Page({

  click: function (e) {
    var index = e.detail.index
    var items = this.data.items
    var item = items[index]
    console.log("点了：")
    console.log(item.name)
  },

  data: {
    items: [
      { "icon": "/images/chun.png", "name": "春" },
      { "icon": "/images/chun.png", "name": "夏" },
      { "icon": "/images/chun.png", "name": "秋" },
      { "icon": "/images/chun.png", "name": "冬" },
      { "icon": "/images/chun.png", "name": "暖" },
      { "icon": "/images/chun.png", "name": "热" },
      { "icon": "/images/chun.png", "name": "凉" },
      { "icon": "/images/chun.png", "name": "冷" },
    ],
  },

  onLoad: function () {
    
  },

})
