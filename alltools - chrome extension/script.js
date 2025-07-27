function getAdDetails(e, i) {
    let t = i.querySelector(":scope > div > div:nth-child(2) > div:nth-child(1)"); t && (t = t.innerText), t && (e.adCopy = t); let d = i.querySelector(":scope > div > div:nth-child(2) > a:nth-child(2) > div:last-child > div:first-child > div:nth-child(2)");
    d && (d = d.innerText), d && (e.adTitle = d), e.adTitle || (d = i.querySelector(":scope > div > div:nth-child(2) > div:nth-child(3) > a > div > div > div:nth-child(2) > div > div"), d && (e.adTitle = d.innerText));
    let l = i.querySelector(":scope > div > div:nth-child(2) > div:nth-child(1) > span");
    return l && (l = l.innerText, e.adCopy = l), e
}
function loader() {
    if(window.location.href.includes('https://www.facebook.com/')){

        let e = document.querySelectorAll(".replacementButton");

        e.forEach((e => {
            if (!e.dataset.value) {
                let i = e.parentNode.parentNode.parentNode.parentNode
               
                var t = Object.keys(i).filter((e => e.includes("reactProps")))[0]
                var d = i[t].children.props.adCard;
                d = getAdDetails(d, i)
              
                i.classList.add('processed')
                i.classList.add(d.snapshot.adCreativeId)
            
                e.dataset.value = JSON.stringify(d)
            }
        }))
    }
}

setInterval((() => {
    loader()
}), 600);

let styleTag;

function hideDiv() {
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.innerHTML = `
            div[data-visualcompletion="ignore"] {
                opacity: 0.0 !important;
            }
        `;
        document.head.appendChild(styleTag);
    }
}

function makeDivVisible() {
    if (styleTag) {
        document.head.removeChild(styleTag);
        styleTag = null;
    }
}

