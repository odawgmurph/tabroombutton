// pages to title
// upcoming tourns
// personal entries
// results page
// tourn home
// team page
// pairings
// global results page
// pairings page
// profile page
// entries page

document.querySelector("#logo a img").style.filter = "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))";

document.querySelectorAll('[target="_blank"]').forEach(element => {
    element.removeAttribute("target");
});

if (document.URL.startsWith("https://www.tabroom.com/index/tourn/index.mhtml")) {
    document.head.title = document.querySelector("h2.centeralign.marno").textContent;
}

const overlay = document.getElementById("overlay");
let overimg = overlay.style.backgroundImage;

if (overlay.style.backgroundImage != "url(/lib/images/lens-flair.png)") {
    chrome.storage.sync.get(["flag"])
        .then((result => {
            if (result == undefined || result["flag"] == "gay") {
                
            } else if (result["flag"] == "bi") {
                overlay.style.backgroundImage = "url(https://i.imgur.com/WpmYHAh.png)";
            } else if (result["flag"] == "trans") {
                overlay.style.backgroundImage = "url(https://i.imgur.com/zPVHFnM.png)";
            } else if (result["flag"] == "les") {
                overlay.style.backgroundImage = "url(https://i.imgur.com/zUCfnua.png)";
            } else if (result["flag"] == "nb") {
                overlay.style.backgroundImage = "url(https://i.imgur.com/7MDyUuG.png)";
            } else if (result["flag"] == "ace") {
                overlay.style.backgroundImage = "url(https://i.imgur.com/EVBGuns.png)";
            } else if (result["flag"] == "ger") {
                overlay.style.backgroundImage = "url(https://i.imgur.com/GfdjQ1p.png)";
            }
        }))
}