function wordArray(text) {
  return text.split(" ");

}
function pigLatinTranslate(text){
  var words = wordArray(text);
  //alert(words);
  var translatedWords = words.map(function(word){
     return(singleWordTranslate(word));
   });
   return translatedWords;
}

function singleWordTranslate(text){
  if (/[0-9]/.test(text)) {
    return text;
  }
  //tests to see if user input is a vowel and if length is 1 then applies rule
  if (text.length === 1 && /[aeiou]/.test(text)){
    return ("1" + text + "ay");
  }
  //tests to see if user input length is >1 and is a vowel and applies rule
  if (/[aeiou]/.test(text[0]) && text.length > 1) {
    return("2" + text + "way");
  }
  //tests to see if a word starts with qu
  if (/[^aeiou]/.test(text[0]) && /[^aeio]/.test(text[1]) && /[^0-9]/.test(text[0])) {
    for (var i = 0; /[^aeio]/.test(text[i]); i++) {
    }
    return("3" + text.slice(i, ) + text.slice(0, i) + "ay");
  }
  //Tests to see if word begins with single consonant and applies rule
  if (/[^aeiou]/.test(text[0]) && /[aeiou]/.test(text[1])){
    return("4" + text.slice(1, ) + text[0]+ "ay");
  }
  //tests to see if a word starts with multiple consonants
  if (/[^aeiou]/.test(text[0]) && /[^aeiou]/.test(text[1]) && /[^0-9]/.test(text[0])) {
    for (var i = 0; /[^aeiou]/.test(text[i]); i++) {
    }
    console.log(i);
    return("5" + text.slice(i, ) + text.slice(0, i) + "ay");
  }


}
$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#pigLatin").val();
    wordArray(userInput);
    alert(pigLatinTranslate(userInput));


  });
});
