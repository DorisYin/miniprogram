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
    score:''

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
  },
  handleInput(event){
    console.log("用户输入内容",event)
    this.setData({
      score:event.detail.value
    })
  }
})