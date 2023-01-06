function dynamicallyLoadScript(url, callback) {
    //var head = document.head;
    var body = document.body;	
    var script = document.createElement("script");  // create a script DOM node
    script.type = 'text/javascript';
    script.src = url;  // set its src to the provided URL
	
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    //script.onload = callback;

    // Fire the loading
    //head.appendChild(script);
	body.appendChild(script);
    //document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    //document.body.appendChild(script);
}

var myPrettyCode = function() {
   // Here, do whatever you want
};

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

		//dynamicallyLoadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
		//dynamicallyLoadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', myPrettyCode);
		
		//xhr.overrideMimeType("application/json");
		var tmpURL = url;
		//tmpURL = tmpURL +"?IDNEGOCIOA="+encodeURIComponent(idnegocio)
		var tmpfilter = encodeURIComponent("[IDNEGOCIO], "+ idnegocio)
		var filter = "Ask(Any(" + tmpfilter + "))"
		tmpURL = tmpURL + "?filter=" + filter
		//alert(tmpURL)
		alert('antes get');
		xhr.open('GET', tmpURL, false);
		alert('despues get');
		xhr.setRequestHeader('Authorization', 'Bearer ' + token);
		
		
        } catch(err) {
            alert(err.description);
        }
	
    
    alert('2')
    xhr.send( null );
    alert('3')	
    //return xmlHttp.responseText;

	
  alert('done')
}

