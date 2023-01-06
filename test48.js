function dynamicallyLoadScript(url, callback) {
    //var head = document.head;
    var body = document.body;	
    var script = document.createElement("script");  // create a script DOM node
    script.type = 'text/javascript';
    script.src = url;  // set its src to the provided URL
	
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    //head.appendChild(script);
	body.appendChild(script);
    //document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    //document.body.appendChild(script);
}

function dynamicallyLoadScript2(url) {
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
	alert('myPrettyCode');
	
	/*$.get(url, function (data, status){
   		//console.log('${data}')
		alert('hola1')
		alert('${data}')
	});*/
	
	var tmpURL = url;
	var tmpfilter = encodeURIComponent("[IDNEGOCIO], "+ idnegocio)
	var filter = "Ask(Any(" + tmpfilter + "))"
	//tmpURL = tmpURL + "?filter=" + filter
	//tmpURL = 'https://api.github.com/gists?callback=?'   //debe ir con ? para que sea jsonp
	tmpURL = url + '?'
	alert(tmpURL);
	 $.getJSON(tmpURL, function(response){
                 alert('hola2')
		 alert(response)  
		 /* $.each(response.data, function(i, gist){
                        alert('hola');
                    });*/
                });
	
	
	/*
	$.ajax({
		type: 'GET',
		url: 'https://www.google.cl',
		success: function(response) {
			alert(response);
		}
		}).fail( function( jqXHR, textStatus, errorThrown ) {
		  if (jqXHR.status === 0) {
		    alert('Not connect: Verify Network.');
		  } else if (jqXHR.status == 404) {
		    alert('Requested page not found [404]');
		  } else if (jqXHR.status == 500) {
		    alert('Internal Server Error [500].');
		  } else if (textStatus === 'parsererror') {
		    alert('Requested JSON parse failed.');
		  } else if (textStatus === 'timeout') {
		    alert('Time out error.');
		  } else if (textStatus === 'abort') {
		    alert('Ajax request aborted.');
		  } else {
		    alert('Uncaught Error: ' + jqXHR.responseText);
		  }
	});;   */
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
		
		//dynamicallyLoadScript2('https://code.jquery.com/jquery-1.11.0.min.js');
		dynamicallyLoadScript('https://code.jquery.com/jquery-1.11.0.min.js', myPrettyCode);
		
		//xhr.overrideMimeType("application/json");
		var tmpURL = url;
		//tmpURL = tmpURL +"?IDNEGOCIOA="+encodeURIComponent(idnegocio)
		var tmpfilter = encodeURIComponent("[IDNEGOCIO], "+ idnegocio)
		var filter = "Ask(Any(" + tmpfilter + "))"
		tmpURL = tmpURL + "?filter=" + filter
		//alert(tmpURL)
		
		
		
		alert('antes get');
		xhr.open('GET', tmpURL, false);
		//alert('despues get');
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader('Authorization', 'Bearer ' + token);
		xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://bcm.belltech.la');
		
		alert('2')
		xhr.send( null );
		alert('3')	
		//return xmlHttp.responseText;
		
		
        } catch(err) {
            alert(err.description);
        }
	
    


	
  alert('done')
}

