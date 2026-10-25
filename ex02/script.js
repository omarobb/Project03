// Select elements
const title = document.getElementById("title");
const description = document.querySelector(".description");
const box = document.querySelector("#box");

// Change text content
title.textContent = "The DOM was changed!";
description.textContent = "This text was set with textContent.";

// Change styles
title.style.color = "royalblue";
title.style.textAlign = "center";
description.style.fontStyle = "italic";

// Add a CSS class
box.classList.add("active");
box.textContent = "I am an active box.";
