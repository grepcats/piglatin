$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#pigLatin").val();
    //console.log(typeof userInput);
    //console.log(userInput.includes("4"));
    if (/[0-9]/.test(parseInt(userInput))) {
      alert(userInput);
    } else {
      alert("hammertime");
    }

  });
});
