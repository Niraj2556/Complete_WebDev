// DOM Selection and Text Manipulation
document.getElementById("main-container").querySelector("h1").textContent = "DOM Manipulation Assignment";

const introParagraph = document.querySelector(".intro");
introParagraph.textContent += " In this assignment, you will practice DOM manipulation techniques.";

// Adding HTML Content and Inline Styles
const boxDiv = document.querySelector(".box");
boxDiv.innerHTML = `
    <h2>Box Content</h2>
    <p>This box is being dynamically generated and styled using JavaScript.</p>
`;

// Inline styles
boxDiv.style.backgroundColor = "#f2f2f2";
boxDiv.style.border = "1px solid #333";
boxDiv.style.padding = "10px";


// Working with Classes
const btn = document.getElementById("btn");
const btnRemove = document.getElementById("btn-remove");

btn.addEventListener("click", () => {
    introParagraph.classList.add("highlight");
});

btnRemove.addEventListener("click", () => {
    introParagraph.classList.remove("highlight");
});