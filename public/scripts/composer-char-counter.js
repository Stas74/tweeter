$(document).ready(function() {
  // --- our code goes here ---
  console.log('Cheeeck!!!!');
  let charCount = 0;
  let leftCounter;
  $("#tweet-text").on("input", function(){
    charCount = document.getElementById("tweet-text").value.length;
    leftCounter = 140 - charCount;
    console.log("charCount", leftCounter); 
    document.getElementById("counter").innerHTML = leftCounter;
    if (leftCounter < 0) {
      $("#counter").css('color', 'red');      
    } else {
      $("#counter").css('color', '#545149');
    }
  });  
});
