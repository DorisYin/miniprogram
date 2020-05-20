// pages/event/event.js
Page({

  data: {
    titles: ["衣服", "裤子", "鞋子"]
  },
  handleBtnClick() {
    console.log("handleBtnClick")
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },
  handleEventClick(event) {
    console.log("handleEventClick", event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleInner(event) {
    console.log(event)
  },
  // 4.事件的传递参数:data-*** 
  handleItemClick(event) {
    console.log(event)
    const dataset=event.currentTarget.dataset;
    const title=dataset.item;
    const index=dataset.index;
    console.log(title,index)
  },
  // <!-- 5.事件冒泡和事件捕获 -->
  handleCaptureView1(){
    console.log("handleCaptureView1")
  },
  handleBindView1(){
    console.log("handleBindView1")
  },
  handleCaptureView2(){
    console.log("handleCaptureView2")
  },
  handleBindView2(){
    console.log("handleBindView2")
  },
  handleCaptureView3(){
    console.log("handleCaptureView3")
  },
  handleBindView3(){
    console.log("handleBindView3")
  }
})