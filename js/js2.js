$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#pigLatin").val();
    //console.log(typeof userInput);
    //console.log(userInput.includes("4"));
    //test to see if user input is a number

  });
});

function pigLatinTranslate(text){
  if (/[0-9]/.test(text)) {
    return text;
  }
  //tests to see if user input is a vowel and if length is 1 then applies rule
  if (userInput.length === 1 && /[aeiou]/.test(userInput)){
    return (userInput + "ay");
  }
  //tests to see if user input length is >1 and is a vowel and applies rule
  if (/[aeiou]/.test(userInput[0]) && userInput.length > 1) {
    return(userInput + "way");
  }
  //Tests to see if word begins with single consonant and applies rule
  if (/[^aeiou]/.test(userInput[0]) && /[aeiou]/.test(userInput[1])){
    return((userInput.slice(1, ) + userInput[0]+ "ay"));
  }
  //tests to see if a word starts with multiple consonants
  if (/[^aeiou]/.test(userInput[0]) && /[^aeiou]/.test(userInput[1]) && /[^0-9]/.test(userInput[0])) {
    for (var i = 0; /[^aeiou]/.test(userInput[i]) && userInput.length <= i; i++) {
      console.log(userInput.length);
    }
    return((userInput.slice(i, ) + userInput.slice(0, i) + "ay"));
  }

  if (/[^aeiou]/.test(userInput[0]) && /[^aeio]/.test(userInput[1]) && /[^0-9]/.test(userInput[0])) {
    for (var i = 0; /[^aeio]/.test(userInput[i])&& userInput.length <= i; i++) {
    }
    return(userInput.slice(i, ) + userInput.slice(0, i) + "ay");
  }



}
