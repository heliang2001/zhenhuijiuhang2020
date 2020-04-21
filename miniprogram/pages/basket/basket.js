// pages/basket/basket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selnum:1,//已选择的购买数量
    inconChecked:false,//购物车中单项物品选取
    inconAllChecked:false//全部物品选取
  },
  // 切换单项物品勾选状态函数
  inconChecked:function(e){
    if (this.data.inconChecked==true) {
      this.setData({
        inconChecked:false
      })
    } else {
      this.setData({
        inconChecked:true
      })
    }
  },
  // 减购买数量
  lessChecked(e){
     if (this.data.selnum>1) {
      this.setData({
        selnum:this.data.selnum-1
      })
     }
  },
  // 增加购买数量
  plusChecked(e){
    if (this.data.selnum<999) {
      this.setData({
        selnum:this.data.selnum+1
      })
     }
  },
  // 全选购物车物品
  inconAllChecked(e){
    if (this.data.inconAllChecked==true) {
      this.setData({
        inconAllChecked:false,
        inconChecked:false

      })
    } else {
      this.setData({
        inconChecked:true,
        inconAllChecked:true,
      })
    }
  },

  // 转致详情页
  toDetailUrl(event){
    wx.navigateTo({
      url: '../shoppingDetail/shoppingDetail',
    })
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