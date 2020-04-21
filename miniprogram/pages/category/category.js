// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dringClass:[{name:"白酒",classify:["茅台","五粮液","剑南春","汾酒","泸州老窖","杜康","赖高淮","仰韶","洋河","水井坊","习酒","其他"]},
    {name:"啤酒",classify:["德国啤酒","国产啤酒","墨西哥啤酒"]},
    {name:"葡萄酒",classify:["智利","澳大利亚","法国","意大利","西班牙","国产葡萄酒","德国","美国","加拿大"]},
    {name:"洋酒",classify:["国产洋酒","其他洋酒"]}],

    currentDringClassIndex:0,//当前被选中商品分类的index
    currentBrandClassIndex:null,  //当前被选中品牌的index
    goodPictureWidth:0   //商品图片路径
  },

  // TODO 点击酒类按钮时的操作
  dringClassClick(e){
    
    this.setData({
      currentDringClassIndex:e.currentTarget.dataset.index
    })
    
  },
  //TODO 点击品牌按钮时的操作
  brandClassClick(e){
    this.setData({
      currentBrandClassIndex:e.currentTarget.dataset.index
    })
  },

  // 转致商品详情页
  toDetailUrl(){
 wx.navigateTo({
   url: '../shoppingDetail/shoppingDetail',
 })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initImageWidth()
  },
  initImageWidth:function(){
    const windowWidth= wx.getSystemInfoSync().windowWidth
    const goodPictureWidth=(windowWidth-5)/2
    this.setData({
      goodPictureWidth:goodPictureWidth
    })
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