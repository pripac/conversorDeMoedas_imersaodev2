function Converter () {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorConvertido = (valor / 5.23).toFixed(2)
    alert("Esta quantia em reais equivale a "+ valorConvertido + " dólares")
}

