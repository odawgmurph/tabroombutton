function isurl(string) { // function to see if a string is a functioning url
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}

document.addEventListener("DOMContentLoaded",  function() { //  so as to make sure that the html is runnign
    document.getElementById("text").focus(); // highlight the textarea element

    function changeflagevent() {
        var updateflag = document.createEvent('Event');
        updateflag.initEvent('updateflag', true, false); // just want to make sure it's clear that this command was deprecated when i wrote it
        document.dispatchEvent(updateflag);
    }
    
    document.getElementById("settingsShow").addEventListener('click', () => { // open the settings screen
        document.getElementById("settings").style.display = "block";
        document.getElementById("main").style.display = "none";
    })

    document.getElementById("settingsHide").addEventListener('click', () => { // close the settings screen
        document.getElementById("settings").style.display = "none";
        document.getElementById("main").style.display = "block";
    })

    chrome.storage.sync.get(["hype"]) // access hype storage
        .then((result => {
            if (result["hype"] != undefined) {
                document.getElementById("hypesong").value = result["hype"]; // set textbox value
            }
        }))

    chrome.storage.sync.get(["flag"])
        .then((result => {
            if (result["flag"] != undefined) {
                document.getElementById("flagrepl").value = result["flag"]; // set flag dropdown value
            }
        }))

    document.getElementById("submithype").addEventListener('click', () => { // save the hype song url
        const song = document.getElementById("hypesong").value;
        if (isurl(song)){ // check url. see top
            chrome.storage.sync.get(["hype"]) // access storage
                .then((result => {
                    if (result["hype"] == undefined) { // new hype protocol
                        let newhype = {"hypesong": ""};
                        newhype["hype"] = song;
                        chrome.storage.sync.set(newhype); // set the url 
                    } else { //update protocol
                        result["hype"] = song;
                        chrome.storage.sync.set(result);
                    }   
                }))
        } else {
            
        }
    })

    document.getElementById("flagrepl").addEventListener("change", () => { // happens automatically every time its set
        chrome.storage.sync.get(["flag"])
            .then((result => {
                if (result == undefined) { // new flag protocol
                    let newflag = {"flag": null}; // inits flag object
                    newflag["flag"] = document.getElementById("flagrepl").value; // set to flag object
                    chrome.storage.sync.set(newflag);
                    changeflagevent();
                } else { // update protocol
                    result["flag"] = document.getElementById("flagrepl").value; 
                    chrome.storage.sync.set(result);
                    changeflagevent();
                }
            }))
    })
});
