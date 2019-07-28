var scrollHidder = document.createElement('style');
scrollHidder.type = 'text/css';
scrollHidder.innerHTML = '::-webkit-scrollbar { width: 0px; }';
document.getElementsByTagName('head')[0].appendChild(scrollHidder);