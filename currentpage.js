var targetElement = document.querySelector('.biggish.redtext');
var tournName = document.querySelector('h5.semibold.nospace').textContent.trim();
var params = {
    "query": tournName
};

async function postData() {
    try {
        const options = { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers if needed
            },
            body: JSON.stringify(params)
        };

        const response = await fetch("https://tabroom-private-api.vercel.app/api/query", options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        // Extracting the 'id' property from the first object in the array
        const firstItemId = result[0].id;

        // Use firstItemId as needed in your code
        console.log('ID:', firstItemId);
        // Use console.log instead of alert for debugging
        const targetId = firstItemId;

        let targetURL = ["https://www.tabroom.com/index/tourn/index.mhtml?tourn_id=" + targetId];

        const anchorElement = document.createElement("a");
        anchorElement.href = targetURL;
        targetElement.textContent = "Tournament home";
        while (targetElement.firstChild) {
            anchorElement.appendChild(targetElement.firstChild);
            targetElement.parentNode.replaceChild(anchorElement, targetElement);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

postData();
