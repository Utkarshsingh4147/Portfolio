document.addEventListener("DOMContentLoaded", () => {
    const bgChanger = document.querySelector(".bg-changer");
    const root = document.documentElement;

    bgChanger.addEventListener("click", () => {
        if (root.style.getPropertyValue("--background-color") === "#000") {
            // Switch to light mode
            root.style.setProperty("--background-color", "#fff");
            root.style.setProperty("--text-color", "#333");
        } else {
            // Switch to dark mode
            root.style.setProperty("--background-color", "#000");
            root.style.setProperty("--text-color", "#fff");
        }
    });
});
