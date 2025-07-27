function data() {
    let e = document.createElement("script");
    e.src = chrome.runtime.getURL("script.js"), document.documentElement.appendChild(e), e.onload = function() {
        this.remove()
    }
}

data()
