document.querySelector("select").addEventListener("change", changeTheme);
var body = document.querySelector("body");

function changeTheme() {
if (this.value == "dark"){
    body.classList.add("dark");
}
else {
    body.classList.remove("dark");
}
}