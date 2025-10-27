// pages to title
// -upcoming tourns
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
                overlay.style.backgroundImage = "url(https://lh3.googleusercontent.com/drive-storage/AJQWtBOcmQMnhRtE4rCav37gOUpTjjUmqlWXl5TZ9MZfdTBk7W4LGurQGBZXLor7rEpL37Ukc7bHuLTOcPLukBwKrH52Vb8YlpFxKPF8etYl6cCdyIc=w1901-h988)"
            } else if (result["flag"] == "trans") {
                overlay.style.backgroundImage = "url(https://lh3.googleusercontent.com/drive-storage/AJQWtBN9EdkyLd0DfVoBgAvrji9X-l0B--0hXyBXGcBR4OJ8i8xC7ja2gwK3_yKDABsdmEIm2jaD1M4_1pnRSvkM-9euC3zlgow4it64SomszhKEdHE=w1901-h988)"
            } else if (result["flag"] == "les") {
                overlay.style.backgroundImage = "url(https://lh3.googleusercontent.com/drive-storage/AJQWtBNZgqg_k27fwa-7lAUXkM8620O0IAIWIWQFh6_ibpPf5Wc1yfgAtLO0bFM570PCYt_j9nOEKPgIpwwDSi6HlxxKrlMG4oqulJJkbC_GXGsFv8E=w1901-h988)"
            } else if (result["flag"] == "nb") {
                overlay.style.backgroundImage = "url(https://lh3.googleusercontent.com/drive-storage/AJQWtBNNStaMSasvhuDmU1rwMIQBVJbfcCF8YrSn-yd9u9FSxVow64TJ4Bj3tqiV_LRqkCOCzc82CNGrNHI9X9Yrwi8Yz7mal28iVYcvrdFv2VX4kFY=w1901-h988)"
            } else if (result["flag"] == "ace") {
                overlay.style.backgroundImage = "url(https://lh3.googleusercontent.com/drive-storage/AJQWtBOIBHnvldHbF239F6oiewfDGQd991Bt7cvQJWTq0Y6235A2KkXDh2nijSRhvIAu7M_PZjFwY5Hl61ovH_1KBeBRei_agkNrQNh5ax1a_6CZ2HA=w1143-h988)"
            } else if (result["flag"] == "ger") {
                overlay.style.backgroundImage = "url(https://lh3.googleusercontent.com/drive-storage/AJQWtBNwxFdn649YMrLegVmEi574mIVjxS6toM_FEwGq_VWc57zwzgC0WmV7TKNBp8N3D7nIoK-6ClQC-ggEOnm3SjUHrek9cJxEDa0SE939UCj8iX8=w1143-h988)"
            }
        }))
}