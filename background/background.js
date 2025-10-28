chrome.runtime.onInstalled.addListener(() => {
    console.log("Installed"); // artifact of the first versions. miss these days
})

function opentab() { // func to open tabroom
    chrome.tabs.create({
        url: "https://www.tabroom.com/",
        selected: true,
    })
}

function openshort(command) { // shortcut director
    if (command === "opentab") {
        opentab();
    }
}

chrome.commands.onCommand.addListener(openshort); // listens for keyboard shortcut 