var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/gungan.json";

function getTranslationURL(input) {
return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
  console.log ("error occured", error);
  alert("OH! OOH! server is busy! Try after sometime.")
}


function clickHandler(){
var inputText = txtInput.value; //taking input

//calling server for processing
fetch(getTranslationURL(inputText))
.then(response=> response.json())
.then(json =>
  {
   var translatedText = json.contents.translated;
   if(!translatedText){
    alert("There is no text to Translate")
   }
   outputDiv.innerText = translatedText; //output
  })
  .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);