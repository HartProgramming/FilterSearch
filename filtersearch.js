/* Select filter buttons */
const all = document.querySelector("#all");
const cakes = document.querySelector("#cakes");
const cupcakes = document.querySelector("#cupcakes");
const sweets = document.querySelector("#sweets");
const doughnuts = document.querySelector("#doughnuts");
const desertDiv = document.querySelectorAll(".desertDiv");
const searchBtn = document.querySelector("#searchBtn");
const searchBar = document.querySelector("#searchBar");




/* Add click events to each button for filtering
by removing all classes that isn't the filter */
for (let x of desertDiv) {
    x.classList.remove("none");
    /* Search bar and button that checks for dataset */
    searchBtn.addEventListener("click", function () {
        x.classList.remove("none")
        if(searchBar.value === "sweets") {
            if(x.dataset.desert === "cupcake" || x.dataset.desert === "cake" || x.dataset.desert === "doughnuts"){
                x.classList.add("none");
            }
        }else if (searchBar.value === "doughnuts") {
            if (x.dataset.desert === "cupcake" || x.dataset.desert === "cake" || x.dataset.desert === "sweets") {
                x.classList.add("none");
            }
        }else if (searchBar.value === "cupcake") {
            if (x.dataset.desert === "sweets" || x.dataset.desert === "cake" || x.dataset.desert === "doughnuts") {
                x.classList.add("none");
            }
        }else if (searchBar.value === "cake") {
            if (x.dataset.desert === "cupcake" || x.dataset.desert === "sweets" || x.dataset.desert === "doughnuts") {
                x.classList.add("none");
            }
        }
    })
    cakes.addEventListener("click", function () {
        x.classList.remove("none")
        if (x.dataset.desert === "cupcake" || x.dataset.desert === "sweets" || x.dataset.desert === "doughnuts") {
            x.classList.add("none")
        }
    })
    sweets.addEventListener("click", function () {
        x.classList.remove("none")
        if (x.dataset.desert === "cupcake" || x.dataset.desert === "cake" || x.dataset.desert === "doughnuts") {
            x.classList.add("none")
        }
    })
    cupcakes.addEventListener("click", function () {
        x.classList.remove("none")
        if (x.dataset.desert === "cake" || x.dataset.desert === "sweets" || x.dataset.desert === "doughnuts") {
            x.classList.add("none")
        }
    })
    doughnuts.addEventListener("click", function () {
        x.classList.remove("none")
        if (x.dataset.desert === "cupcake" || x.dataset.desert === "sweets" || x.dataset.desert === "cake") {
            x.classList.add("none")
        }
    })
    all.addEventListener("click", function () {
        x.classList.remove("none");
        x.classList.add("desertDiv");
    })
}

