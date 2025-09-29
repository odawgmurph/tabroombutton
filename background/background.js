chrome.runtime.onInstalled.addListener(() => {
    console.log("Installed");
})

function opentab() {
    chrome.tabs.create({
        url: "https://www.tabroom.com/",
        selected: true,
    })
}

function openshort(command) {
    if (command === "opentab") {
        opentab();
    }
}

chrome.commands.onCommand.addListener(openshort);