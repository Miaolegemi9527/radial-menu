// components/radial-menu/index.js

// item 大小
var iconWidth = 50

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: Array,
    midIcon: String,
    run: {
      type: Boolean,
      value: true
    },
    speed: {
      type: Number,
      value: 50000
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    iconWidth: iconWidth,
    isPush: false,
    animations: []
  },

  // 生命周期
  lifetimes: {

    attached: function () {
      this.init()
    },
  },

  attached() {
    this.init()
  },

  /**
   * 组件的方法列表
   */
  methods: {

    init: function () {
      var that = this
      wx.getSystemInfo({
        success: function(res) {
          console.log(res)
          var windowHeight = res.windowHeight
          var windowWidth = res.windowWidth
          // 半径
          that.pushRadius = (windowWidth - iconWidth * 3) / 2
          // 宽
          var pushWidth = iconWidth + that.pushRadius * 2
          // 中间 原点
          var originX = (windowWidth - iconWidth) / 2
          var originY = (windowHeight - 64 - iconWidth) / 2
          // 转盘 原点
          var originX2 = (windowWidth - pushWidth) / 2
          var originY2 = (windowHeight - 64 - pushWidth) / 2
          that.setData({
            windowHeight: windowHeight,
            windowWidth: windowWidth,
            pushWidth: pushWidth,
            originX: originX,
            originY: originY,
            originX2: originX2,
            originY2: originY2
          })
        },
      })
    },

    showTap: function () {
      var that = this
      var isPush = that.data.isPush
      if (isPush) {
        //收回动画
        that.pop()
      } else {
        //弹出动画
        that.push()
      }
      that.setData({ isPush: !isPush })
    },

    clickItem: function (e) {
      var index = e.currentTarget.dataset.index
      this.triggerEvent('click', { 'index': index })
    },

    //弹出动画
    push: function () {
      var that = this

      var midBtnAnimation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      midBtnAnimation.rotateZ(180).step()

      var count = that.data.items.length
      // 平均角度
      var angle = 360 / count
      var animations = []

      for (var i = 0; i < count; i++) {
        // 每个的角度
        var angle2 = angle * i
        // 角度转弧度
        var radians = that.toRadians(angle2)
        var x = that.pushRadius * Math.cos(radians)
        var y = that.pushRadius * Math.sin(radians)
        var animation = wx.createAnimation({
          duration: 500,
          timingFunction: 'ease-out'
        })
        animation.translate(x, y).rotateZ(angle2).scale(1, 1).opacity(1).step()
        animations.push(animation.export())
      }
      that.setData({
        midBtnAnimation: midBtnAnimation.export(),
        animations: animations
      })

    },

    // 弧度转换度
    toRadians: function (deg) {
      return deg * Math.PI / 180
    },

    //收回动画
    pop: function () {
      var that = this
      var midBtnAnimation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      midBtnAnimation.rotateZ(0).step()

      var count = that.data.items.length
      var animations = []
      for (var i = 0; i < count; i++) {
        var animation = wx.createAnimation({
          duration: 500,
          timingFunction: 'ease-out'
        })
        animation.translate(0, 0).rotateZ(0).scale(0, 0).opacity(0).step()
        animations.push(animation.export())
      }

      that.setData({
        midBtnAnimation: midBtnAnimation.export(),
        animations: animations
      })
    },

  }
})