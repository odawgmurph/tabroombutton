// inject panel to cur page

fetch(chrome.runtime.getURL("hype/panel.html")) // access panel data
    .then(response => response.text())
    .then(data => {
        const paneldiv = document.createElement("div");
        paneldiv.classList.add("sidenote");
        document.querySelector("div.sidenote").after(paneldiv); // #boring
        paneldiv.innerHTML = data;
        chrome.storage.sync.get(["hype"]) // access storage
            .then((result => {
                if (result == undefined) {
                    document.getElementById("hypelink").href = 'javascript:alert("No hype song saved!");'; // hedges bets for no link
                } else {
                    document.getElementById("hypelink").href = result["hype"]; // open youtube
                }
            }))
    })