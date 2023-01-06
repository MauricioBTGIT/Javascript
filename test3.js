function validataifExists(dropdown, value) {
  for (var i = 0; i < dropdown.length; i++){
      if (dropdown.options[i].value === value ){
	      //alert("existe")
		  return true;
	  }
  }
  return false;
}

var token="F97E228F66F447C2A3F1AC8F3BDE0532"
var url="https://bcm.belltech.la/secure/api/v2/88709/CFGTIPIFICACION/select.json"
var upsertUrl = "https://bcm.belltech.la/secure/api/v2/88709/TIPIFICACION/upsert.json"
var retornoBCM;
var idnegocio ="\'Customer Care - Cobranza\'"  //ojo va con ''


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
	//xhr.overrideMimeType("application/json");
	var tmpURL = url;
	//tmpURL = tmpURL +"?IDNEGOCIOA="+encodeURIComponent(idnegocio)
	var tmpfilter = encodeURIComponent("[IDNEGOCIO], "+ idnegocio)
	var filter = "Ask(Any(" + tmpfilter + "))"
	tmpURL = tmpURL + "?filter=" + filter
	//alert(tmpURL)
    xhr.open('GET', tmpURL, true);
	xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
	    //alert('Your query count: ' + xhr.responseText);
        //callback(null, xhr.response, xhr.responseText);
		callback(null, xhr.response);
      } else {
        //callback(status, xhr.response, xhr.responseText);
		callback(status, xhr.response);
      }
    };
    xhr.send();
};

var upsertJSON = function(url, data, callback) {
    var xhr = new XMLHttpRequest();
	//alert(tmpURL)
    xhr.open('POST', url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader('Authorization', 'Bearer ' + token);
	xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://bcm.belltech.la');
	
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
	    //alert('Your query count: ' + xhr.responseText);
        //callback(null, xhr.response, xhr.responseText);
		callback(null, xhr.response);
      } else {
        //callback(status, xhr.response, xhr.responseText);
		callback(status, xhr.response);
      }
    };
    xhr.send(JSON.stringify(data));
};



window.onload = function() {


	getJSON(url,
	function(err, data) {
	  if (err !== null) {
		//alert('Something went wrong: ' + err);
	  } else {
		//ordenamos por campo
		const result = data.sort((a, b) => {
			  
			  var columna1a = null;
			  var columna2a = null;
			  var columna3a = null;
			  var columna4a = null;
			  var columna5a = null;

			  var columna1b = null;
			  var columna2b = null;
			  var columna3b = null;
			  var columna4b = null;
			  var columna5b = null;
			  
			  
			  if (a.TIPIFICACION_NIVEL1 !== null){
				columna1a = a.TIPIFICACION_NIVEL1.toUpperCase(); // ignore upper and lowercase
				}
			  if (b.TIPIFICACION_NIVEL1 !== null){
				columna1b = b.TIPIFICACION_NIVEL1.toUpperCase(); // ignore upper and lowercase
				}
			  
			  if (a.TIPIFICACION_NIVEL2 !== null){
				columna2a = a.TIPIFICACION_NIVEL2.toUpperCase(); // ignore upper and lowercase
				}
			  if (b.TIPIFICACION_NIVEL2 !== null){
			    columna2b = b.TIPIFICACION_NIVEL2.toUpperCase(); // ignore upper and lowercase
				}
			  
			  if (a.TIPIFICACION_NIVEL3 !== null){
				columna3a = a.TIPIFICACION_NIVEL3.toUpperCase(); // ignore upper and lowercase
				}
			  if (b.TIPIFICACION_NIVEL3 !== null){
				columna3b = b.TIPIFICACION_NIVEL3.toUpperCase(); // ignore upper and lowercase
				}
			  
			  if (a.TIPIFICACION_NIVEL4 !== null){
				columna4a = a.TIPIFICACION_NIVEL4.toUpperCase(); // ignore upper and lowercase
				}
			  if (b.TIPIFICACION_NIVEL4 !== null){
				columna4b = b.TIPIFICACION_NIVEL4.toUpperCase(); // ignore upper and lowercase
				}
			  
			  if (a.TIPIFICACION_NIVEL5 !== null){
				columna5a = a.TIPIFICACION_NIVEL5.toUpperCase(); // ignore upper and lowercase
				}
			  if (b.TIPIFICACION_NIVEL5 !== null){
			    columna5b = b.TIPIFICACION_NIVEL5.toUpperCase(); // ignore upper and lowercase
				}
			  
			  if (columna1a+columna2a+columna3a+columna4a+columna5a < columna1b+columna2b+columna3b+columna4b+columna5b) {
				return -1;
			  }
			  if (columna1a+columna2a+columna3a+columna4a+columna5a > columna1b+columna2b+columna3b+columna4b+columna5b) {
				return 1;
			  }

			  // names must be equal
			  return 0;
			});
			
		retornoBCM = data;

		
		

	  }
	});
  
}

