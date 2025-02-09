// pages to title
// -upcoming tourns
// personal entries
// results page
// tourn home
// team page
// pairings
// global results page
// pairings page
// profile page
// entries page


document.querySelectorAll('[target="_blank"]').forEach(element => {
    element.removeAttribute("target");
});

if (document.URL.startsWith("https://www.tabroom.com/index/tourn/index.mhtml")) {
    document.head.title = document.querySelector("h2.centeralign.marno").textContent;
}
