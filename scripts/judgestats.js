const nowdate = new Date()
const thisyear = nowdate.getFullYear();
const thismonth = nowdate.getMonth()+1;
let thistopic = "";
if (thismonth === 9 || thismonth === 10) {
    thistopic = "septober"
} else if (thismonth === 11 || thismonth === 12) {
    thistopic = "nocember"
} else if (thismonth === 1) {
    thistopic = "january"
} else if (thismonth === 2) {
    thistopic = "february"
} else if (thismonth === 3) {
    thistopic = "march"
} else if (thismonth === 4) {
    thistopic = "april"
} else if (thismonth === 5) {
    thistopic = "may"
} else if (thismonth === 6) {
    thistopic = "june"
}
const tourns = [];
const years = [];
const pftopic = [];
const ldtopic = [];
const wstopic = [];
const pftotal = [];
const ldtotal = [];
const wstotal = [];
let rows = document.querySelectorAll(".smallish tr");
rows.forEach((r, i) => {
    const rowitems = r.children;
    tourns.push({
        "date": rowitems[2].querySelector(".hidden").textContent.trim(),
        "category": rowitems[3].textContent.trim(),
        "vote": rowitems[7].textContent.trim()
    })
});

const formattedtourns = [];
tourns.forEach(tourn => {
    const date = new Date(parseInt(tourn.date)*1000);
    const month = date.getMonth()+1
    let category = "";
    let vote = "";
    let topic = "";

    if (month === 9 || month === 10) {
        topic = "septober"
    } else if (month === 11 || month === 12) {
        topic = "nocember"
    } else if (month === 1) {
        topic = "january"
    } else if (month === 2) {
        topic = "february"
    } else if (month === 3) {
        topic = "march"
    } else if (month === 4) {
        topic = "april"
    } else if (month === 5) {
        topic = "may"
    } else if (month === 6) {
        topic = "june"
    }

    if (tourn.category.includes("PF")) {
        category = "PF"
    } else if (tourn.category.includes("LD")) {
        category = "LD"
    } else {
        category = "WS"
    }



    if (tourn.vote.includes("Neg") || tourn.vote.includes("Con")) {
        vote = "Neg";
    } else {
        vote = "Aff";
    }
    formattedtourns.push({
        "year": date.getFullYear(),
        "month": date.getMonth()+1,
        "topic": topic,
        "category": category,
        "vote": vote
    })
});

formattedtourns.forEach(tourn => {
    if (tourn.topic === thistopic && tourn.year === thisyear) {
        if (tourn.category === "PF") {
            pftopic.push(tourn)
        } else if (tourn.category === "LD") {
            ldtopic.push(tourn)
        } else {
            wstopic.push(tourn)
        }
    }
    if (tourn.category === "PF") {
        pftotal.push(tourn)
    } else if (tourn.category === "LD") {
        ldtotal.push(tourn)
    } else {
        wstotal.push(tourn)
    }
    if (!years.includes(tourn.year)) {
        years.push(tourn.year);
    }
})

const yearcount = years.length;

let pfpct, pflead, topicpfpct, topicpflead, ldpct, ldlead, topicldpct, topicldlead, wspct, wslead, topicwspct, topicwslead

const pfaff = []
const pfneg = []
pftotal.forEach(t => {
    if (t.vote == "Aff") {
        pfaff.push(t.vote);
    } else {
        pfneg.push(t.vote);
    }
})
let pfaffpct = Math.round((pfaff.length/(pfneg.length+pfaff.length)*100)*100) / 100;
if (isNaN(pfaffpct)) {
    pfaffpct = 0
}
let pfnegpct = Math.round((pfneg.length/(pfneg.length+pfaff.length)*100)*100) / 100;
if (isNaN(pfnegpct)) {
    pfnegpct = 0
}
if (pfaffpct > pfnegpct) {
    pfpct = pfaffpct;
    pflead = "Aff";
} else if (pfnegpct > pfaffpct) {
    pfpct = pfnegpct;
    pflead = "Neg";
} else {
    pfpct = 50;
    pflead = "Split"
}

const topicpfaff = []
const topicpfneg = []
pftopic.forEach(t => {
    if (t.vote == "Aff") {
        topicpfaff.push(t.vote);
    } else {
        topicpfneg.push(t.vote);
    }
})
let topicpfaffpct = Math.round((topicpfaff.length/(topicpfneg.length+topicpfaff.length)*100)*100) / 100;
if (isNaN(topicpfaffpct)) {
    topicpfaffpct = 0
}
let topicpfnegpct = Math.round((topicpfneg.length/(topicpfneg.length+topicpfaff.length)*100)*100) / 100;
if (isNaN(topicpfnegpct)) {
    topicpfnegpct = 0
}
if (topicpfaffpct > topicpfnegpct) {
    topicpfpct = topicpfaffpct;
    topicpflead = "Aff";
} else if (topicpfnegpct > topicpfaffpct) {
    topicpfpct = topicpfnegpct;
    topicpflead = "Neg";
} else {
    topicpfpct = 50;
    topicpflead = "Split"
}


const ldaff = []
const ldneg = []
ldtotal.forEach(t => {
    if (t.vote == "Aff") {
        ldaff.push(t.vote);
    } else {
        ldneg.push(t.vote);
    }
})
let ldaffpct = Math.round((ldaff.length/(ldneg.length+ldaff.length)*100)*100) / 100;
if (isNaN(ldaffpct)) {
    ldaffpct = 0
}
let ldnegpct = Math.round((ldneg.length/(ldneg.length+ldaff.length)*100)*100) / 100;
if (isNaN(ldnegpct)) {
    ldnegpct = 0
}
if (ldaffpct > ldnegpct) {
    ldpct = ldaffpct;
    ldlead = "Aff";
} else if (ldnegpct > ldaffpct) {
    ldpct = ldnegpct;
    ldlead = "Neg";
} else {
    ldpct = 50;
    ldlead = "Split"
}

const topicldaff = []
const topicldneg = []
ldtopic.forEach(t => {
    if (t.vote == "Aff") {
        topicldaff.push(t.vote);
    } else {
        topicldneg.push(t.vote);
    }
})
let topicldaffpct = Math.round((topicldaff.length/(topicldneg.length+topicldaff.length)*100)*100) / 100;
if (isNaN(topicldaffpct)) {
    topicldaffpct = 0
}
let topicldnegpct = Math.round((topicldneg.length/(topicldneg.length+topicldaff.length)*100)*100) / 100;
if (isNaN(topicldnegpct)) {
    topicldnegpct = 0
}
if (topicldaffpct > topicldnegpct) {
    topicldpct = topicldaffpct;
    topicldlead = "Aff";
} else if (topicldnegpct > topicldaffpct) {
    topicldpct = topicldnegpct;
    topicldlead = "Neg";
} else {
    topicldpct = 50;
    topicldlead = "Split"
}


const wsaff = []
const wsneg = []
wstotal.forEach(t => {
    if (t.vote == "Aff") {
        wsaff.push(t.vote);
    } else {
        wsneg.push(t.vote);
    }
})
let wsaffpct = Math.round((wsaff.length/(wsneg.length+wsaff.length)*100)*100) / 100;
if (isNaN(wsaffpct)) {
    wsaffpct = 0
}
let wsnegpct = Math.round((wsneg.length/(wsneg.length+wsaff.length)*100)*100) / 100;
if (isNaN(wsnegpct)) {
    wsnegpct = 0
}
if (wsaffpct > wsnegpct) {
    wspct = wsaffpct;
    wslead = "Aff";
} else if (wsnegpct > wsaffpct) {
    wspct = wsnegpct;
    wslead = "Neg";
} else {
    wspct = 50;
    wslead = "Split"
}

const topicwsaff = []
const topicwsneg = []
wstopic.forEach(t => {
    if (t.vote == "Aff") {
        topicwsaff.push(t.vote);
    } else {
        topicwsneg.push(t.vote);
    }
})
let topicwsaffpct = Math.round((topicwsaff.length/(topicwsneg.length+topicwsaff.length)*100)*100) / 100;
if (isNaN(topicwsaffpct)) {
    topicwsaffpct = 0
}
let topicwsnegpct = Math.round((topicwsneg.length/(topicwsneg.length+topicwsaff.length)*100)*100) / 100;
if (isNaN(topicwsnegpct)) {
    topicwsnegpct = 0
}
if (topicwsaffpct > topicwsnegpct) {
    topicwspct = topicwsaffpct;
    topicwslead = "Aff";
} else if (topicwsnegpct > topicwsaffpct) {
    topicwspct = topicwsnegpct;
    topicwslead = "Neg";
} else {
    topicwspct = 50;
    topicwslead = "Split"
}

//////////////////////

fetch(chrome.runtime.getURL("stats/stats.html"))
    .then(response => response.text())
    .then(data => {
        document.querySelector("div.menu").innerHTML += data;
        const totalyearspan = document.getElementById("totalyears");
        const totalroundspan = document.getElementById("totalrounds");
        const totalpfpctspan = document.getElementById("totalpfpct");
        const totalpfleadspan = document.getElementById("totalpflead");
        const totalldpctspan = document.getElementById("totalldpct");
        const totalldleadspan = document.getElementById("totalldlead");
        const totalwspctspan = document.getElementById("totalwspct");
        const totalwsleadspan = document.getElementById("totalwslead");
        const topicroundspan = document.getElementById("topicrounds")
        const pfpctspan = document.getElementById("pfpct");
        const pfleadspan = document.getElementById("pflead");
        const ldpctspan = document.getElementById("ldpct");
        const ldleadspan = document.getElementById("ldlead");
        const wspctspan = document.getElementById("wspct");
        const wsleadspan = document.getElementById("wslead");

        totalyearspan.textContent = yearcount;
        totalroundspan.textContent = formattedtourns.length;
        totalpfpctspan.textContent = pfpct;
        totalpfleadspan.textContent = pflead;
        totalldpctspan.textContent = ldpct;
        totalldleadspan.textContent = ldlead;
        totalwspctspan.textContent = wspct;
        totalwsleadspan.textContent = wslead;
        topicroundspan.textContent = pftopic.length + ldtopic.length + wstopic.length;
        pfpctspan.textContent = topicpfpct;
        pfleadspan.textContent = topicpflead;
        ldpctspan.textContent = topicldpct;
        ldleadspan.textContent = topicldlead;
        wspctspan.textContent = topicwspct;
        wsleadspan.textContent = topicwslead;
        
    })