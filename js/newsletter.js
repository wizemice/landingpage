(() => {
  document.addEventListener('DOMContentLoaded', startMutationObserver);

  function startMutationObserver(_) {
    const targetNode = document.querySelector('[data-form="mhmiBW"]');
    const config = { attributes: true, childList: true, subtree: true };
    // console.log("mutation target", targetNode);
    targetNode.setAttribute('style', 'margin: -1rem 0');

    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          // console.log('The child node', targetNode, 'just changed with new newsletter elements added.');
          adjustCaptchaToCenter();
          observer.disconnect();
        }
      }
    }; 
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  function adjustCaptchaToCenter(_) {
    const captcha = document.querySelector('.ml-form-recaptcha');
    if (captcha) {
      captcha.setAttribute('style', '');
      captcha.setAttribute('style', 'margin: 0');
    }
  }
})()
