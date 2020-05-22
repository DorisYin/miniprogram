// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 第一种写法
    title: String,
    // 第二种写法，可以设置默认值
    content: {
      type: String,
      value: '组件内容啊',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }
  },
  externalClasses:['titleclass']
})