// pages/detail/detail.js
let datas = require('../../datas/list-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    isCollected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index=options.index;
    console.log(index);
    this.setData({
      detailObj: datas.list_data[index]
    });
    // console.log(options);
  },

  handleCollection(){
    this.setData({
      isCollected: !this.data.isCollected
    });

    let title=this.data.isCollected?"收藏成功":"取消收藏"
    wx.showToast({
      title,
      icon: 'success',
      duration: 2000
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