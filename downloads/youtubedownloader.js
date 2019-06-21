// ==UserScript==
// @name YouTube Downloader
// @description No ads, this script helps to add a download button. Saveclipbro.com features the fastest ways to download YouTube videos and audios, ensuring quality. Supported Services: YouTube, Dailymotion, Vimeo, Twitter, Vine, Facebook, Instagram, Xvideos, CNN, SoundCloud, Redtube, Freesound, Pornhub, Reddit, Liveleak and more! You will like!
// @namespace https://github.com/easylistbrasil/youtubedownloader
// @homepageURL https://github.com/easylistbrasil/youtubedownloader
// @supportURL https://github.com/easylistbrasil/youtubedownloader
// @author Punisher
// @version 4.5
// @date 2019-06-16
// @icon https://i.imgur.com/np7OreN.png
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @license CC BY-NC-ND 4.0 International. https://creativecommons.org/licenses/by-nc-nd/4.0/
// @match *://*.youtube.com/*
// ==/UserScript==

(function() {
    if (document.getElementById("polymer-app") || document.getElementById("masthead") || window.Polymer) {
    setInterval(function() {
        if (window.location.href.indexOf("watch?v=") < 0) {
            return false;
        }  
        if (document.getElementById("meta-contents") && document.getElementById("punisher") === null) {
            Addytpolymer();
        }
    }, 100);
      
    setElement = function(url) {
       var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
       var match = String(url).match(regExp);
       return (match&&match[7].length==11)? match[7]: false;
    };

} else {
    
    setInterval(function() {
        if (window.location.href.indexOf("watch?v=") < 0) {
            return false;
        }      
        if (document.getElementById("watch8-sentiment-actions") && document.getElementById("punisher") === null) {
            AddhtmlDV();
        }
    }, 100);
  
    setElement = function(url) {
       var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
       var match = String(url).match(regExp);
       return (match&&match[7].length==11)? match[7]: false;
    };
}

function AddhtmlDV() {
    if (document.getElementById("watch8-sentiment-actions")) {
        var wrap = document.getElementById('watch8-sentiment-actions');
        var button = "<div id='punisher' style='display: inline-block; margin-left: 10px; vertical-align: middle;'>";
        button += "<a href=\"https://www.saveclipbro.com/convert?main_search%5BlinkToDownload%5D=" + encodeURIComponent(document.URL) + '&main_search%5Bsubmit%5D=' + "\" target=\"_blank\"" + "style=\"display: inline-block; font-size: inherit; height: inherit; border: 1px solid rgb(226, 226, 226); border-radius: 3px; padding-left: 28px; cursor: pointer; vertical-align: middle; position: relative; line-height: 22px; text-decoration: none; z-index: 1; color: rgb(226, 226, 226);\">";
        button += "<i style=\"position: absolute; display: inline-block; left: 6px; top: 3px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVR42mNgoDX4//+/PhBHA7EnEHOSolEAiLf8RwL//v17DqRcCWkyBmJ2oOJN/7GDr0Csik2zG1DTZySb8IFJ2Aw4+594cASIGZE18wDxEzT/vgZSd0EYysZmiCBIsyMQv8CioAaIl0JxDQ6XLAAZ8B6HZDvIIVDcjk0B0GWfGKAKyDXgC8iAh2iCF4DUCSAuQDKgACp2EU3tclj0fUESBMV/ChAfQjIAxE5BSxvngVgMFgvSQJwKxIVQ2/SRFUPZ+lD5PCD2AWIWQkmZE2rzQZLyAJakLUDT3AoALzJfljL5Yb4AAAAASUVORK5CYII='); background-size: 12px; background-repeat: no-repeat; background-position: center center; width: 16px; height: 16px;\"></i>";
        button += "<span style=\"padding-right: 12px;\">Download</span></a></div>";
        var style = "<style>#punisher button: -moz-focus-inner {padding: 0; margin:0} #punisher a {background-color: #4c4c4c} #punisher a:hover {background-color: #4c4c4c} #punisher a:active {background-color: #4c4c4c}</style>";
        var tmp = wrap.innerHTML;
        wrap.innerHTML = tmp + button + style;
    }
}

function Addytpolymer() {
    var buttonDiv = document.createElement("span");
    buttonDiv.id = "punisher";
    buttonDiv.style.width = "100%";
    buttonDiv.style.marginTop = "5px";
    buttonDiv.style.padding = "12px 0";
    var addButton = document.createElement("a");
    addButton.appendChild(document.createTextNode("DOWNLOAD"));
    addButton.style.width = "100%";
    addButton.style.cursor = "pointer";
    addButton.style.height = "inherit";
    addButton.style.backgroundColor = "#3a3a3a";
    addButton.style.color = "#ffffff";
    addButton.style.padding = "10px 22px";
    addButton.style.margin = "0px 0px";
    addButton.style.border = "0";
    addButton.style.borderRadius = "2px";
    addButton.style.fontSize = "1.4rem";
    addButton.style.fontFamily = "inherit";    
    addButton.style.textAlign = "center";
    addButton.style.textDecoration = "none";
    addButton.href = "https://www.saveclipbro.com/convert?main_search%5BlinkToDownload%5D=" + encodeURIComponent(document.URL) + '&main_search%5Bsubmit%5D=';
    addButton.target = "_blank";
    buttonDiv.appendChild(addButton);
    
    var targetElement = document.querySelectorAll("[id='subscribe-button']");
    if(targetElement){
      for(var i = 0; i < targetElement.length; i++){
        if(targetElement[i].className.indexOf("ytd-video-secondary-info-renderer") > -1){
            targetElement[i].appendChild(buttonDiv);
        }
      }
    }
}
})();
