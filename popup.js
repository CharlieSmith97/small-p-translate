let select=document.querySelector('#select');
//从本地存储中拿到对应的值 如果说结果的开关存在的话! 就将该值复制给当前的选择属性!
chrome.storage.sync.get(['switch'], function(result) {
    console.log('Value currently is ' + result.switch)
    // 如果说result.switch存在的话 就将存在的值赋值给当前的开关!
    if(result.switch) {
        select.value = result.switch
    }
  })

// 下拉框的是onchange方法!
select.onchange=function(){
    console.log(this.value);
    chrome.storage.sync.set({'switch':this.value});
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
      chrome.tabs.sendMessage(tabs[0].id, {switch: this.value}, function(response) {
        console.log(response.switch);
      });
    });
}