// pages/wxss/wxss.js
Page({

  // 搜索框官方库
  // mixins: [require('../../mixin/themeChanged')],

  mixins:[require('../wxss/mixin/themeChanged')],  //引入清除搜索内容的x
  data: {
      inputShowed: false,
      inputVal: ""
  },
  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  }
})