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
    alert('getJson')
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


    alert('en blanco');

    alert(url)
    var xhr = new XMLHttpRequest();
    alert('1')
	try {

		fetchInject([
  'https://cdn.jsdelivr.net/momentjs/2.17.1/moment.min.js'
]).then(() => {
  console.log(`Finish in less than ${moment().endOf('year').fromNow(true)}`)
})
		
		
        } catch(err) {
            alert(err.description);
        }
	
    
    alert('2')
    xhr.send( null );
    alert('3')	
    //return xmlHttp.responseText;

	
  alert('done')
}

