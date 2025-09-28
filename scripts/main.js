// // Set colour mode based on local storage (defaults to light mode)
// document.addEventListener("DOMContentLoaded", function () {
//   if (localStorage.getItem("colourMode") === "dark") {
//     setColourMode(false);
//   } else {
//     setColourMode(true);
//   }
// });

// // Set dark/light mode
// function toggleColourMode() {
//   const currentMode = localStorage.getItem("colourMode");
//   if (currentMode === "dark") {
//     setColourMode(true); // Switch to light mode
//   } else {
//     setColourMode(false); // Switch to dark mode
//   }
// }


// // Set dark/light mode
// function setColourMode(lightMode) {
//   const root = document.querySelector(":root");
//   const headerIcon = document.getElementById("header-icon");
//   const colourModeButton = document.getElementById("colour-mode-button");



//   if (!lightMode) {

//     // ENABLE DARK MODE
//     root.style.setProperty("--background", "#6e7266");          // old was 8f938a, 7f7b6f
//     root.style.setProperty("--text", "#2e2e2e");              
//     root.style.setProperty("--showcase-box", "#a9a69b");       
//     root.style.setProperty("--showcase-box-element", "rgba(160,160,160,0.3)"); 
//     root.style.setProperty("--showcase-box-element-hover", "rgba(120,120,120,0.3)");
//     root.style.setProperty("--header-light", "#5e6a5e");   


//     // Update header icon
//     if (headerIcon) {
//       headerIcon.style.filter = null;
//     }

//     // Update toggle button
//     colourModeButton.setAttribute("title", "Enable Light Mode");
//     colourModeButton.innerHTML = "<i class='fa-solid fa-sun'></i>";

//     // Update local storage
//     localStorage.setItem("colourMode", "dark");
  
  
  
//   } else {
//     // ENABLE LIGHT MODE
//     root.style.setProperty("--background", "#f0e5d8");
//     root.style.setProperty("--text", "#535353");
//     root.style.setProperty("--showcase-box", "#f5efe9");
//     root.style.setProperty("--showcase-box-element", "rgba(200,200,200, 0.2)");
//     root.style.setProperty("--showcase-box-element-hover", "rgba(150,150,150, 0.3)");
//     root.style.setProperty("--header-light", "#879183");

//     // Update header icon
//     if (headerIcon) {
//       headerIcon.style.filter = "invert(1)";
//     }

//     // Update toggle button
//     colourModeButton.setAttribute("title", "Enable Dark Mode");
//     colourModeButton.innerHTML = "<i class='fa-solid fa-moon'></i>";

//     // Update local storage
//     localStorage.setItem("colourMode", "light");
//   }


  
// }




// // Apply saved page color on load
// function applySavedColourMode() {
//     const savedMode = localStorage.getItem("colourMode");
//     const currentMode = savedMode !== "dark"; // default to light if nothing saved

//     setColourMode(currentMode);
// }





// Apply saved colour mode on page load
document.addEventListener("DOMContentLoaded", function () {
    applySavedColourMode();
});



// Toggle dark/light mode
function toggleColourMode() {
    const html = document.documentElement;
    const colourModeButton = document.getElementById("colour-mode-button");
    const headerIcon = document.getElementById("header-icon");

    if (html.classList.contains("dark-mode")) {
        html.classList.remove("dark-mode");
        localStorage.setItem("colourMode", "light");

        if (headerIcon) headerIcon.style.filter = "invert(1)";
        if (colourModeButton) {
            colourModeButton.setAttribute("title", "Enable Dark Mode");
            colourModeButton.innerHTML = "<i class='fa-solid fa-moon'></i>";
        }
    } else {
        html.classList.add("dark-mode");
        localStorage.setItem("colourMode", "dark");

        if (headerIcon) headerIcon.style.filter = null;
        if (colourModeButton) {
            colourModeButton.setAttribute("title", "Enable Light Mode");
            colourModeButton.innerHTML = "<i class='fa-solid fa-sun'></i>";
        }
    }
}

// Apply saved page colour on load
function applySavedColourMode() {
    const savedMode = localStorage.getItem("colourMode");
    const html = document.documentElement;

    if (savedMode === "light") {
        // Explicitly light
        html.classList.remove("dark-mode");
        const headerIcon = document.getElementById("header-icon");
        if (headerIcon) headerIcon.style.filter = "invert(1)";
        const colourModeButton = document.getElementById("colour-mode-button");
        if (colourModeButton) {
            colourModeButton.setAttribute("title", "Enable Dark Mode");
            colourModeButton.innerHTML = "<i class='fa-solid fa-moon'></i>";
        }
    } else {
        // Default and saved "dark"
        html.classList.add("dark-mode");
        const headerIcon = document.getElementById("header-icon");
        if (headerIcon) headerIcon.style.filter = null;
        const colourModeButton = document.getElementById("colour-mode-button");
        if (colourModeButton) {
            colourModeButton.setAttribute("title", "Enable Light Mode");
            colourModeButton.innerHTML = "<i class='fa-solid fa-sun'></i>";
        }
    }
}







































// For making table rows with an href clickable
function clickableRow() {
  const rows = document.querySelectorAll(".clickable-row");
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      window.location.href = row.dataset.href;
    });
  });
}






document.querySelectorAll(".pdfViewerContainer").forEach(container => {
  const button = container.querySelector(".toggleButton");
  const pdfViewer = container.querySelector(".pdfViewer");
  const arrow = container.querySelector(".arrow");

  button.addEventListener("click", () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isActive = pdfViewer.classList.contains("active");

    // Close all viewers first
    document.querySelectorAll(".pdfViewerContainer").forEach(otherContainer => {
      const otherViewer = otherContainer.querySelector(".pdfViewer");
      const otherArrow = otherContainer.querySelector(".arrow");
      const otherButton = otherContainer.querySelector(".toggleButton");

      otherViewer.classList.remove("active");
      if (!isMobile) {
        otherArrow.classList.remove("rotate");
        otherButton.style.borderBottomLeftRadius = "1vmin";
        otherButton.style.borderBottomRightRadius = "1vmin";
      }
    });

    // Toggle current one (open only if it wasn't already active)
    if (!isActive) {
      pdfViewer.classList.add("active");
      if (!isMobile) {
        arrow.classList.add("rotate");
        button.style.borderBottomLeftRadius = "0";
        button.style.borderBottomRightRadius = "0";
      }
    } else {
      if (isMobile) {
        button.style.borderBottomLeftRadius = "1vmin";
        button.style.borderBottomRightRadius = "1vmin";
      }
    }
  });
});





const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});
