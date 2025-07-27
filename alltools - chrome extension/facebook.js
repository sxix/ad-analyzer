function placeholder(adElement, index) {
  let btn = document.createElement("a");

  btn.classList.add("replacementButton", "button-26", "b-" + index);

  let div = document.createElement("div");
  div.style.width = "0%";
  div.appendChild(btn);

  adElement.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(
    div,
    adElement.parentNode.firstChild.nextSibling
  );
}

const euReachList = [];

async function loadPage() {
  function formatNumber(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }

  async function delay_three() {
    if (window.location.href.includes("facebook.com/ads/library")) {
      while (true) {
        if (document.getElementsByClassName("eureacher").length == 0) {
          function fadeOut(el, callback) {
            find.style.opacity = 1;

            (function fade() {
              let val = parseFloat(find.style.opacity);
              if (!((val -= 0.1) < 0)) {
                find.style.opacity = val;
                requestAnimationFrame(fade);
              } else {
                callback();
              }
            })();
          }

          await new Promise((resolve) => setTimeout(resolve, 500));
          let Launch = [
            ...document.querySelectorAll('div[role="heading"]'),
          ].find(
            (find) =>
              find.textContent.includes("2023") ||
              find.textContent.includes("2024") ||
              find.textContent.includes("2025")
          );

          if (Launch) {
            let track = document.createElement("a");

            track.textContent = "Track changes";
            track.classList.add("track");
            track.style.marginRight = "2px";
            track.style.textDecoration = "none";

            track.href = `https://app.alltools.it/findads?report_link=${window.location.href}`;

            // Open the link in a new tab/window
            track.target = "_blank";

            // Create an img element
            let img = document.createElement("img");
            img.src =
              "https://app.alltools.it/static/media/at%20logo%20standalone.208416692bd09d2af40e.png";
            img.style.height = "16px";
            img.style.width = "16px";
            img.style.marginLeft = "5px";
            img.style.borderRadius = "50%";
            img.style.background = "#bfdbfe";
            img.style.padding = "2.5px";

            // Append the img element to the <a> element
            track.appendChild(img);

            let checkSpendButton = document.createElement("button");
            checkSpendButton.classList.add("eureacher");
            checkSpendButton.textContent = "Reveal total spend (experimental)";

            const svgData = `<svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dollar">
            <path fill="#4f46e5" d="M14,11H13V7h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h1v4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Zm-3,0H10a2,2,0,0,1,0-4h1Zm3,6H13V13h1a2,2,0,0,1,0,4Z"/>
        </svg>`;

            const svgDataUri = "data:image/svg+xml;base64," + btoa(svgData);

            const dollarSign = document.createElement("img");
            dollarSign.src = svgDataUri;
            dollarSign.style.marginLeft = "-5px";
            checkSpendButton.appendChild(dollarSign);
            dollarSign.style.borderRadius = "50%";
            dollarSign.style.background = "#e0e7ff";
            dollarSign.style.padding = "2.5px";

            let isChecking = false; // A flag to check if we're in checking mode
            let isCancelled = false; // A flag  to check if the operation was cancelled
            function clickButtonsWithDelay() {
              return new Promise((resolve) => {
                let buttons = [
                  ...document.querySelectorAll(
                    ".revealSpend:not(.finishedCheck)"
                  ),
                ];

                isChecking = true;

                checkSpendButton.textContent = "";
                checkSpendButton.classList.add("loading");

                const loader = document.createElement("div");
                loader.classList.add("loader");
                loader.style.marginBottom = "3px";

                checkSpendButton.appendChild(loader);

                let currentIndex = 0;

                let intervalId = setInterval(() => {
                  if (isCancelled || currentIndex >= buttons.length) {
                    clearInterval(intervalId);

                    checkSpendButton.textContent = "Reveal total spend (experimental)";
                    checkSpendButton.classList.remove("loading");

                    const svgData = `<svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dollar">
            <path fill="#4f46e5" d="M14,11H13V7h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h1v4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Zm-3,0H10a2,2,0,0,1,0-4h1Zm3,6H13V13h1a2,2,0,0,1,0,4Z"/>
        </svg>`;

                    const svgDataUri =
                      "data:image/svg+xml;base64," + btoa(svgData);

                    const dollarSign = document.createElement("img");
                    dollarSign.src = svgDataUri;
                    dollarSign.style.marginLeft = "-5px";
                    checkSpendButton.appendChild(dollarSign);
                    dollarSign.style.borderRadius = "50%";
                    dollarSign.style.background = "#e0e7ff";
                    dollarSign.style.padding = "2.5px";

                    isChecking = false;

                    resolve(); // Resolve the Promise when done
                    return;
                  }

                  let button = buttons[currentIndex];
                  checkSpendButton.textContent =
                    buttons.length - currentIndex + " ads left";

                  const loader = document.createElement("div");
                  loader.classList.add("loader");
                  loader.style.marginLeft = "2px";
                  loader.style.marginRight = "2px";

                  checkSpendButton.appendChild(loader);
                  checkSpendButton.disabled = true;
                  button.click();

                  currentIndex++;
                }, 2000);
              });
            }

            checkSpendButton.addEventListener("click", async function () {
              if (isChecking) {
                isCancelled = true;
              } else {
                await clickButtonsWithDelay();

                const formatted1 = formatNumber(
                  sum(euReachList) * 0.009 * 0.06,1
                );
                const formatted2 = formatNumber(sum(euReachList) * 0.011 * 0.1,1);

                let result;

                if (formatted1 === formatted2 && formatted1 !== "0") {
                  result = "0" + "-" + formatted1 + " conv.";
                } else if (formatted2 == "0") {
                  result = "0 conv.";
                } else {
                  result = formatted1 + "-" + formatted2 + " conv.";
                }

                checkSpendButton.textContent = "Update total spend";
                checkSpendButton.disabled = false;

                const svgData = `<svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dollar">
            <path fill="#4f46e5" d="M14,11H13V7h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h1v4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Zm-3,0H10a2,2,0,0,1,0-4h1Zm3,6H13V13h1a2,2,0,0,1,0,4Z"/>
        </svg>`;

                const svgDataUri = "data:image/svg+xml;base64," + btoa(svgData);

                const dollarSign = document.createElement("img");
                dollarSign.src = svgDataUri;
                dollarSign.style.marginLeft = "-5px";
                checkSpendButton.appendChild(dollarSign);
                dollarSign.style.borderRadius = "50%";
                dollarSign.style.background = "#e0e7ff";
                dollarSign.style.padding = "2.5px";

                const adSpendChip = document.createElement("button");

                adSpendChip.textContent =
                  "$" +
                  formatNumber((sum(euReachList) / 1000) * 6.19, 1) +
                  "-" +
                  "$" +
                  formatNumber((sum(euReachList) / 1000) * 7.83, 1) +
                  " in total ad spend ~ " +
                  euReachList.length +
                  " ads";
                adSpendChip.classList.add("stats");

                const spendImg = document.createElement("img");

                spendImg.src =
                  'data:image/svg+xml;utf8,<svg fill="%23FFFFFF" width="20px" height="0px" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="m13.842 11.52-4.389 4.388a1.112 1.112 0 0 1-1.567 0l-6.28-6.28a3.027 3.027 0 0 1-.771-1.892l.043-3.681A1.141 1.141 0 0 1 2 2.935L5.67 2.9a3.04 3.04 0 0 1 1.892.773l6.28 6.28a1.112 1.112 0 0 1 0 1.567zM3.826 5.133a.792.792 0 1 0-.792.792.792.792 0 0 0 .792-.792zm6.594 7.348a.554.554 0 0 0 0-.784l-.401-.401a2.53 2.53 0 0 0 .35-.83 1.565 1.565 0 0 0-.397-1.503 1.59 1.59 0 0 0-1.017-.46 2.14 2.14 0 0 0-.75.085h-.002a2.444 2.444 0 0 0-.59.277H7.61a2.677 2.677 0 0 0-.438.357 2.043 2.043 0 0 1-.259.22 1.29 1.29 0 0 1-.329.17h-.002a.835.835 0 0 1-.338.038h-.002a.53.53 0 0 1-.314-.136.539.539 0 0 1-.106-.534 1.54 1.54 0 0 1 .41-.71 1.632 1.632 0 0 1 .23-.165l.03-.019a1.783 1.783 0 0 1 .322-.155.942.942 0 0 1 .325-.06.554.554 0 0 0 0-1.108h-.001a2.058 2.058 0 0 0-.717.132 2.846 2.846 0 0 0-.529.26l-.01.006-.398-.4a.554.554 0 1 0-.784.785l.388.387a2.513 2.513 0 0 0-.347.803 1.644 1.644 0 0 0 .404 1.561 1.622 1.622 0 0 0 .983.456 1.922 1.922 0 0 0 .805-.089 2.372 2.372 0 0 0 .624-.319 3.142 3.142 0 0 0 .398-.339 1.569 1.569 0 0 1 .256-.208 1.381 1.381 0 0 1 .32-.151 1.023 1.023 0 0 1 .348-.038.485.485 0 0 1 .308.139c.05.049.165.165.097.488a1.558 1.558 0 0 1-.413.729 2.476 2.476 0 0 1-.28.219 1.727 1.727 0 0 1-.306.157.687.687 0 0 1-.32.042.554.554 0 1 0-.08 1.106c.052.004.103.005.152.005a1.723 1.723 0 0 0 .685-.134 2.678 2.678 0 0 0 .507-.27l.01-.007.397.398a.555.555 0 0 0 .783 0z"/></svg>';

                spendImg.style.marginLeft = "-7px";
                adSpendChip.appendChild(spendImg);

                const conversionChip = document.createElement("button");

                conversionChip.textContent = result;
                conversionChip.classList.add("stats");

                const convImage = document.createElement("img");

                convImage.src =
                  'data:image/svg+xml;utf8,<svg width="20px" height="20px" viewBox="0 0 24 24" fill="%23ffffff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M2.23737 2.28845C1.84442 2.15746 1.41968 2.36983 1.28869 2.76279C1.15771 3.15575 1.37008 3.58049 1.76303 3.71147L2.02794 3.79978C2.70435 4.02524 3.15155 4.17551 3.481 4.32877C3.79296 4.47389 3.92784 4.59069 4.01426 4.71059C4.10068 4.83049 4.16883 4.99538 4.20785 5.33722C4.24907 5.69823 4.2502 6.17 4.2502 6.883L4.2502 9.55484C4.25018 10.9224 4.25017 12.0247 4.36673 12.8917C4.48774 13.7918 4.74664 14.5497 5.34855 15.1516C5.95047 15.7535 6.70834 16.0124 7.60845 16.1334C8.47542 16.25 9.57773 16.25 10.9453 16.25H18.0002C18.4144 16.25 18.7502 15.9142 18.7502 15.5C18.7502 15.0857 18.4144 14.75 18.0002 14.75H11.0002C9.56479 14.75 8.56367 14.7484 7.80832 14.6468C7.07455 14.5482 6.68598 14.3677 6.40921 14.091C6.17403 13.8558 6.00839 13.5398 5.9034 13H16.0222C16.9817 13 17.4614 13 17.8371 12.7522C18.2128 12.5045 18.4017 12.0636 18.7797 11.1817L19.2082 10.1817C20.0177 8.2929 20.4225 7.34849 19.9779 6.67422C19.5333 5.99996 18.5058 5.99996 16.4508 5.99996H5.74526C5.73936 5.69227 5.72644 5.41467 5.69817 5.16708C5.64282 4.68226 5.52222 4.2374 5.23112 3.83352C4.94002 3.42965 4.55613 3.17456 4.1137 2.96873C3.69746 2.77510 3.16814 2.59868 2.54176 2.38991L2.23737 2.28845Z" fill="%23ffffff"/> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="%23ffffff"/> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="%23ffffff"/> </g></svg>';

                convImage.style.marginLeft = "-7px";
                conversionChip.appendChild(convImage);

                const parentElement = checkSpendButton.parentElement;

                conversionChip.style.background =
                  "linear-gradient(90deg, #14b8a6 0%, #34d399 100%)";

                let counter = 0;
                parentElement.querySelectorAll(".stats").forEach((element) => {
                  counter++;
                });

                if (formatNumber(formatted2) !== "0") {
                  if (formatNumber(formatted2) !== "0") {
                    if (counter === 2) {
                      const statsElements =
                        parentElement.querySelectorAll(".stats");

                      // Loop through each element and remove it
                      statsElements.forEach((element) => {
                        element.parentNode.removeChild(element);
                      });
                    }

                    parentElement.insertBefore(adSpendChip, checkSpendButton);
                    parentElement.insertBefore(
                      conversionChip,
                      checkSpendButton
                    );
                  }

                  parentElement.insertBefore(adSpendChip, checkSpendButton);
                  parentElement.insertBefore(conversionChip, checkSpendButton);
                }
              }
            });

            // Assuming you have the sum function defined elsewhere
            function sum(arr) {
              return arr.reduce(
                (total, currentValue) => total + currentValue,
                0
              );
            }

            Launch.append(checkSpendButton);
            if (window.location.href.includes("page_id=")) {
              Launch.append(track);
            }

            let hideDivBtn = document.createElement("button");
            hideDivBtn.style.display = "none";
            hideDivBtn.innerHTML = `<div id="hideDivBtn" onclick="hideDiv()"></div>`;
            Launch.appendChild(hideDivBtn);
            let showDivBtn = document.createElement("button");
            showDivBtn.style.display = "none";
            showDivBtn.innerHTML = `<div id="showDivBtn" onclick="makeDivVisible()"></div>`;
            Launch.appendChild(showDivBtn);
          }
        }

        // Initialize a counter

        let interval = setInterval(async () => {
          let divs = document.querySelectorAll(
            "div.processed:not([data-checked])"
          ); // Select divs that haven't been checked yet

          var elemsWithStrong = [
            ...document.querySelectorAll("div.processed:not([data-checked])"),
          ].filter((div) => div.querySelector("strong"));

          for (let div of elemsWithStrong) {
            div.classList.add("MaybeSpend");
            let button = div.querySelector(".replacementButton");
            if (button) {
              let layerButton = document.createElement("button");
              layerButton.textContent = "Reveal spend";
              layerButton.classList.add("revealSpend");
              layerButton.style.position = "absolute";
              layerButton.style.border = "0px";
              layerButton.style.opacity = "1";
              layerButton.style.zIndex = "0";
              layerButton.style.top = "40px";
              layerButton.style.right = "10px";
              layerButton.style.marginRight = "5px";
              layerButton.style.fontWeight = "600";
              layerButton.style.color = "white";
              layerButton.style.fontSize = "13px";
              layerButton.style.background =
                "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)";
              layerButton.style.padding = "6px";
              layerButton.style.paddingLeft = "10px";
              layerButton.style.paddingRight = "10px";
              layerButton.style.borderRadius = "4px";
              layerButton.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
              layerButton.style.cursor = "pointer";

              const svgData = `<svg width="13px" height="13px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dollar">
            <path fill="#38bdf8" d="M14,11H13V7h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h1v4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Zm-3,0H10a2,2,0,0,1,0-4h1Zm3,6H13V13h1a2,2,0,0,1,0,4Z"/>
        </svg>`;

              const svgDataUri = "data:image/svg+xml;base64," + btoa(svgData);

              const dollarSign = document.createElement("img");
              dollarSign.src = svgDataUri;
              dollarSign.style.marginLeft = "5px";
              dollarSign.style.marginBottom = "-3px";
              layerButton.appendChild(dollarSign);
              dollarSign.style.borderRadius = "50%";
              dollarSign.style.background = "#e0f2fe";
              dollarSign.style.padding = "1px";

              layerButton.addEventListener("click", async function () {
                layerButton.textContent = "";

                const loader = document.createElement("div");
                loader.classList.add("loader");

                layerButton.appendChild(loader);

                document.getElementById("hideDivBtn").click();

                let detailDiv = div.querySelector(
                  'div[data-save-button-added=""]'
                );

                if (detailDiv) {
                  try {
                    detailDiv.click();
                    await new Promise((resolve) => setTimeout(resolve, 800));

                    var mydivs = document.querySelectorAll(
                      `div[data-visualcompletion="ignore"] div.processed`
                    );

                    let matchingDiv = Array.from(mydivs).find(
                      (div) =>
                        div.textContent.includes("EU") ||
                        div.textContent.includes("UE")
                    );

                    if (matchingDiv) {
                      var newDiv = matchingDiv;

                      newDiv.querySelector("[data-save-button-added]").click();

                      await new Promise((resolve) => setTimeout(resolve, 300));

                      [
                        ...document.querySelectorAll(
                          'div[role="link"][tabindex="0"]'
                        ),
                      ]
                        .find(
                          (find) =>
                            find.querySelector("div") &&
                            find
                              .querySelector("div")
                              .querySelector(
                                'div[role="heading"][aria-level="2"]'
                              )
                        )
                        .click();

                      let reachDiv = [
                        ...document.querySelectorAll('div[role="heading"]'),
                      ].find((find) =>
                        reachNames.some((reachName) =>
                          find.textContent.includes(reachName)
                        )
                      );

                      if (
                        reachDiv &&
                        reachDiv.parentElement &&
                        reachDiv.parentElement.nextElementSibling
                      ) {
                        let reachNumber =
                          reachDiv.parentElement.nextElementSibling.innerText;

                        let euReach = parseInt(
                          reachNumber.replace(/[^0-9]/g, "")
                        );

                        if (euReach) {
                          euReachList.push(euReach);
                          const formatted1 = formatNumber(
                            euReach * 0.009 * 0.06
                          );
                          const formatted2 = formatNumber(
                            euReach * 0.011 * 0.1
                          );

                          let result;

                          if (formatted1 === formatted2 && formatted1 !== "0") {
                            result = "0" + "-" + formatted1 + " conv.";
                          } else if (formatted2 == "0") {
                            result = "0 conv.";
                          } else {
                            result = formatted1 + "-" + formatted2 + " conv.";
                          }

                          layerButton.textContent =
                            formatNumber(euReach, 1) +
                            " views | $" +
                            formatNumber((euReach / 1000) * 7.11) +
                            " | " +
                            result;
                        }

                        layerButton.setAttribute("reach", euReach);
                        div.setAttribute("data-eureach", euReach);
                        layerButton.classList.add("finishedCheck");

                        let close = document.querySelector(
                          'div[data-visualcompletion="ignore"] div[aria-busy="false"][role="button"][tabindex="0"] div[data-sscoverage-ignore="true"]'
                        );

                        if (close) {
                          close.click();
                          await new Promise((resolve) =>
                            setTimeout(resolve, 200)
                          );
                          document.getElementById("showDivBtn").click();
                        }
                      }
                    } else {
                      layerButton.textContent = "Please try again";

                      let close = document.querySelector(
                        'div[data-visualcompletion="ignore"] div[aria-busy="false"][role="button"][tabindex="0"] div[data-sscoverage-ignore="true"]'
                      );

                      if (close) {
                        close.click();
                        await new Promise((resolve) =>
                          setTimeout(resolve, 200)
                        );
                        document.getElementById("showDivBtn").click();
                      }
                    }
                  } catch (err) {
                    let close = document.querySelector(
                      'div[data-visualcompletion="ignore"] div[aria-busy="false"][role="button"][tabindex="0"] div[data-sscoverage-ignore="true"]'
                    );
                    if (close) {
                      close.click();
                      await new Promise((resolve) => setTimeout(resolve, 200));
                      document.getElementById("showDivBtn").click();
                    }
                    layerButton.textContent = "Please try again";
                  }
                }
              });

              div.style.position = "relative";

              div.appendChild(layerButton);
              div.setAttribute("data-checked", "true");
            }
          }

          for (let div of divs) {
            // Check if max count has been reached
            // Clear the interval to stop further processing

            if (
              div.textContent.includes("EU") ||
              div.textContent.includes("UE")
            ) {
              div.classList.add("EU");
              let button = div.querySelector(".replacementButton");
              if (button) {
                let adspendBtn = document.createElement("button");

                adspendBtn.textContent = "Reveal spend";
                adspendBtn.classList.add("revealSpend");

                adspendBtn.style.position = "absolute";
                adspendBtn.style.border = "0px";

                adspendBtn.style.opacity = "1";
                adspendBtn.style.zIndex = "0";
                adspendBtn.style.top = "40px";
                adspendBtn.style.right = "10px";
                adspendBtn.style.marginRight = "5px";
                adspendBtn.style.fontWeight = "600";
                adspendBtn.style.color = "white";
                adspendBtn.style.fontSize = "13px";
                adspendBtn.style.background =
                  "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)";
                adspendBtn.style.padding = "6px";
                adspendBtn.style.paddingLeft = "10px";
                adspendBtn.style.paddingRight = "10px";
                adspendBtn.style.borderRadius = "4px";
                adspendBtn.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
                adspendBtn.style.cursor = "pointer";

                div.style.position = "relative";

                const svgData = `<svg width="13px" height="13px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dollar">
            <path fill="#38bdf8" d="M14,11H13V7h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h1v4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Zm-3,0H10a2,2,0,0,1,0-4h1Zm3,6H13V13h1a2,2,0,0,1,0,4Z"/>
        </svg>`;

                const svgDataUri = "data:image/svg+xml;base64," + btoa(svgData);

                const dollarSign = document.createElement("img");
                dollarSign.src = svgDataUri;
                dollarSign.style.marginLeft = "5px";
                dollarSign.style.marginBottom = "-3px";
                adspendBtn.appendChild(dollarSign);
                dollarSign.style.borderRadius = "50%";
                dollarSign.style.background = "#e0f2fe";
                dollarSign.style.padding = "1px";

                adspendBtn.addEventListener("click", async function () {
                  adspendBtn.textContent = "";

                  const loader = document.createElement("div");
                  loader.classList.add("loader");

                  adspendBtn.appendChild(loader);

                  document.getElementById("hideDivBtn").click();

                  let detailDiv = div.querySelector(
                    'div[data-save-button-added=""]'
                  );
                  if (detailDiv) {
                    detailDiv.click();
                    setTimeout(() => {
                      let transparencyDiv = [
                        ...document.querySelectorAll('div[role="heading"]'),
                      ].find(
                        (find) =>
                          find.textContent.includes(
                            "European Union transparency"
                          ) || find.textContent.includes("Den Europæiske Union")
                      );
                      if (transparencyDiv) {
                        transparencyDiv.click();
                        setTimeout(() => {
                          let reachDiv = [
                            ...document.querySelectorAll('div[role="heading"]'),
                          ].find((find) =>
                            reachNames.some((reachName) =>
                              find.textContent.includes(reachName)
                            )
                          );
                          if (reachDiv) {
                            let parentDiv = reachDiv.parentElement;
                            if (parentDiv) {
                              let siblingDiv = parentDiv.nextElementSibling;
                              if (siblingDiv) {
                                let reachNumber = siblingDiv.innerText;
                                var euReach = parseInt(
                                  reachNumber.replace(/[^0-9]/g, "")
                                );

                                let buttonToUpdate =
                                  div.querySelector(".revealSpend");
                                if (buttonToUpdate) {
                                  euReachList.push(euReach);
                                  const formatted1 = formatNumber(
                                    euReach * 0.009 * 0.06
                                  );
                                  const formatted2 = formatNumber(
                                    euReach * 0.011 * 0.1
                                  );

                                  let result;

                                  if (formatted1 === formatted2) {
                                    result = "0" + "-" + formatted1 + " conv.";
                                  } else {
                                    result =
                                      formatted1 + "-" + formatted2 + " conv.";
                                  }

                                  buttonToUpdate.textContent =
                                    formatNumber(euReach, 1) +
                                    " views | $" +
                                    formatNumber((euReach / 1000) * 7.11) +
                                    " | " +
                                    result;
                                }

                                //click on div style class that contains https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/06Yry78JFKS

                                button.setAttribute("reach", euReach);
                                div.setAttribute("data-eureach", euReach);
                                adspendBtn.classList.add("finishedCheck");

                                let close = [
                                  ...document.querySelectorAll(
                                    'div[data-sscoverage-ignore="true"]'
                                  ),
                                ].find(
                                  (find) =>
                                    find.textContent.includes("Close") ||
                                    find.textContent.includes("Luk")
                                );
                                if (close) {
                                  close.click();

                                  //wait 300 ms
                                  setTimeout(() => {
                                    document
                                      .getElementById("showDivBtn")
                                      .click();
                                  }, 300);
                                }
                              } else {
                                document.getElementById("showDivBtn").click();
                              }
                            }
                          } else {
                            document.getElementById("showDivBtn").click();
                          }
                        }, 300); // Adjust this delay as well if needed
                      } else {
                        try {
                          let close = [
                            ...document.querySelectorAll(
                              'div[data-sscoverage-ignore="true"]'
                            ),
                          ].find(
                            (find) =>
                              find.textContent.includes("Close") ||
                              find.textContent.includes("Luk")
                          );
                          if (close) {
                            close.click();
                          }
                          document.getElementById("showDivBtn").click();
                        } catch (err) {
                          document.getElementById("showDivBtn").click();
                        }
                      }
                    }, 500); // Adjust as needed
                  } else {
                    console.warn(
                      "Div with 'data-save-button-added' attribute not found."
                    );
                  }
                });
                div.appendChild(adspendBtn);
                div.setAttribute("data-checked", "true");
              }
            }
          }
        }, 1800);

        let adElements = Array.from(document.querySelectorAll("*")).filter(
          (find) =>
            find.innerText === "See ad details" ||
            find.innerText === "Se oversigtsoplysninger" ||
            find.innerText === "See summary details" ||
            find.innerText === "Se annonceoplysninger"
        );

        adElements.forEach((adElement, index) => {
          // add a save button if it doesn't exist yet and a save button has not been added before
          if (
            !adElement.querySelector("div") &&
            !adElement.hasAttribute("data-save-button-added")
          ) {
            placeholder(adElement, index);
            // mark the element to show a save button has been added
            adElement.setAttribute("data-save-button-added", "");
          }
        });

        // wait for 3 seconds before the next iteration
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  }

  delay_three();
}

function runScript() {
  const replacementButtons =
    document.getElementsByClassName("replacementButton");

  for (var i = 0; i < replacementButtons.length; i++) {
    const replacementButton = replacementButtons[i];
    const dataElem =
      replacementButton.parentNode.parentNode.parentNode.parentNode.lastChild
        .firstChild.parentNode.parentNode;
    var d = Object.keys(dataElem);
    var c = d.filter((k) => k.includes("reactProps"))[0];
    const adJson = dataElem[c].children.props.adCard;
    replacementButton.value = JSON.stringify(adJson);
  }
}

if (window.location.href.includes("facebook.com/ads/library")) {
  loadPage();
  runScript();
}

let reachNames = [
  "Reach",
  "Atteindre",
  "Erreichen",
  "Copertura",
  "Reichweite",
  "Couverture",
  "Alcanzar",
  "Alcançar",
  "Alcance",
  "Raggiungere",
  "Bereiken",
  "Достигать",
  "Osiągnąć",
  "Досягати",
  "Atinge",
  "Достигам",
  "Φτάνω",
  "Dosáhnout",
  "Elér",
  "Nå",
  "Nå",
  "Saavuttaa",
  "Nå",
  "Ulaşmak",
  "Dosegnuti",
  "Достићи",
  "Doseći",
  "Arritur",
  "Sasniegt",
  "Pasiekti",
  "Jõudma",
  "Dosiahnuť",
  "Doseči",
  "Ná",
  "Sroich",
  "Tilħaq",
  "Дасягнуць",
  "Стаса",
  "Heldu",
  "Rækkevidde",
];
