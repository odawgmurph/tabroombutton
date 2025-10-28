recorddiv = document.querySelector(".screens.record");
notesdiv = document.createElement("div"); // create div

recorddiv.parentNode.appendChild(notesdiv); //place it right
notesdiv.classList.add("screens") // give it the right stuff

fetch(chrome.runtime.getURL("notes/notes.html")) // access notes panel for injection
.then(response => response.text())
.then(data => {
    notesdiv.innerHTML = data;



const notesstyle = document.createElement("link"); // add custom css
notesstyle.rel = "stylesheet";
notesstyle.type = "text/css";
notesstyle.href = chrome.runtime.getURL("notes/notes.css"); // access stylesheet
document.head.appendChild(notesstyle); //inject into html

const notesjs = document.createElement("script");
notesjs.src = chrome.runtime.getURL("notes/notes.js"); // add js info for notes
document.head.appendChild(notesjs);

const url = new URL(window.location.href); 
const judgeid = url.searchParams.get("judge_id"); // judge id for storage purposes


const notes = document.getElementById("notesbox"); //lmao
chrome.storage.sync.get(["notes"])
    .then((result) => { // set text content to saved notes
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
document.addEventListener("updatenote", () => { // save edited notes
    let notes = document.getElementById("notesbox").value;
    let time = new Date().toLocaleString(); // gets datetime, tolocalestring formats it in standard english for et
    const url = new URL(window.location.href);
    let judgeid = url.searchParams.get("judge_id"); //access judge id within function
    chrome.storage.sync.get(["notes"]) // access storage
        .then((result) => {
            if (result["notes"] == undefined) { // note creation protocol
                let newnote = {"notes": {}};
                newnote["notes"][judgeid] = { // each judge's note is stored as an object within an object, with its key being the judge id
                    "note": notes,
                    "dates": time
                }
                const datetext = document.getElementById("lastedit");
                datetext.textContent = newnote["notes"][judgeid].date; // update page edit time. todo not particularly working
                chrome.storage.sync.set(newnote)
            } else { // note update protocol
                result["notes"][judgeid] = { // see higher comment
                    "note": notes,
                    "dates": time
                }
                const datetext = document.getElementById("lastedit");
                datetext.textContent = result["notes"][judgeid].date; // see higher comment
                chrome.storage.sync.set(result)
            }
        })
})

recorddiv = document.querySelector(".screens.record");
notesdiv = document.createElement("div");

recorddiv.parentNode.appendChild(notesdiv); // places the html inside
notesdiv.classList.add("screens")

});