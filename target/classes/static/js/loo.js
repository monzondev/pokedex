document.getElementById("login").onsubmit = function(e){
	e.preventDefault();
	var usuario = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	console.log(pass);
	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    console.log(this.responseText);
	    var login = JSON.parse(this.responseText);
	    console.log(login);
	    if(login.id== 0){
	    	alert("Usuario o contraseña incorrecta");
	    }else{
	    	alert("Logiado");
	    	var date = new Date();
	         date.setTime(date.getTime() + (60 * 1000));
	         var expires = "; expires=" + date.toGMTString();
	         document.cookie = "usuario=" + [login.id, login.usuario] + expires;
	         console.log(document.cookie);
	    }
	    }
	  };
	  xhttp.open("POST", "/loginPost");
	  xhttp.setRequestHeader("Content-Type", "application/json");
	  xhttp.setRequestHeader("Accept", "application/json");
	  xhttp.send(JSON.stringify({"id": 0, "usuario": usuario, "pass": pass}));
	  	}