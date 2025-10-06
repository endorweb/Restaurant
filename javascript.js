// header > Nav > Menu
if (window.innerWidth <= 1024) {
    let btnDrop = document.getElementById("dropbtn");
    let dropdownContentSection = document.getElementById("dropdownContent");

    btnDrop.onclick = function (e) {
        if (dropdownContentSection.style.display === "block") {
            dropdownContentSection.style.display = "none";
            btnDrop.textContent = "Menu ▼"
        } else {
            dropdownContentSection.style.display = "block";
            btnDrop.textContent = "Menu ▲";
        }
    };

    // header > Nav > About
    let dropbtnAboutElement = document.getElementById("dropbtnAbout");
    let dropdownContentAboutSection = document.getElementById("dropdownContentAbout")

    dropbtnAboutElement.onclick = function (e) {
        if (dropdownContentAboutSection.style.display === "block") {
            dropdownContentAboutSection.style.display = "none";
            dropbtnAboutElement.textContent = "About ▼";
        } else {
            dropdownContentAboutSection.style.display = "block";
            dropbtnAboutElement.textContent = "About ▲";
        }
    }
};

