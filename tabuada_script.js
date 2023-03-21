function tabuada(){
	var num = window.document.getElementById("num")
	var end = document.getElementById("end")
	var n = Number(num.value)
	var e = Number(end.value)
	if (n == "" && e == ""){
		window.alert("[ERRO] Ambos os campos devem ser preenchidos")
	}else{
		var r = ""
		var x = 0
		var res = window.document.getElementById("resposta")
		res.innerHTML = `A tabuada de ${n} é: <br>`
		do{
			r = n*x
			res.innerHTML += `${x} x ${n} = ${r} <br>`
			x++
		}while(x <= e)
	}

	// window.alert(r)
}