// 语言栏
let fromSelect = document.querySelector('#from')
// 翻译栏
let toSelect = document.querySelector('#to')

chrome.storage.sync.get(['sl', 'tl'], function(result) {
  if(result.sl) {
  	fromSelect.value = result.sl.value
  }
  if(result.tl) {
  	toSelect.value = result.tl.value
  }
})


fromSelect.onchange = function() {
	let key = this.selectedOptions[0].getAttribute('data-key')
	chrome.storage.sync.set({'sl': {key: key, value: this.value}})
}

toSelect.onchange = function() {
	let key = this.selectedOptions[0].getAttribute('data-key')
	chrome.storage.sync.set({'tl': {key: key, value: this.value}})
}