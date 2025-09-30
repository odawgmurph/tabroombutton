recorddiv = document.querySelector(".screens.record");
notesdiv = document.createElement("div");

recorddiv.parentNode.appendChild(notesdiv);
notesdiv.classList.add("screens")

fetch(chrome.runtime.getURL("notes/notes.html"))
.then(response => response.text())
.then(data => {
    notesdiv.innerHTML = data;



const notesstyle = document.createElement("link");
notesstyle.rel = "stylesheet";
notesstyle.type = "text/css";
notesstyle.href = chrome.runtime.getURL("notes/notes.css");
document.head.appendChild(notesstyle);

const notesjs = document.createElement("script");
notesjs.src = chrome.runtime.getURL("notes/notes.js");
document.head.appendChild(notesjs);

const url = new URL(window.location.href);
const judgeid = url.searchParams.get("judge_id");


const notes = document.getElementById("notesbox");
chrome.storage.sync.get(["notes"])
    .then((result) => {
        const res = result;
        if (!(result === undefined)) {
            if (!(result["notes"] === undefined)) {
                if (!(result["notes"][judgeid] === undefined)) {
                    const notes = document.getElementById("notesbox");
                    document.getElementById("notesbox").textContent = result["notes"][judgeid].note;
                    document.getElementById("lastedit").textContent = result["notes"][judgeid].dates;
                }
            }
        }
    });
document.addEventListener("updatenote", () => {
    let notes = document.getElementById("notesbox").value;
    let time = new Date().toLocaleString();
    const url = new URL(window.location.href);
    let judgeid = url.searchParams.get("judge_id");
    chrome.storage.sync.get(["notes"])
        .then((result) => {
            if (result["notes"] == undefined) {
                let newnote = {"notes": {}};
                newnote["notes"][judgeid] = {
                    "note": notes,
                    "dates": time
                }
                const datetext = document.getElementById("lastedit");
                datetext.textContent = newnote["notes"][judgeid].date;
                chrome.storage.sync.set(newnote)
            } else {
                result["notes"][judgeid] = {
                    "note": notes,
                    "dates": time
                }
                const datetext = document.getElementById("lastedit");
                datetext.textContent = result["notes"][judgeid].date;
                chrome.storage.sync.set(result)
            }
        })
})

recorddiv = document.querySelector(".screens.record");
notesdiv = document.createElement("div");

recorddiv.parentNode.appendChild(notesdiv);
notesdiv.classList.add("screens")

});