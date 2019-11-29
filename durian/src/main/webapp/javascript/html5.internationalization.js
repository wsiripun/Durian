window.wsabc = 10
window.normalInterval =   20000
var languages = Array.from(document.getElementsByClassName('language'));
//var languages = document.getElementsByClassName('language');
var x = 1111;
var xhttp = new XMLHttpRequest();
var langDocument = {};
languages.forEach(function(value, index){
    languages[index].addEventListener('click', function(){
        switchLanguage(this.dataset.lang);
    });
});
xhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
        langDocument = JSON.parse(this.responseText);
        processLangDocument();
    }
};
function switchLanguage(language){
    xhttp.open("GET", "i18n/" + language + ".json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function processLangDocument(){
    var tags = document.querySelectorAll('span,img,a,label,li,option,h1,h2,h3,h4,h5,h6');
    Array.from(tags).forEach(function(value, index){
        var key = value.dataset.langkey;
        if(langDocument[key]) value.innerText = langDocument[key];
    });
}



window.i18nFrance = null;
window.i18nGerman = null;
window.i18nBritain = null;

function getI18NString() {
			$.get("/pattanasin/i18n/france.json",
		        function(data,status){
		            window.i18nFrance = data;
		            console.log ("Fr=" + window.i18nFrance);
		      });
			
			$.get("/pattanasin/i18n/germany.json",
			        function(data,status){
			            window.i18nGerman = data;
			            console.log ("German=" + window.i18nGerman);
			      });
			
			$.get("/pattanasin/i18n/britain.json",
			        function(data,status){
			            window.i18nBritain = data;
			            console.log ("Britain=" + window.i18nBritain);
			            callMain();
			      });	
}

function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}
