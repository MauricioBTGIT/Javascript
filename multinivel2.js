var subjectObject = {
  "CONECTA": {
    "Escucha Oferta": ["Agenda Llamada", "Acepta", "Ya no es cliente WOM", "Desconfia de la Llamada", "Cliente Empresa", "Línea como prepago", "Se portara a otra compañia", "Cesante o con problemas económicos", "Ya cuenta con plan de la nueva oferta", "Conforme con su plan actual/No le interesa", "Prefiere Gestionar en Sucursal", "Solicita Baja de Servicio", "Cliente Presenta Deuda con WOM", "Cliente con equipo en Arriendo"],
    "No Escucha Oferta": ["Usuario Menor de Edad sin contacto con titular", "Inubicable por horario", "Solo en Horario PM", "Solo en horario AM"]
  },
  "NO CONECTA": {
    "No Contesta": ["-"],
    "Ocupado": ["-"],
	"Buzón de Voz": ["-"],
	"Congestionado": ["-"],
	"Sin Ringback": ["-"],
	"Número Erróneo": ["-"]
  }
}


window.onload = function() {
  var lvl1Sel = document.getElementById("lvl1");
  var lvl2Sel = document.getElementById("lvl2");
  var lvl3Sel = document.getElementById("lvl3");
  for (var x in subjectObject) {
    lvl1Sel.options[lvl1Sel.options.length] = new Option(x, x);
  }
  
  
  
  lvl1Sel.onchange = function() {
    //empty Lvl2 y Lvl3 dropdowns
    lvl3Sel.length = 1;
    lvl2Sel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      lvl2Sel.options[lvl2Sel.options.length] = new Option(y, y);
    }
  }
  lvl2Sel.onchange = function() {
    //empty Lvl3 dropdown
    lvl3Sel.length = 1;
    //display correct values
    var z = subjectObject[lvl1Sel.value][this.value];
	if (z.length == 1){
		//alert("1 elemento");
		lvl3Sel.options[lvl3Sel.options.length] = new Option(z[0], z[0])
		lvl3Sel.selectedIndex = 1;
	}
	else{
		for (var i = 0; i < z.length; i++) {
		  lvl3Sel.options[lvl3Sel.options.length] = new Option(z[i], z[i]);
		}
	}
  }
}
