import headTags from './header.js';
document.head.innerHTML += headTags;

setInterval(function(){location.reload(true);}, 1000);