let a = document.querySelector(".all-button-s-2-b1");
let b = document.querySelector(".all-button-s-2-b2");
let c = document.querySelector(".all-button-s-2-b3");
let imga = document.querySelector(".sec-2-all-img-1-1");
let imgb = document.querySelector(".sec-2-all-img-2-2");
let imgc = document.querySelector(".sec-2-all-img-3-3");

a.addEventListener("click", function () {
    imga.style.display = "block";
    imgb.style.display = "block";
    imgc.style.display = "block";
    
    a.style.backgroundColor = "#1da801";
    b.style.backgroundColor = "#414141";
    c.style.backgroundColor = "#414141";
});

b.addEventListener("click", function () {
    imga.style.display = "block";
    imgb.style.display = "none";   // Only imgb hide
    imgc.style.display = "block";

    b.style.backgroundColor = "#1da801";
    a.style.backgroundColor = "#414141";
    c.style.backgroundColor = "#414141";
});

c.addEventListener("click", function () {
    imga.style.display = "none";
    imgb.style.display = "block";   // Only imgb show
    imgc.style.display = "none";

    c.style.backgroundColor = "#1da801";
    a.style.backgroundColor = "#414141";
    b.style.backgroundColor = "#414141";
});

let dow = document.querySelector("#button2");

dow.addEventListener("click", function () {
    // ফাইলের URL (তুমি নিজের ফাইলের URL এখানে দিবে)
    let fileURL = "download.png"; // এখানে ফাইলের লিঙ্ক দিবে
    let link = document.createElement("a");
    link.href = fileURL;
    link.download = "download.png"; // ফাইলের নাম, যেটা ডাউনলোড হবে
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

let dowa = document.querySelector("#button3");

dowa.addEventListener("click", function () {
    // নতুন উইন্ডো খুলুন একটি নির্দিষ্ট URL সহ
    window.open("about.html");
});







let mobil = document.querySelector(".mobil");
let mobila = document.querySelector(".mobilA");
let mobilb = document.querySelector(".mobilB");
let mobilc = document.querySelector(".mobilC");
let mobilS = document.querySelector(".all-nav");

let sidebarOpen = false;

function closeSidebar() {
    mobilS.style.display = "none";
    mobil.style.zIndex = "1";

    mobil.style.transform = "rotate(0deg)";
    mobila.style.transform = "rotate(0deg)";
    mobila.style.marginTop = "50px";
    mobilb.style.display = "block";
    mobilc.style.transform = "rotate(0deg)";
    sidebarOpen = false;
}

mobil.addEventListener("click", function () {
    if (!sidebarOpen) {
        mobilS.style.display = "block";
        mobil.style.zIndex = "999";

        mobil.style.transform = "rotate(35deg)";
        mobila.style.transform = "rotate(10deg)";
        mobila.style.marginTop = "100px";
        mobilb.style.display = "none";
        mobilc.style.transform = "rotate(100deg)";
        sidebarOpen = true;
    } else {
        closeSidebar();
    }
});

// ✅ যখন কোন a tag-এ ক্লিক হবে, sidebar hide হবে
let navLinks = document.querySelectorAll(".all-nav a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        closeSidebar();
    });
});
