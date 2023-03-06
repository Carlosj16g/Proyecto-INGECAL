let colors = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "gray": 8,
    "white": 9,
    "gold": "",
    "silver": ""
}

function iniciarMenu() {

    startOption1();
    startOption2();
    startOption3();
    startOption4();
    startOption5();
    startOption6();
}


function startOption1() {
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

function startOption2() {
    for (let capacitor of document.getElementsByClassName("data-2")) {
        capacitor.addEventListener("click", function () {
            document.getElementById("show-capacitor-result").value = "Waiting Data ...";
            document.getElementById("capacitor-serie").style.display = "none";
            document.getElementById("capacitor-paralelo").style.display = "none";
        })
    }

    document.getElementById("add-capacitor-fields").addEventListener("click", function () {
        let totalFields = document.getElementsByClassName("data-2").length;
        document.getElementById("capacitor-fields").insertAdjacentHTML("beforeend", `<label for="">Capacitor ${totalFields + 1}: <input class="data-2" type="number"></label>`);
        let count = 0;
        for (let capacitor of document.getElementsByClassName("data-2")) {
            if (count >= totalFields - 1) {
                capacitor.addEventListener("click", function () {
                    document.getElementById("show-capacitor-result").value = "Waiting Data ...";
                    document.getElementById("capacitor-serie").style.display = "none";
                    document.getElementById("capacitor-paralelo").style.display = "none";
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
        if (optionSelected === "2") {
            document.getElementById("option-menu-2").style.display = "flex";
            document.getElementById("equivalent-capacitor").addEventListener("click", function () {

                document.getElementById("show-capacitor-result").value = "Waiting Data ..."

                let capacitors = [];
                for (let capacitor of document.getElementsByClassName("data-2")) {
                    if (capacitor.value !== "") {
                        capacitors.push(parseFloat(capacitor.value));
                    } else {
                        capacitors = [];
                        break;
                    }
                }
                console.log("capacitors.length", capacitors.length);
                if (capacitors.length) {

                    document.getElementById("show-capacitor-result").value = "Structure?"

                    document.getElementById("capacitor-serie").style.display = "inline-block";
                    document.getElementById("capacitor-paralelo").style.display = "inline-block";

                    document.getElementById("capacitor-serie").addEventListener("click", function () {
                        let result = getEquivalentCapacitorSerie(capacitors);
                        document.getElementById("show-capacitor-result").value = result.toFixed(3);
                    });
                    document.getElementById("capacitor-paralelo").addEventListener("click", function () {
                        let result = getEquivalentCapacitorParalelo(capacitors);
                        document.getElementById("show-capacitor-result").value = result.toFixed(3);
                    });
                } else {
                    alert("Complete los campos");
                }
            })
        } else {
            document.getElementById("option-menu-2").style.display = "none";
        }
    })
}

function startOption3() {
    for (let inductor of document.getElementsByClassName("data-3")) {
        inductor.addEventListener("click", function () {
            document.getElementById("show-inductor-result").value = "Waiting Data ...";
            document.getElementById("inductor-serie").style.display = "none";
            document.getElementById("inductor-paralelo").style.display = "none";
        })
    }

    document.getElementById("add-inductor-fields").addEventListener("click", function () {
        let totalFields = document.getElementsByClassName("data-3").length;
        document.getElementById("inductor-fields").insertAdjacentHTML("beforeend", `<label for="">Inductor ${totalFields + 1}: <input class="data-3" type="number"></label>`);
        let count = 0;
        for (let inductor of document.getElementsByClassName("data-3")) {
            if (count >= totalFields - 1) {
                inductor.addEventListener("click", function () {
                    document.getElementById("show-inductor-result").value = "Waiting Data ...";
                    document.getElementById("inductor-serie").style.display = "none";
                    document.getElementById("inductor-paralelo").style.display = "none";
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
        if (optionSelected === "3") {
            document.getElementById("option-menu-3").style.display = "flex";
            document.getElementById("equivalent-inductor").addEventListener("click", function () {

                document.getElementById("show-inductor-result").value = "Waiting Data ..."

                let inductors = [];
                for (let inductor of document.getElementsByClassName("data-3")) {
                    if (inductor.value !== "") {
                        inductors.push(parseFloat(inductor.value));
                    } else {
                        inductors = [];
                        break;
                    }
                }
                console.log("inductors.length", inductors.length);
                if (inductors.length) {

                    document.getElementById("show-inductor-result").value = "Structure?"

                    document.getElementById("inductor-serie").style.display = "inline-block";
                    document.getElementById("inductor-paralelo").style.display = "inline-block";

                    document.getElementById("inductor-serie").addEventListener("click", function () {
                        let result = getEquivalentInductorSerie(inductors);
                        document.getElementById("show-inductor-result").value = result.toFixed(3);
                    });
                    document.getElementById("inductor-paralelo").addEventListener("click", function () {
                        let result = getEquivalentInductorParalelo(inductors);
                        document.getElementById("show-inductor-result").value = result.toFixed(3);
                    });
                } else {
                    alert("Complete los campos");
                }
            })
        } else {
            document.getElementById("option-menu-3").style.display = "none";
        }
    })
}

function startOption4() {
    for (let circuitElement of document.getElementsByClassName("data-4")) {
        circuitElement.addEventListener("click", function () {
            document.getElementById("show-resistance-result").value = "Waiting Data ...";
        })
    }

    let menu = document.getElementById("menu");
    menu.addEventListener("change", function () {
        let optionSelected = menu.options[menu.selectedIndex].getAttribute("value");
        if (optionSelected === "4") {
            document.getElementById("option-menu-4").style.display = "flex";
            document.getElementById("necessary-resistance").addEventListener("click", function () {

                document.getElementById("show-resistance-result").value = "Waiting Data ..."

                let circuitElements = [];
                for (let circuitElement of document.getElementsByClassName("data-4")) {
                    if (circuitElement.value !== "") {
                        circuitElements.push(parseFloat(circuitElement.value));
                    } else {
                        circuitElements = [];
                        break;
                    }
                }
                console.log("circuitElements.length", circuitElements.length);
                if (circuitElements.length) {

                    let result = getNecessaryResistance(circuitElements[0], circuitElements[1]);
                    document.getElementById("show-resistance-result").value = result.toFixed(3);

                } else {
                    alert("Complete los campos");
                }
            })
        } else {
            document.getElementById("option-menu-4").style.display = "none";
        }
    })
}

function startOption5() {
    for (let circuitElement of document.getElementsByClassName("data-5")) {
        circuitElement.addEventListener("click", function () {
            document.getElementById("show-resistance-results-5").value = "Waiting Data ...";
        })
    }

    document.getElementById("add-resistance-fields-5").addEventListener("click", function () {
        let totalFields = document.getElementsByClassName("data-5").length;
        document.getElementById("resistance-fields-5").insertAdjacentHTML("beforeend", `<label for="">Resistance ${totalFields}: <input class="data-5" type="number"></label>`);
        let count = 0;
        for (let resistance of document.getElementsByClassName("data-5")) {
            if (count >= totalFields - 1) {
                resistance.addEventListener("click", function () {
                    document.getElementById("show-resistance-results-5").value = "Waiting Data ...";
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
        if (optionSelected === "5") {
            document.getElementById("option-menu-5").style.display = "flex";
            document.getElementById("voltage-divider").addEventListener("click", function () {

                document.getElementById("show-resistance-results-5").value = "Waiting Data ..."

                let circuitElements = [];
                for (let resistance of document.getElementsByClassName("data-5")) {
                    if (resistance.value !== "") {
                        circuitElements.push(parseFloat(resistance.value));
                    } else {
                        circuitElements = [];
                        break;
                    }
                }
                console.log("circuitElements.length", circuitElements.length);

                if (circuitElements.length) {

                    let [voltage, ...resistances] = circuitElements;
                    let voltages = getVoltageDivider(voltage, resistances);

                    for (let index = 0; index < voltages.length; index++) {
                        const element = voltages[index];
                        if (index > 0) {
                            document.getElementById("show-resistance-results-5").value += `R${index + 1} = ${element.toFixed(3)};\n`;
                        } else {
                            document.getElementById("show-resistance-results-5").value = `R${index + 1} = ${element.toFixed(3)};\n`;
                        }
                    }

                } else {
                    alert("Complete los campos");
                }
            })
        } else {
            document.getElementById("option-menu-5").style.display = "none";
        }
    })
}

function startOption6() {
    for (let band of document.getElementsByClassName("band")) {

        Object.keys(colors).forEach(color => {
            if (color == "black") {
                band.insertAdjacentHTML("beforeend", `<option value="${color}" style="text-align: center; background-color: ${color}; color: white; font-size: 1rem;">${color}</option>`)
            } else {
                band.insertAdjacentHTML("beforeend", `<option value="${color}" style="text-align: center; background-color: ${color}; font-size: 1rem;">${color}</option>`)
            }
        });
    }

    for (let band of document.getElementsByClassName("band")) {
        band.addEventListener("change", function () {
            document.getElementById("show-resistance-results-6").value = "Waiting Data ...";
            let color = band.options[band.selectedIndex].getAttribute("value")
            if (color == "black") band.style.color = "white";
            band.style["background-color"] = color;
        })
    }

    let menu = document.getElementById("menu");
    menu.addEventListener("change", function () {
        let optionSelected = menu.options[menu.selectedIndex].getAttribute("value");
        if (optionSelected === "6") {
            document.getElementById("option-menu-6").style.display = "flex";
            document.getElementById("interpret-colors").addEventListener("click", function () {

                let bands = {};
                count = 0;
                for (let band of document.getElementsByClassName("band")) {
                    let color = band.options[band.selectedIndex].getAttribute("value");
                    if (count == 3 && color == "") {
                        bands[`band-${count + 1}`] = color;
                    } else if (count == 4 && bands["band-4"] !== "") {
                        bands[`band-${count + 1}`] = color;
                    }
                    else if (color !== "") {
                        bands[`band-${count + 1}`] = color;
                    }
                    count += 1;
                }
                console.log("bands", bands);

                let isValid = true;
                let totalBands = Object.keys(bands).length;
                console.log(totalBands);

                if (totalBands >= 3 && totalBands <= 4) {

                    let multipliers = {
                        "black": 1e0,
                        "brown": 1e1,
                        "red": 1e2,
                        "orange": 1e3,
                        "yellow": 1e4,
                        "green": 1e5,
                        "blue": 1e6,
                        "violet": 1e7,
                        "gray": 1e8,
                        "white": 1e9,
                        "gold": 1e-1,
                        "silver": 1e-2
                    }

                    let tolerances = {
                        "brown": 1 / 100,
                        "red": 2 / 100,
                        "gold": 5 / 100,
                        "silver": 10 / 100,
                        "": 20 / 100
                    }

                    let selected_bands = [];
                    Object.keys(bands).map(band => selected_bands.push(band.split("-").pop()))


                    if (selected_bands.includes("5")) {
                        isValid = false;
                    } else {

                        let bandValues = [];
                        Object.values(bands).slice(0, 2).map(color => bandValues.push(colors[color]));

                        if (!Object.keys(multipliers).includes(bands["band-3"]) || !Object.keys(tolerances).includes(bands["band-4"])) {
                            isValid = false;
                            if (!Object.keys(multipliers).includes(bands["band-3"])) {
                                document.getElementById("show-resistance-results-6").value = `Los colores válidos para el multiplicador de una resistencia de 4 bandas son:\n`;
                                Object.keys(multipliers).map(color => document.getElementById("show-resistance-results-6").value += `${color}\n`)
                            } if (!Object.keys(tolerances).includes(bands["band-4"])) {
                                document.getElementById("show-resistance-results-6").value = `Los colores válidos para la tolerancia de una resistencia de 4 bandas son:\n`;
                                Object.keys(tolerances).map(color => document.getElementById("show-resistance-results-6").value += `${color}\n`)
                            }
                        } else {
                            bandValues.push(multipliers[bands["band-3"]])
                            bandValues.push(tolerances[bands["band-4"]])
                            let result = parseInt("" + bandValues[0] + bandValues[1]) * bandValues[2]
                            result = `${result} ± ${(result * bandValues[3]).toFixed(3)}`;
                            document.getElementById("show-resistance-results-6").value = `${result}\n`;
                        }
                        console.log("bandValues", bandValues);
                    }
                } else if (totalBands == 5) {

                    let multipliers = {
                        "black": 1e0,
                        "brown": 1e1,
                        "red": 1e2,
                        "orange": 1e3,
                        "yellow": 1e4,
                        "green": 1e5,
                        "blue": 1e6,
                        "violet": 1e7,
                        "gold": 1e-1,
                        "silver": 1e-2
                    }

                    let tolerances = {
                        "brown": 1 / 100,
                        "red": 2 / 100,
                        "green": 0.5 / 100,
                        "blue": 0.25 / 100,
                        "violet": 0.10 / 100,
                        "gray": 0.05 / 100,
                        "gold": 5 / 100,
                        "silver": 10 / 100,
                        "": 20 / 100
                    }

                    let selected_bands = [];
                    Object.keys(bands).map(band => selected_bands.push(band.split("-").pop()))

                    let bandValues = [];
                    Object.values(bands).slice(0, 3).map(color => bandValues.push(colors[color]));

                    if (!Object.keys(multipliers).includes(bands["band-4"]) || !Object.keys(tolerances).includes(bands["band-5"])) {
                        isValid = false;
                        if (!Object.keys(multipliers).includes(bands["band-4"])) {
                            document.getElementById("show-resistance-results-6").value = `Los colores válidos para el multiplicador de una resistencia de 5 bandas son:\n`;
                            Object.keys(multipliers).map(color => document.getElementById("show-resistance-results-6").value += `${color}\n`)
                        } if (!Object.keys(tolerances).includes(bands["band-5"])) {
                            document.getElementById("show-resistance-results-6").value = `Los colores válidos para la tolerancia de una resistencia de 5 bandas son:\n`;
                            Object.keys(tolerances).map(color => document.getElementById("show-resistance-results-6").value += `${color}\n`)
                        }
                    } else {
                        bandValues.push(multipliers[bands["band-4"]])
                        bandValues.push(tolerances[bands["band-5"]])
                        let result = parseInt("" + bandValues[0] + bandValues[1] + bandValues[2]) * bandValues[3]
                        result = `${result} ± ${(result * bandValues[4]).toFixed(3)}`;
                        document.getElementById("show-resistance-results-6").value = `${result}\n`;
                    }
                    console.log("bandValues", bandValues);

                }

                if (!isValid) {
                    alert("Complete los campos adecuados de forma correcta");
                }
            })
        } else {
            document.getElementById("option-menu-6").style.display = "none";
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

function getNecessaryResistance(voltage, current) {
    return voltage / current;
}

function getVoltageDivider(voltaje, resistances) {
    let voltages = [];
    let sumResistances = 0;
    resistances.map(resistance => sumResistances += resistance);
    resistances.forEach(resistance => {
        voltages.push((voltaje / sumResistances) * resistance);
    });
    return voltages;
}

window.addEventListener("load", iniciarMenu);
