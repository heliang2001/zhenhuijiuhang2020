//index.js
const app = getApp()

Page({
  data: {
    goodPictureWidth:null
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    this.initImageWidth()
  },

  initImageWidth:function(){
    const windowWidth= wx.getSystemInfoSync().windowWidth
    const goodPictureWidth=(windowWidth-5)/2
    this.setData({
      goodPictureWidth:goodPictureWidth
    })
  },

  // 转致详情页
  toDetailUrl(event){
    wx.navigateTo({
      url: '../shoppingDetail/shoppingDetail',
    })
  }
    

  


})
