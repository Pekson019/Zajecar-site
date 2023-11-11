function toggleElement(elementSelector, buttonSelector) {
    const element = document.querySelector(elementSelector);
    document.querySelector(buttonSelector).addEventListener("click", () => {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

toggleElement(".odg1", "#pitanje1");
toggleElement(".odg2", "#pitanje2");
toggleElement(".odg3", "#pitanje3");
toggleElement(".odg4", "#pitanje4");

