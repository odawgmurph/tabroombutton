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
});
