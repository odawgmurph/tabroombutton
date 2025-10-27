function isurl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}

document.addEventListener("DOMContentLoaded",  function() {
    document.getElementById("text").focus();
    
    document.getElementById("settingsShow").addEventListener('click', () => {
        document.getElementById("settings").style.display = "block";
        document.getElementById("main").style.display = "none";
    })

    document.getElementById("settingsHide").addEventListener('click', () => {
        document.getElementById("settings").style.display = "none";
        document.getElementById("main").style.display = "block";
    })

    chrome.storage.sync.get(["hype"])
        .then((result => {
            if (result["hype"] != undefined) {
                document.getElementById("hypesong").value = result["hype"];
            }
        }))

    chrome.storage.sync.get(["flag"])
        .then((result => {
            if (result["flag"] != undefined) {
                document.getElementById("flagrepl").value = result["flag"];
            }
        }))

    document.getElementById("submithype").addEventListener('click', () => {
        const song = document.getElementById("hypesong").value;
        if (isurl(song)){
            chrome.storage.sync.get(["hype"])
                .then((result => {
                    if (result["hype"] == undefined) {
                        let newhype = {"hypesong": ""};
                        newhype["hypesong"] = song;
                        chrome.storage.sync.set(newhype);
                    } else {
                        result["hype"] = song;
                        chrome.storage.sync.set(result);
                    }   
                }))
        } else {
            
        }
    })

    document.getElementById("flagrepl").addEventListener("change", () => {
        chrome.storage.sync.get(["flag"])
            .then((result => {
                if (result == undefined) {
                    let newflag = {"flag": null};
                    newflag["flag"] = document.getElementById("flagrepl").value;
                    chrome.storage.sync.set(newflag);
                } else {
                    result["flag"] = document.getElementById("flagrepl").value;
                    chrome.storage.sync.set(result);
                }
            }))
    })
});
