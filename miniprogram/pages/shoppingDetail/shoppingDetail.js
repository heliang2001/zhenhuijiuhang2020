// pages/shoppingDetail/shoppingDetail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loop_image_height:0,//轮播图高
    flag: true
  },
  // 当点击“X”或遮罩时，执行 show，flag变为false，遮罩层与conts区域出现
  show: function () {
    this.setData({ flag: false })
  },
  // 当遮罩层与conts区域出现时，执行hide,flag变为true，遮罩层与conts区域再次被隐藏
  hide: function () {
    this.setData({ flag: true })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      loop_image_height : app.globalData.systemInfo.windowWidth,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})