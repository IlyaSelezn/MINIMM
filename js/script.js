var modal = document.getElementById('myModall');
var btn = document.getElementById("LC");
var span = document.getElementsByClassName("closes")[0];
function OpenModal{
btn.onclick = function () {
	modal.style.display = "block";

}
span.onclick = function () {
	modal.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modal) {
	modal.style.display = "none";
}
}
}