chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.query({ url: "*://*/mynewtab.html" }, tabs => {
    if (tabs.length === 0) { // Eğer zaten açık değilse
      chrome.tabs.create({ url: "mynewtab.html" }, tab => {
        chrome.tabs.sendMessage(tab.id, { time: (new Date()).toLocaleTimeString() });
      });
    }
  });
});
