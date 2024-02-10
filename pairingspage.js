const existingButton = document.querySelector('[id^="print_"]');
const newButton = document.createElement('button');
newButton.onclick = function() {
    document.querySelectorAll('.white.smallish.padtop.padbottom.padleft').forEach(element => {
        fetch(element.href, {
            method: "GET"
        }).then(response => {
            if (!response.ok) {
                throw new Error("Network error buddy");
            }
            return response.text();
        }).then(htmlText => {
            const parser = new DOMParser();
            var htmlDocument = parser.parseFromString(htmlText, 'text/html');
            var studentName = htmlDocument.querySelector('.nospace.semibold').textContent.trim();
            var words = studentName.split(/\s+/);
            var nameonly = words.slice(0, 2).join(' ');
            element.textContent = nameonly;
        })
    });
    document.querySelectorAll('.nospace[style="width: 4.5ex;"]').forEach(element => {
        element.style = "width: 9.5ex;"
    });
};
newButton.title = "Reveal competitor names";
newButton.className = "notfirst printbutton buttonwhite bluetext fa fa-sm fa-user marleft";
newButton.tabIndex = -1;
existingButton.parentNode.insertBefore(newButton, existingButton.nextSibling);
//
// JUDGE GOOGLE LINK
//
document.querySelectorAll('.full.padless.nowrap').forEach(element => {
    var wrappedtext = document.createElement("a");
    var targetJudge = element.textContent;
    var lastname = targetJudge.split(",")[0];
    var firstname= targetJudge.split(', ')[1];
    let fullname = [firstname + "+" + lastname];
    var searchURL = ["https://google.com/search?q=" + fullname];
    wrappedtext.href = searchURL;
    while (element.firstChild) {
        wrappedtext.appendChild(element.firstChild);
    }
    element.appendChild(wrappedtext);
});