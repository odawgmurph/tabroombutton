fetch(chrome.runtime.getURL("hype/panel.html"))
    .then(response => response.text())
    .then(data => {
        const paneldiv = document.createElement("div");
        paneldiv.classList.add("sidenote");
        document.querySelector("div.sidenote").after(paneldiv);
        paneldiv.innerHTML = data;
        chrome.storage.sync.get(["hype"])
            .then((result => {
                if (result == undefined) {
                    document.getElementById("hypelink").href = 'javascript:alert("No hype song saved!");';
                } else {
                    document.getElementById("hypelink").href = result["hype"];
                }
            }))
    })