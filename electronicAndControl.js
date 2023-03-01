function iniciarMenu() {

    for (let resistance of document.getElementsByClassName("data-1")) {
        resistance.addEventListener("click", function () {
            document.getElementById("show-result").value = "Waiting Data ...";
            document.getElementById("resistencia-serie").style.display = "none";
            document.getElementById("resistencia-paralelo").style.display = "none";
        })
    }

    document.getElementById("add-fields").addEventListener("click", function () {
        let totalFields = document.getElementsByClassName("data-1").length;
        document.getElementById("fields").insertAdjacentHTML("beforeend", `<label for="">Resistencia ${totalFields + 1}: <input class="data-1" type="number"></label>`);
        let count = 0;
        for (let resistance of document.getElementsByClassName("data-1")) {
            if (count >= totalFields - 1) {
                resistance.addEventListener("click", function () {
                    document.getElementById("show-result").value = "Waiting Data ...";
                    document.getElementById("resistencia-serie").style.display = "none";
                    document.getElementById("resistencia-paralelo").style.display = "none";
                })
            } else {
                count += 1;
                continue;
            }
        }
    })

    let menu = document.getElementById("menu");
    menu.addEventListener("change", function () {
        let optionSelected = menu.options[menu.selectedIndex].getAttribute("value");
        if (optionSelected === "1") {
            document.getElementById("option-menu-1").style.display = "flex";
            document.getElementById("equivalent-resistance").addEventListener("click", function () {

                document.getElementById("show-result").value = "Waiting Data ..."

                let resistances = [];
                for (let resistance of document.getElementsByClassName("data-1")) {
                    if (resistance.value !== "") {
                        resistances.push(parseFloat(resistance.value));
                    } else {
                        resistances = [];
                        break;
                    }
                }
                console.log("resistances.length", resistances.length);
                if (resistances.length) {

                    document.getElementById("show-result").value = "Structure?"

                    document.getElementById("resistencia-serie").style.display = "inline-block";
                    document.getElementById("resistencia-paralelo").style.display = "inline-block";

                    document.getElementById("resistencia-serie").addEventListener("click", function () {
                        let result = getEquivalentResistanceSerie(resistances);
                        document.getElementById("show-result").value = result.toFixed(3);
                    });
                    document.getElementById("resistencia-paralelo").addEventListener("click", function () {
                        let result = getEquivalentResistanceParalelo(resistances);
                        document.getElementById("show-result").value = result.toFixed(3);
                    });
                } else {
                    alert("Complete los campos");
                }
            })
        } else {
            document.getElementById("option-menu-1").style.display = "none";
        }
    })



}

function getEquivalentResistanceSerie(resistances) {
    let result = 0;
    resistances.map(resistance => {
        result += resistance
    })
    return result;
}

function getEquivalentResistanceParalelo(resistances) {
    let result = 0;
    resistances.map(resistance => {
        result += 1 / resistance
    })
    return 1 / result;
}

function getEquivalentCapacitorSerie(capacitors) {
    return getEquivalentResistanceParalelo(capacitors);
}

function getEquivalentCapacitorParalelo(capacitors) {
    return getEquivalentResistanceSerie(capacitors);
}

function getEquivalentInductorSerie(inductors) {
    return getEquivalentResistanceSerie(inductors);
}

function getEquivalentInductorParalelo(inductors) {
    return getEquivalentResistanceParalelo(inductors);
}

window.addEventListener("load", iniciarMenu);
