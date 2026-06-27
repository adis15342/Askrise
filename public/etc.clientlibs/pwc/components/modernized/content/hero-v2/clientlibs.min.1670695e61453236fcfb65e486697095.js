const isEditor = window.Granite && window.Granite.author ? true : false;

// Implement checks as it is breaking when component is dropped
function updateImgSrcSet() {
  let mobileImageUrl, defaultImageUrl;
  const mobileSrcSet = document.querySelector(
    ".herov2__image--mobile"
  )?.srcset;
  const defaultSrcSet = document.querySelector(
    ".herov2__image--desktop"
  )?.srcset;
  // Replace spaces with %20 in the mobile image URL
  // And Now use the sanitized URL in your template
  if (mobileSrcSet) {
    mobileImageUrl = encodeURI(mobileSrcSet);
    document.querySelector(".herov2__image--mobile").srcset = mobileImageUrl;
  }
  if (defaultSrcSet) {
    defaultImageUrl = encodeURI(defaultSrcSet);
    document.querySelector(".herov2__image--desktop").srcset =
      defaultImageUrl;
  }
}



const addToggleBtnListener = () => {
  const video = document.getElementById("autoPlayVideo");

  // Get the toggle button
  const toggleButton = document.querySelector("#toggleButton");
  const toggleButtonIcon = document.querySelector(
    "#toggleButton .herov2__video-play"
  );

  // Function to toggle play/pause
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        const pause_i18nkey= toggleButton.getAttribute("data-pause-key");
        toggleButtonIcon.classList.remove("herov2__video-pause");
        toggleButtonIcon.classList.add("herov2__video-play");
        toggleButton.setAttribute("aria-label", pause_i18nkey);
      } else {
        video.pause();
        const play_i18nkey= toggleButton.getAttribute("data-play-key");
        toggleButtonIcon.classList.remove("herov2__video-play");
        toggleButtonIcon.classList.add("herov2__video-pause");
        toggleButton.setAttribute("aria-label", play_i18nkey);
      }
    });
  }
};



const addCloseButtonListener = () => {
  const shareModalCloseBtn = document.querySelector("#heroShareCloseBtn");
  if(shareModalCloseBtn){
    const shareBtn = document.querySelector("#heroShareToggleBtn");
    shareModalCloseBtn.addEventListener("click", () => {
      shareBtn.focus();
    });
  }
};



const updateImgDOMHeight = () => {
  const contentDOM = document.querySelector(".herov2__desktop--content--wrapper");
  const assetDOM = document.querySelector(".herov2__territory-asset-wrapper");
  if(window.innerWidth > 1199){
    if(contentDOM && assetDOM){
      if(contentDOM.clientHeight + 30 > 568){
          assetDOM.style.height = contentDOM.clientHeight + 50 + "px";
      }   else{
          assetDOM.style.height = "584px";
      }
    }
  }
}

const isElementHidden = (element) => {
  return element && window.getComputedStyle(element).display === "none";
};

const showPlayIcon = () => { 
  const videoWrapper = document.querySelector(".herov2__video-wrapper");
  if(videoWrapper && !isElementHidden(videoWrapper)) {
    const video = document.getElementById("autoPlayVideo");
    const playButton = document.querySelector(".herov2__video--controls");    
    
    function ensurePlayIconVisible() {
      playButton.classList.remove("display-none"); // Keep play icon visible
      video.removeEventListener("playing", ensurePlayIconVisible);
    }
    // Show the play icon when video starts playing
    video.addEventListener("playing", ensurePlayIconVisible);

    setTimeout(() => {
      if(video.readyState > 3 && playButton.classList.contains("display-none")){ 
        video.dispatchEvent(new Event("playing"));// Show the play icon when video starts playing
      }
    }, 100);
  }
};

const checkPlatformWin = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("win") !== -1) {
    const videoWrapper = document.querySelector(".herov2__video-wrapper");
    if(!isElementHidden(videoWrapper)) {
      const playButton = document.querySelector(".herov2__video-button");  
      playButton.classList.add("herov2__button--outline"); 
    }  
  }
}

// Implement Fade In and Opacity animation on DOM Load
window.addEventListener("load", function () {
  if (!isEditor) {
    addToggleBtnListener();
    addCloseButtonListener();
  };
  updateImgSrcSet();
  showPlayIcon();
  checkPlatformWin();
});

document.addEventListener("DOMContentLoaded", function () {
  const territoryRendition = document.querySelector(".herov2__territory--wrapper");
  if(territoryRendition){
    updateImgDOMHeight();
  }
});