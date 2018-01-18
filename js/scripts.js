function wordArray(text) {
  return text.split(" ");
}

function punctuationHandle(textArray) {
  var punctuatedArray = textArray.map(function(word) {

    if (word.includes(".")) {
      var index = word.indexOf(".")
      return(word.slice(0,index) + word.slice(index+1, ) + ".");
    } else if (word.includes(",")) {
      var index = word.indexOf(",")
      return(word.slice(0,index) + word.slice(index+1, ) + ",");
    } else {
      return(word);
    }

  });
  debugger;
  return punctuatedArray;
};

function pigLatinTranslate(text){
  var words = wordArray(text);
  var translatedWords = words.map(function(word){
     return(singleWordTranslate(word));
   });
   translatedWords = punctuationHandle(translatedWords);
   return translatedWords.join(" ");
}

function singleWordTranslate(text){
  if (/[0-9]/.test(text)) {
    return text + " is a number. We need a word, my friend.";
  }
  //tests to see if user input is a vowel and if length is 1 then applies rule
  if (text.length === 1 && /[aeiou]/.test(text)){
    return (text + "ay");
  }
  //tests to see if user input length is >1 and is a vowel and applies rule
  if (/[aeiou]/.test(text[0]) && text.length > 1) {
    return(text + "way");
  }
  //tests to see if a word starts with qu
  if (/[^aeiou]/.test(text[0]) && /[^aeio]/.test(text[1]) && /[^0-9]/.test(text[0])) {
    for (var i = 0; /[^aeioy]/.test(text[i]); i++) {
    }
    return(text.slice(i, ) + text.slice(0, i) + "ay");
  }
  //Tests to see if word begins with single consonant and applies rule
  if (/[^aeiou]/.test(text[0]) && /[aeiou]/.test(text[1])){
    return(text.slice(1, ) + text[0]+ "ay");
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
    $(".resultWell").show();
    $("#result").text(pigLatinTranslate(userInput));


  });
});
