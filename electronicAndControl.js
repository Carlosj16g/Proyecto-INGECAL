function iniciarMenu() {

    let menu = document.getElementById("menu");
    menu.addEventListener("change", function () {
        let optionSelected = menu.options[menu.selectedIndex].getAttribute("value");
        if (optionSelected === "1") {
            document.getElementById("option-menu-1").style.display = "flex";
            document.getElementById("equivalent-resistance").addEventListener("click", function () {
                let resistances = [];
                for (let resistance of document.getElementsByClassName("data-1")) {
                    if (resistance.value === undefined) {
                        alert("Complete los campos");
                        resistances = [];
                        break;
                    } else {
                        console.log(resistance.value);
                        resistances.push(parseFloat(resistance.value));
                    }
                }
                let result = getEquivalentResistance(resistances);
                console.log(result);
                document.getElementById("show-result").value = result;
            })
            document.getElementById("add-fields").addEventListener("click", function () {
                let totalFields = document.getElementsByClassName("data-1").length;
                document.getElementById("fields").insertAdjacentHTML("beforeend",`<label for="">Resistencia ${totalFields + 1}: <input class="data-1" type="number"></label>`);
            })
        } else {
            document.getElementById("option-menu-1").style.display = "none";
        }
    })



}

function getEquivalentResistance(resistances) {
    let result = 0;
    resistances.map(resistance => {
        result += resistance
    })
    return result;
}

window.addEventListener("load", iniciarMenu);
