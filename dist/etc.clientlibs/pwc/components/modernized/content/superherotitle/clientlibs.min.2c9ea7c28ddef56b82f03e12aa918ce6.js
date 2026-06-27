const isEditor = window.Granite && window.Granite.author ? true : false;


// Implement checks as it is breaking when component is dropped
function updateImgSrcSet() {
  let mobileImageUrl, defaultImageUrl;
  const mobileSrcSet = document.querySelector(
    ".superhero__image--mobile"
  )?.srcset;
  const defaultSrcSet = document.querySelector(
    ".superhero__image--desktop"
  )?.srcset;
  // Replace spaces with %20 in the mobile image URL
  // And Now use the sanitized URL in your template
  if (mobileSrcSet) {
    mobileImageUrl = encodeURI(mobileSrcSet);
    document.querySelector(".superhero__image--mobile").srcset = mobileImageUrl;
  }
  if (defaultSrcSet) {
    defaultImageUrl = encodeURI(defaultSrcSet);
    document.querySelector(".superhero__image--desktop").srcset =
      defaultImageUrl;
  }
}

window.addEventListener("load", function () {
  const defaultCookieStyleTag = document.getElementById("at-body-style");
  const cdpEnabledStyleTag = document.getElementById("alloy-prehiding");

  if (!defaultCookieStyleTag && !cdpEnabledStyleTag) {
    // If the style tag is already removed, start animation immediately
    initSuperheroAnimation();
  } else {
    // Otherwise, use MutationObserver to wait for its removal
    const observer = new MutationObserver((mutationsList, observer) => {
      mutationsList.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if ((node.nodeType === 1 && (node.id === "at-body-style" || node.id === "alloy-prehiding"))) {
            observer.disconnect(); // Stop observing once style is removed
            initSuperheroAnimation();
          }
        });
      });
    });

    observer.observe(document.head, { childList: true });
  }

  // Implement Fade In and Opacity animation on DOM Load
  function initSuperheroAnimation() {
    const fadeElements = document.querySelectorAll(".superhero__text--fade");
    const imageElement = document.querySelectorAll(".superhero__image--fade");
    const delayBetweenElements = 100;
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("superhero__text--show");
        // Check if it's the last element in the content section
        if (index === fadeElements.length - 1) {
          // Once the last element is shown, add the show class to the image
          imageElement.forEach((element, eleIndex) => {
            setTimeout(() => {
              element.classList.add("superhero__image--show");
            }, eleIndex * delayBetweenElements);
          });
        }
      }, index * delayBetweenElements); // 0.5s delay between each element
    });
    if (isEditor) return;
    addToggleBtnListener();
    toggleVideoSource();
    checkAnchorLink();
    addCloseButtonListener();
    addFocusOnElement();
    updateVideoPosterMobile();
    updateImgSrcSet();
  }
});

const addToggleBtnListener = () => {
  const video = document.getElementById("autoPlayVideo");

  // Get the toggle button
  const toggleButton = document.querySelector("#toggleButton");
  const toggleButtonIcon = document.querySelector(
    "#toggleButton .superhero__video-play"
  );

  // Function to toggle play/pause
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        toggleButtonIcon.classList.remove("superhero__video-pause");
        toggleButtonIcon.classList.add("superhero__video-play");
      } else {
        video.pause();
        toggleButtonIcon.classList.remove("superhero__video-play");
        toggleButtonIcon.classList.add("superhero__video-pause");
      }
    });
  }
};

const toggleVideoSource = () => {
  const videoWrapper = document.querySelector(".superhero__video-wrapper");
  const imageWrapper = document.querySelector(".superhero__image-wrapper");
  if (videoWrapper) {
    if (videoWrapper.getAttribute("video-flag")?.includes("true")) {
      if (window.innerWidth < 768) {
        videoWrapper.classList.add("display-none");
        imageWrapper.classList.remove("display-none");
      } else {
        if (imageWrapper && !imageWrapper.classList.contains("display-none")) {
          imageWrapper.classList.add("display-none");
        }
      }
    }
  }
};

const checkAnchorLink = () => {
  const anchorLink = document.querySelector(".superhero__arrow-icon");
  if (anchorLink) {
    const anchorLinkHref = anchorLink?.getAttribute("href");
    if (anchorLinkHref && anchorLinkHref.length <= 1) {
      anchorLink.classList.add("pointer-events-none");
    }
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

const addFocusOnElement = () => {
  const anchorElement = document.querySelector(".superhero__arrow-icon");
  if (anchorElement) {
    anchorElement.addEventListener("click", () => {
      const hrefAttr = anchorElement.getAttribute("href");
      if (hrefAttr) {
        const targetSection = document.querySelector(hrefAttr);
        if (targetSection) {
          setTimeout(() => {
            const focusable = targetSection.querySelector(
              'button, [tabindex="-1"], a, input, select, textarea'
            );
            if (focusable) {
              focusable.focus();
            }
          }, 100);
        }
      }
    });
  }
};

const updateVideoPosterMobile = () => {
  const video = document.getElementById("autoPlayVideo");
  if(video){
    const mobilePoster = video.getAttribute("mobilePoster");
    const desktopPoster = video.getAttribute("desktopPoster");
    if(window.innerWidth < 768){
      if(mobilePoster){
        video.setAttribute("poster", mobilePoster);
      } else{
        video.setAttribute("poster", desktopPoster);
      }
    } else{
      video.setAttribute("poster", desktopPoster);
    }
  }
}