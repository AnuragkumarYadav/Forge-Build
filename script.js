document.addEventListener("DOMContentLoaded", () => {
    const btnchange = document.querySelector("button");
    const x = document.querySelector("x");

    btnchange.addEventListener("click", () => {
        x.innerText = "Final Text";
    });
});

function showPrice() {
    var boxes = document.querySelectorAll("input[type='checkbox']");

    var text = " ";

    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            if (boxes[i].value === "chips") {
                text = text + "Chips price is $1\n";
            }
            if (boxes[i].value === "cold drink") {
                text = text + "Cold drink price is $2\n";
            }
            if (boxes[i].value === "biscuits") {
                text = text + "Biscuits price is $0.5\n";
            }
        }
    }

    document.getElementById("prices").innerText = text;
}

let contract;

function initializeContract() {
    contract = {
        value: "initial",
        get: function () {
            return Promise.resolve(this.value);
        },
        set: function (newValue) {
            this.value = newValue;
        }
    };
}

document.addEventListener("DOMContentLoaded", function () {
    initializeContract();
});

function setValue() {
    var v = document.getElementById("val").value;
    if (contract) {
        contract.set(v);
    }
}

function getValue() {
    if (contract) {
        contract.get().then(function (r) {
            document.getElementById("out").innerText = r;
        });
    }
}
