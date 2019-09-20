function displayBio() {
    let bio = document.getElementsByClassName("Bio")[0];
    bio.style.display = "flex";
    bio.style.transition = "all 2s"
}

function hideBio() {
    let bio = document.getElementsByClassName("Bio")[0];
    bio.style.display = "none";
    let bio1 = document.getElementsByClassName("Bio FA")[0];
    bio1.style.display = "none";
    let bio2 = document.getElementsByClassName("Bio FB")[0];
    bio2.style.display = "none";
}

function displayBioAttention() {
    let bio = document.getElementsByClassName("Bio FA")[0];
    bio.style.display = "flex";
    bio.style.transition = "all 2s"
}

function displayBioBunker() {
    let bio = document.getElementsByClassName("Bio FB")[0];
    bio.style.display = "flex";
    bio.style.transition = "all 2s"
}


function revealMore() {
    let foot = document.getElementsByClassName("P")[0];
    foot.style.color = "blue";
    foot.style.transition = "all 2s";
    document.getElementById("hover-link").style.color = "white";
}

function revealMoreAttention() {
    let foot = document.getElementsByClassName("A")[0];
    foot.style.color = "blue";
    foot.style.transition = "all 2s";
    document.getElementById("hover-linkA").style.color = "white";
}

function revealMoreBunker() {
    let foot = document.getElementsByClassName("B")[0];
    foot.style.color = "blue";
    foot.style.transition = "all 2s";
    document.getElementById("hover-linkB").style.color = "white";
}

function hideMore() {
    let footing = document.getElementsByClassName("P")[0];
    let footing2 = document.getElementsByClassName("A")[0];
    let footing3 = document.getElementsByClassName("B")[0];
    footing.style.color = "white";
    footing.style.transition = "all 2s";
    footing2.style.color = "white";
    footing2.style.transition = "all 2s";
    footing3.style.color = "white";
    footing3.style.transition = "all 2s";
    document.getElementById("hover-link").style.color = "blue"
    document.getElementById("hover-linkA").style.color = "blue"
    document.getElementById("hover-linkB").style.color = "blue"
}

function waypointsScroll() {

    // var waypoint = new Waypoint({
    //     element: document.getElementById('WP-offset'),
    //     handler: function(direction) {
    //         let pic1 = document.getElementById('A-pic1').style.display = "block";
    //     },
    //     offset: '80%'
    // })

    // var waypoint = new Waypoint({
    //     element: document.getElementById('WP-offset'),
    //     handler: function(direction) {
    //         console.log(this.element.id + ' triggers at ' + this.triggerPoint)
    //             // let pic1 = document.getElementById('A-pic1').style.display = "block";
    //     },
    //     offset: '155%'
    // })
}

function parallax(self) {
    var s = document.getElementById("floater1");
    let s2 = document.getElementById("floater2");
    let s3 = document.getElementById("floater3");
    let s4 = document.getElementById("floater4");
    let s5 = document.getElementById("floater5");
    let s6 = document.getElementById("floater6");
    let s7 = document.getElementById("floater7");
    let s8 = document.getElementById("floater8");
    let s9 = document.getElementById("floater9");
    var yPos = 0 - about.scrollTop / 3;
    var yPos1 = 0 - about.scrollTop / 4;
    var yPos2 = 0 - about.scrollTop / 4.5;
    var yPos3 = 0 - about.scrollTop / 5.5;
    s.style.top = 220 + yPos + "%";
    s2.style.top = 460 + yPos2 + "%";
    s3.style.top = 810 + yPos3 + "%";
    s4.style.top = 780 + yPos1 + "%";
    s5.style.top = 360 + yPos1 + "%";
    s6.style.top = 1660 + yPos1 + "%";
    s7.style.top = 2240 + yPos2 + "%";
    s8.style.top = 1490 + yPos1 + "%";
    s9.style.top = 3890 + yPos1 + "%";


    // console.log(s.style.top);
}





function navigatior() {
    let Wid = window.innerWidth;

    let about = document.getElementById("about");
    let nav = document.getElementById("naver");
    // let ul = document.getElementById("naver")
    if (about.style.display == 'flex') {
        about.style.display = 'none';
        if (Wid > 414) {
            nav.style.width = '7%';
            nav.style.background = '#fff';

        } else if (Wid < 414) {
            nav.style.width = '20%';
            nav.style.background = '#fff';
        }
        nav.classList.remove("naverRight")
    } else {
        about.style.display = 'flex'
        nav.style.width = '100%'
        nav.style.float = 'right';
        nav.style.background = '#000';
        nav.style.color = '#fff';
        nav.classList.add("naverRight");
        // waypointsScroll();
        about.addEventListener("scroll", function() {
            parallax();
        });

    }
}


function hideAbout() {
    let Wid = window.innerWidth;

    let about = document.getElementById("about");
    let nav = document.getElementById("naver");
    about.style.display = 'none'
    if (Wid > 415) {
        nav.style.width = '7%';
        nav.style.background = '#fff0';
        nav.style.color = '#000';

    } else if (Wid < 415) {
        nav.style.width = '20%';
        nav.style.background = '#fff0';
        nav.style.color = '#000';
    }
    nav.classList.remove("naverRight")
}


function linkBounce() {
    let link = document.getElementById(event.target.id);

    link.classList.add("apply-shake");
    setTimeout(() => {
        if (link.classList.contains("apply-shake")) {
            link.classList.remove("apply-shake");
        }
    }, 500)
}


function getTime() {
    const now = new Date();
    const start = new Date("May 14 2019 00:00");
    let timeHeading = document.getElementsByClassName("heading");
    var content = document.createTextNode(start);

    timeHeading[0].appendChild(content);
}



var startDateTime = new Date(2019, 4, 14, 3, 0, 0, 0); // YYYY (M-1) D H m s (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();

    var diff = Math.round((newStamp - startStamp) / 1000);

    var d = Math.floor(diff / (24 * 60 * 60));
    diff = diff - (d * 24 * 60 * 60);
    var h = Math.floor(diff / (60 * 60));
    diff = diff - (h * 60 * 60);
    var m = Math.floor(diff / (60));
    diff = diff - (m * 60);
    var s = diff;
    let time = [d, h, m, s];
    let timeDiv = document.getElementById("time-elapsed");
    let div = document.createElement("div")
    div.className += "headingDate"
    let content = document.createTextNode("2019 05 14")
    div.append(content)
    timeDiv.innerHTML = d + " days " + h + " hours " + m + " minutes " + s + " live";
    timeDiv.insertBefore(div, timeDiv.firstChild)

}


function main() {
    // navigator()
    // getTime()
    waypointsScroll()
    setInterval(updateClock, 1000);

}

main()