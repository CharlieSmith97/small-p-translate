chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "translateMenu",
      "title": "Translate %s",
      "contexts": ["selection"]
    });
  });

  chrome.contextMenus.onClicked.addListener((info)=>{
    console.log(info);
    if(info.menuItemId === 'translateMenu') {
		//chrome.tabs.create({url: `https://fanyi.baidu.com/#lang-auto/lang-auto/${info.selectionText}`})
        chrome.tabs.create({url:`https://translate.google.cn/#view=home&op=translate&sl=auto&tl=zh-CN&text=${info.selectionText}`});
    }
  })  