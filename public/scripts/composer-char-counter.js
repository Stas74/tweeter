$(document).ready(function() {
  // --- our code goes here ---
  
  let charCount = 0;
  let leftCounter;
  $("#tweet-text").on("input", function() {
    charCount = document.getElementById("tweet-text").value.length;
    $(this).height(0);
    $(this).height(this.scrollHeight);
    leftCounter = 140 - charCount;
    document.getElementById("counter").innerHTML = leftCounter;
    if (leftCounter < 0) {
      $("#counter").css('color', 'red');
    } else {
      $("#counter").css('color', '#545149');
    }
  });
});
