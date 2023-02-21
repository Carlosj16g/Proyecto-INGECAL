function iniciarMenu() {

    let menu = document.getElementById("menu");
    menu.addEventListener("click", function() {
        let optionSelected = menu.options[menu.selectedIndex].getAttribute("value");
        if (optionSelected === "1") {
            document.getElementById("option-menu-1").style.display = "flex";
            let resistances = [];
            for (let resistance of document.getElementsByClassName("data-1")){
                if (resistance.value === undefined) {
                    alert("Complete los campos");
                    resistances = [];
                    break;
                }else {
                    resistances.push(resistance.value)
                }
            }
            
        }
        else{
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
