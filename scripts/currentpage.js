var targetElement = document.querySelector('span.half.graytext');
var tourn = document.querySelector('h5.martopmore.padbottom.blueborderbottom.marno');
var futourns = document.querySelectorAll('.nowrap.semibold span.halfspacer');
const table = document.querySelector('div.full.nospace table.tablesorter.tablesorter-default.hasResizable.hasStickyHeaders[role="grid"]');
var futName;

// unc feature, not needed anymore. thanks palmer
if (tourn !== null)  {
    tournName = tourn.textContent.trim();
    var params = {
        "query": tournName
    };
    
    async function postData() { // get tourn data from neelr api
        try {
            var options = { 
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            };
    
            var response = await fetch("https://tabroom-private-api.vercel.app/api/query", options);
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            };
    
            var result = await response.json();
            console.log(result);        
            var firstItemId = result[0].id;
            console.log('ID:', firstItemId);
            var targetId = firstItemId;
    
            let targetURL = ["https://www.tabroom.com/index/tourn/index.mhtml?tourn_id=" + targetId];
            
            // create link
            const anchorElement = document.createElement("a");
            anchorElement.href = targetURL;
            targetElement.textContent = targetElement.textContent.concat(" - Tournament home");
            while (targetElement.firstChild) {
                anchorElement.appendChild(targetElement.firstChild);
                targetElement.parentNode.replaceChild(anchorElement, targetElement);
            }
    
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    postData();
};


