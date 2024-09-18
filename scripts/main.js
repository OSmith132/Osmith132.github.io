// Set colour mode based on local storage (defaults to dark mode)
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("colourMode") === "dark") {
        setColourMode(false);
    } else {
        setColourMode(true);
    }
});

// Set dark/light mode
function toggleColourMode() {
    const currentMode = localStorage.getItem("colourMode");
    if (currentMode === "dark") {
        setColourMode(true); // Switch to light mode
    } else {
        setColourMode(false); // Switch to dark mode
    }
}

// Set dark/light mode
function setColourMode(lightMode) {
    const root = document.querySelector(":root");
    const headerIcon = document.getElementById("header-icon");
    const colourModeButton = document.getElementById("colour-mode-button");

    if (!lightMode) {

        // ENABLE DARK MODE
        root.style.setProperty("--background", "#8f958f");
        //  root.style.setProperty("--header", "#293535");
         root.style.setProperty("--text", "#424242");
        // root.style.setProperty("--alternate-text", "white");
        // root.style.setProperty("--header-button", "#e7d8c9");
        // root.style.setProperty("--header-light", "#879183");

        // Update header icon
        if (headerIcon) {
            headerIcon.style.filter = null;
        }

        // Update toggle button
        colourModeButton.setAttribute("title", "Enable Light Mode");
        colourModeButton.innerHTML = "<i class='fa-solid fa-sun'></i>";

        // Update local storage
        localStorage.setItem("colourMode", "dark");
        


    } else {

        // ENABLE LIGHT MODE
        root.style.setProperty("--background", "#f5ede4");
        // root.style.setProperty("--header", "#546666");
        root.style.setProperty("--text", "#535353");
        // root.style.setProperty("--alternate-text", "white");
        // root.style.setProperty("--header-button", "#e7d8c9");
        // root.style.setProperty("--header-light", "#879183");
        
    

        // Update header icon
        if (headerIcon) {
            headerIcon.style.filter = "invert(1)";
        }

        // Update toggle button
        colourModeButton.setAttribute("title", "Enable Dark Mode");
        colourModeButton.innerHTML = "<i class='fa-solid fa-moon'></i>";

        // Update local storage
        localStorage.setItem("colourMode", "light");
    }
}

// On page load, set the colour mode based on local storage
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("colourMode") === "dark") {
        setColourMode(false);
    } else {
        setColourMode(true);
    }
});



// For making table rows with an href clickable
function clickableRow() {
    const rows = document.querySelectorAll(".clickable-row");
    rows.forEach(row => {
        row.addEventListener("click", () => {
            window.location.href = row.dataset.href;
        });
    });
}

//Open form
function openForm(formID) {
    document.getElementById(formID).style.visibility = "visible"
    document.getElementById(formID).style.opacity = 1;
}

//Close form
function closeForm(formID) {
    setTimeout(function() {
        document.getElementById(formID).style.visibility = "hidden";
    }, 300);
    document.getElementById(formID).style.opacity = 0;
}

// Show/hide characters in password input
function togglePasswordVisibility(passwordID) {
    const element = document.getElementById(passwordID);

    if (element.type === "password") {
        element.type = "text";
    } else {
        element.type = "password";
    }
}