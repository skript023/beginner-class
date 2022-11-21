let tombol = document.querySelector(".kalkulator-tombol");
let calculator = document.querySelector("#kalkulator");

tombol.addEventListener("click", (e)=>{
    let tombol_click = e.target;
    let nilai_tombol = tombol_click.innerText;

    if (nilai_tombol === "C")
    {
        calculator.value = "";
    }
    else if (nilai_tombol === "<")
    {
        calculator.value = calculator.value.slice(0, -1);
    }
    else if (nilai_tombol === "=")
    {
        calculator.value = eval(calculator.value);
    }
    else
    {
        calculator.value += nilai_tombol;
    }
});

