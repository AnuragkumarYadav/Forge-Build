document.addEventListener("DOMContentLoaded", () => {
    const btnchange = document.querySelector("button");
    const x = document.querySelector("x");

    btnchange.addEventListener("click", () => {
        x.innerText = "Final Text";
    });
});
function showPrice() {
    var boxes = document.querySelectorAll("input");
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

