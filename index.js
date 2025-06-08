import { generate } from "./generator.js";
import { setupDarkModeToggle, applySystemDarkMode } from "./darkMode.js";
let genBtn = document.getElementById("genbtn");
let streetCheckBox = document.getElementById("streetname");
let resultsUl = document.getElementById("results");

let prefixes = [];
let suffixes = [];
let streets = [];

async function loadPrefixes() {
    const response = await fetch("prefix.txt");
    const data = await response.text();
    prefixes = data.replace(/\r\n/g, '\n').split("\n").filter(Boolean);
}

async function loadSuffixes() {
    const response = await fetch("suffix.txt");
    const data = await response.text();
    suffixes = data.replace(/\r\n/g, '\n').split("\n").filter(Boolean);
}

async function loadStreets() {
    const response = await fetch("street.txt");
    const data = await response.text();
    streets = data.replace(/\r\n/g, '\n').split("\n").filter(Boolean);
}

async function init() {
    await loadPrefixes();
    await loadSuffixes();
    await loadStreets();

    genBtn.addEventListener("click", () => {
        resultsUl.innerHTML = ""; // Clear old results

        for (let i = 0; i < 20; i++) {
            const li = document.createElement("li");
            li.textContent = generate(
                prefixes,
                suffixes,
                streetCheckBox.checked ? streets : null
            );
            resultsUl.appendChild(li);
        }
    });
}

init();
applySystemDarkMode();
setupDarkModeToggle();