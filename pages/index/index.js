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
    count: 0

  },
  addClick() {
    // count加1了，但是不会显示到界面上
    // this.data.count += 1
    // console.log(this.data.count)
    //正确做法，界面的count实时刷新
    this.setData({
      count:this.data.count+1
    })
  },
  subClick(){
    this.setData({
      count:this.data.count-1
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