// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'hello',
    age: 22,
    students: [{
      id: 1001,
      name: 'kon',
      age: 11
    }, {
      id: 1002,
      name: 'jsm',
      age: 12
    }],
    count: 0,
    bomVersions: []

  },
  addClick() {
    // count加1了，但是不会显示到界面上
    // this.data.count += 1
    // console.log(this.data.count)
    //正确做法，界面的count实时刷新
    this.setData({
      count: this.data.count + 1
    })
  },
  subClick() {
    this.setData({
      count: this.data.count - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },
  //监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部了')
  },
  //监听页面下拉刷新
  onPullDownRefresh:function() {
    console.log('下拉刷新了')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送网络请求
    wx.request({
      url: 'http://192.168.3.122:8878/eoeoBom/getBomVersions',
      //箭头函数中的this是一层一层的往上找的
      success: (res) => {
        console.log(res)
        console.log(res.data.response.data.versions)
        this.setData({
          bomVersions: res.data.response.data.versions
        })
      }
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