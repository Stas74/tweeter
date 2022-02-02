console.log('Cheeeck!!!!');

$(document).ready(function() {
  // --- our code goes here ---
  console.log('Cheeeck!!!!');
  let charCount = 0;
  $("#tweet-text").on("input", function(){
    charCount = document.getElementById("tweet-text").value.length;
    console.log("charCount", charCount);   
  });
  
});
