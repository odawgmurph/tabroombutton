// again, this page doesn't rlly need to exist anymore. thanks for making your site good mr palmer

var targetElement = document.querySelector('.half.graytext.semibold.bigger');
const currentURL = window.location.href;
const url = new URL(currentURL);

const tournId = url.searchParams.get("tourn_id");
console.log(tournId);
let targetURL = ["https://www.tabroom.com/index/tourn/index.mhtml?tourn_id=" + tournId];

if (targetElement) {
    const anchorElement = document.createElement("a");

    anchorElement.href = targetURL;
    targetElement.textContent = "Tournament home";
    targetElement.fontWeight = 'bold';
    while (targetElement.firstChild) {
        anchorElement.appendChild(targetElement.firstChild);
        targetElement.parentNode.replaceChild(anchorElement,targetElement);
    }
} else {
    console.error("Element not found")
}
