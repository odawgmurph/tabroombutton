
// REVEAL COMPETITOR NAMES

// find button to replace/replicate
const existingButton = document.querySelector('[id^="print_"]');
// make new buttons
const nameButton = document.createElement('button');
const schoolButton = document.createElement('button');
// pf check
let ispf = false;
let headtext = document.querySelector('div.nospace.flexrow span.half h4');
let duoheadtext = document.querySelector('div.nospace.padtop span h4')
if (headtext) {
    if (headtext.textContent.includes('PF') || headtext.textContent.includes('DUO')) {
        ispf = true;
    }
} else if (duoheadtext) {
    if (duoheadtext.textContent.includes('PF') || duoheadtext.textContent.includes('DUO')) {
        ispf = true;
    }
}
// run get req on all speaker codes
// modify button onclick
nameButton.onclick = function() {
    // find every speaker code link
    document.querySelectorAll('.white.smallish.padtop.padbottom.padleft').forEach(element => {
        // run get request
        fetch(element.href, { // request on the link's target, which has the name 
            method: "GET"
        }).then(response => { // do something with the response
            if (!response.ok) { // damage control
                throw new Error("Network error buddy");
            }
            return response.text();
        // do something with the get content
        }).then(htmlText => {
            // actually understand the html
            const parser = new DOMParser();
            var htmlDocument = parser.parseFromString(htmlText, 'text/html');
            // get the students name reversed with comma
            var studentName = htmlDocument.querySelector('.nospace.semibold').textContent.trim();
            // remove the comma and arrange
            if (!ispf) {
                var words = studentName.split(/\s+/);
                var nameonly = words.slice(0, 2).join(' ');
                element.textContent = nameonly;
            } else {
                element.textContent = studentName;
            }
            // set the element to competitor's name
            
        })
    });
    // widen every item for readability
    document.querySelectorAll('.nospace[style="width: 4.5ex;"]').forEach(element => {
        element.style = "width: 9.5ex;"
    });
};
schoolButton.onclick = function() {
    // find every speaker code link
    document.querySelectorAll('.white.smallish.padtop.padbottom.padleft').forEach(element => {
        // run get request
        fetch(element.href, { // request on the link's target, which has the name 
            method: "GET"
        }).then(response => { // do something with the response
            if (!response.ok) { // damage control
                throw new Error("Network error buddy");
            }
            return response.text();
        // do something with the get content
        }).then(htmlText => {
            // actually understand the html
            const parser = new DOMParser();
            var htmlDocument = parser.parseFromString(htmlText, 'text/html');
            // get the students name reversed with comma
            var studentName = htmlDocument.querySelector('.nospace.semibold').textContent.trim();
            var schoolName = htmlDocument.querySelector('h6.full.nospace.martop').textContent.trim();
            // remove the comma and arrange
            if(!ispf){
                var words = studentName.split(/\s+/);
                var nameonly = words.slice(0, 2).join(' ');
                var school = schoolName.substr(0, schoolName.indexOf(':'));
                element.textContent = nameonly + ", " + school;
            } else {
                element.textContent = studentName + ", " + school;
            }
            // set the element to competitor's name
            element.style.overflowWrap = 'anywhere';
            element.style.textWrap = 'wrap';
            element.title = element.textContent;
        })
    });
    // widen every item for readability
    document.querySelectorAll('.nospace[style="width: 4.5ex;"]').forEach(element => {
        element.style = "width: 9.5ex;"
    });
};
// stylistic characteristics
nameButton.title = "Reveal competitor names";
nameButton.className = "notfirst printbutton buttonwhite bluetext fa fa-sm fa-user marleft";
// set location of button
nameButton.tabIndex = -1;
existingButton.parentNode.insertBefore(nameButton, existingButton.nextSibling);

schoolButton.title = "Reveal competitor names with schools";
schoolButton.className = "notfirst printbutton buttonwhite redtext fa fa-sm fa-user marleft";
schoolButton. tabIndex = -1;
nameButton.parentNode.insertBefore(schoolButton, nameButton.nextSibling);
//
// JUDGE GOOGLE LINK
//
// find each judge name
document.querySelectorAll('.full.padless.nowrap').forEach(element => { 
    // turn it into a link
    var wrappedtext = document.createElement("a");
    // get commad judge name
    var targetJudge = element.textContent;
    // divide into first and last
    var lastname = targetJudge.split(",")[0];
    var firstname= targetJudge.split(', ')[1];
    // combine into one name
    let fullname = [firstname + "+" + lastname];
    // form a google url around it
    var searchURL = ["https://google.com/search?q=" + fullname];
    // set the link target to the judges name
    wrappedtext.href = searchURL;
    wrappedtext.target = "_blank";
    // put the link in the right spot
    while (element.firstChild) {
        wrappedtext.appendChild(element.firstChild);
    }
    element.appendChild(wrappedtext);
});