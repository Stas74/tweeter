/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(() => {

  $("#error").hide();

  const error = (message) => {
    $("#error").text(message);
    $("#error").show();
  };

  const renderTweets = function(tweets) {
    $("#container-tweets").html("");
    for (const tweet of tweets) {
      let $tweetElement = createTweetElement(tweet);
      $('#container-tweets').prepend($tweetElement); // move sended tweet on top
    }
  };

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((success) => {
      renderTweets(success);
    });
  };
  

  const createTweetElement = (tweet) => {
    let $tweet = $(
      `<article id="article">
        <header>
          <div class="tweet-header">
            <div class="avatar">
            <img width="70px" height="70px" alt="profile img" src="${tweet.user.avatars}"></img>
            <p>${tweet.user.name}</p>
            </div>
          <div>                
            <p>${tweet.user.handle}</p>
          </div>
        </header>
        ${tweet.content.text}
        <footer class="tweet-footer">                
          <div class="timeago">
            <p>${timeago.format(tweet.created_at)}</p>
          </div>
          <div class="footer-icons">
            <p><i class="fa-solid fa-flag"></i></p>
            <p><i class="fa-solid fa-retweet"></i></p>
            <p><i class="fa-solid fa-heart"></i></p>
          </div>
        </footer>
      </article>`
    );
    return $tweet;
  };

  $('#add-tweet').on('submit', function(event) {
    event.preventDefault();
    $("#error").hide(); // hide error

    $("<div>").text(this); // check text from user

    const data = $(this).serialize();
    
    const counter = $("#counter");

    if (data === "text=") {
      error("Sorry! Can not be empty!");      
    } else if (counter.val() < 0) {
      error("Tweet is too long!");      
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: data
      }).then(() => {
        $('#tweet-text').val('');
        counter.val('140');
        loadTweets();
      });
    }
  });
  loadTweets();
});