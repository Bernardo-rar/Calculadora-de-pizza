function calcularPizza() {
    //const tamanhos = [20, 30, 35, 40, 45];
    
    function ajustarTamanhoPizza(inputId, displayId) {
        let tamanho = parseInt(document.getElementById(inputId).value);
        //tamanho = tamanhos.reduce((prev, curr) => Math.abs(curr - tamanho) < Math.abs(prev - tamanho) ? curr : prev);
        document.getElementById(inputId).value = tamanho;
        let novoTamanho = (tamanho / 45) * 300;
        document.getElementById(displayId).style.width = `${novoTamanho}px`;
        document.getElementById(displayId).style.height = `${novoTamanho}px`;
        return tamanho;
    }
    
    let tamanho1 = ajustarTamanhoPizza("tamanho1", "pizza1");
    let tamanho2 = ajustarTamanhoPizza("tamanho2", "pizza2");
    
    let preco1 = parseFloat(document.getElementById("preco1").value) / parseInt(document.getElementById("quantidade1").value);
    let preco2 = parseFloat(document.getElementById("preco2").value) / parseInt(document.getElementById("quantidade2").value);
    
    //let area1 = Math.PI * Math.pow(tamanho1 / 2, 2);
    //let area2 = Math.PI * Math.pow(tamanho2 / 2, 2);
    
    let custo1 = preco1 / tamanho1;
    let custo2 = preco2 / tamanho2;
    
    document.getElementById("custo1").innerText = `Preço por cm²: R$ ${custo1.toFixed(2)}`;
    document.getElementById("custo2").innerText = `Preço por cm²: R$ ${custo2.toFixed(2)}`;
    
    let resultado = custo1 < custo2 ? "A Pizza 1 vale mais a pena!" : "A Pizza 2 vale mais a pena!";
    if (Math.abs(custo1 - custo2) < 0.001) resultado = "Ambas as pizzas têm custo-benefício similar!";
    
    document.getElementById("resultado").innerText = resultado;
}

document.querySelectorAll("input").forEach(input => input.addEventListener("input", calcularPizza));
calcularPizza();