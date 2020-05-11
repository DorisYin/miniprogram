// pages/wxml/wxml.js
Page({
  data: {
    message: 'hhh',
    firstname: 'zhang',
    lastname: 'san',
    age: 20,
    nowtime: new Date().toLocaleString(),
    box: 'box',
    isShow: true,
    score:90

  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowtime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleButton() {
    this.setData({
      box: this.data.box == 'box' ? 'box1' : 'box'
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }


})