const targetElement = document.querySelector('.biggish.redtext');


if (document.URL.startsWith('https://www.tabroom.com')) {
    document.querySelectorAll('[target="_blank"]').forEach(element => {
        element.removeAttribute("target");
    });
    if (document.URL.startsWith('https://www.tabroom.com/user/student/history.mhtml?tourn_id=')) {
        const currentURL = window.location.href;

        const url = new URL(currentURL);

        const tournId = url.searchParams.get("tourn_id");
        console.log(tournId);
        let targetURL = ["https://www.tabroom.com/index/tourn/index.mhtml?tourn_id=" + tournId];

        if (targetElement) {
            const anchorElement = document.createElement("a");

            anchorElement.href = targetURL;
            targetElement.textContent = "Tournament home";
            while (targetElement.firstChild) {
                anchorElement.appendChild(targetElement.firstChild);
                targetElement.parentNode.replaceChild(anchorElement,targetElement);
            }
        } else {
            console.error("Element not found")
        }
    }
}
