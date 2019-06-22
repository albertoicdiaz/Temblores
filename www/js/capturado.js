function showConfirm(msj) 
{
	//alert(funcion);
	navigator.notification.confirm(
	    msj, // message
	     twitter,            // callback to invoke with index of button pressed
	    '',           // title
	    ['Ok','Cancelar']         // buttonLabels
	);
}//fin function.

function twitter(buttonIndex)
{
	if(buttonIndex==1)
	{
		event.preventDefault();
		window.open('https://twitter.com/cfloress', '_system', 'location=no');
	}
}

function mensaje(msj)
{
	//alert('Puedes Deslizar hacia los costados y pasar a las demás Secciones.');
    navigator.notification.alert(
        msj,  // message
        'mensaje App',            // title
        'mensaje App'                  // buttonName
    );
    
}//fin function mensaje.
 	
function scanCode()
{	
	//try{	
	//var datos='';
	//$('#a_iframe').click();
	//$('#a').trigger("click");
	//mostrarIframe();
	//capturado('15055858-1');//busca el rut en bd del capturado si existe...
	cordova.plugins.barcodeScanner.scan(
      function (result) {
      	//var resultado='';
      	var rut='';
      	//var detCapturado='';
      	if(result.cancelled==true)
      		mensaje("Captura Cancelada.");
          //resultado="We got a barcode\n" +"Result: " + result.text + "\n" +"Format: " + result.format + "\n" +"Cancelled: " + result.cancelled;
          rut=result.text;
          mensaje(rut);//busca el rut en bd del capturado si existe...
          //showConfirm(rut);
          //myOpenPopup(datos);//abre popup con datos capturados.
           //document.getElementById("pCodigo").InnerHTML=rut;
            var p1 = document.createElement("p");
			p1.innerHTML = rut;
		   	document.getElementById('pCodigo').appendChild(p1);
     }, 
      function (error) {
          mensaje("Captura Fallida: " + error);
      }
   );
   /*}//fin try 
   catch (e) 
	{
      console.log(e);
      alert(e);
	}//fin catch*/
}//fin function