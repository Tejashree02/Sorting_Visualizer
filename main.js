var inp_as = document.getElementById("a_size");
var arr_size = inp_as.value;
var inp_aspeed = document.getElementById("a_speed");
var inp_ag = document.getElementById("a_generate");
var butts_algos = document.querySelectorAll(".algos button");
var div_sizes = [];
var divs = [];
var margin_size;

var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

inp_ag.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < arr_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:green; width:" + (100 / arr_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size() {
    arr_size = inp_as.value;
    generate_array();

}

window.onload = generate_array();



function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {

        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");
        butts_algos[i].disabled = true;

        inp_ag.disabled = true;
        inp_as.disabled = true;
        inp_aspeed.disabled = true;
    }
}
