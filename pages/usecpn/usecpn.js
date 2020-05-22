// pages/usecpn/usecpn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0
  },
  handleIncrement(event){
    console.log('-------',event)
    this.setData({
      count:this.data.count+1
    })
  },
  handleItemClick(event){
    console.log("ddd",event)
  },
  handleIncrementCpn(){
    console.log("dd");
    //最终目的，修改组件内的数据
    //1.获取组件对象
    const my_select=this.selectComponent('.select-class')
    console.log(my_select)
    //2.通过setData修改组件内的counter值（不推荐）
    // my_select.setData({
    //   counter:my_select.data.counter+20
    // })
    // 3.通过方法进行修改
    my_select.incrementCounter(10)
  }

 
})