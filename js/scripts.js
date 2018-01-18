$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#pigLatin").val();
    //console.log(typeof userInput);
    //console.log(userInput.includes("4"));
    //test to see if user input is a number
    if (/[0-9]/.test(parseInt(userInput))) {
      alert(userInput);
    }
    //tests to see if user input is a vowel and if length is 1 then applies rule
    if (userInput.length === 1 && /[aeiou]/.test(userInput)){
      alert(userInput + "ay");
    }
    //tests to see if user input length is >1 and is a vowel and applies rule
    if (/[aeiou]/.test(userInput[0]) && userInput.length > 1) {
      alert(userInput + "way");
    }
    //Tests to see if word begins with single consonant and applies rule
    if(/[^aeiou]/.test(userInput[0]) && /[aeiou]/.test(userInput[1])){
      alert(userInput.slice(1, ) + userInput[0]+ "ay");
    }

  });
});
