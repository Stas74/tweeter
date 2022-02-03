/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


$(() => {

  $("#error").hide()
  // loadTweets()
 
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const error = (message) => {
    $("#error").text(message);
      $("#error").show();
  }


  const renderTweets = function(tweets) {
    // loops through tweets
    // $('#container-tweets').empty();
    console.log("tweets", tweets)
    for (const tweet of tweets) {
      console.log("tweet", tweet)
      // calls createTweetElement for each tweet
      let $tweetElement = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#container-tweets').prepend($tweetElement); // move last tweet on top
    }
    
    
    // takes return value and appends it to the tweets container
  }

  const createTweetElement = (tweet) => {
    console.log("inside function")
    let $tweet = $(`<article>
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
   </article>`)
      
    return $tweet
  };

  $('#add-tweet').on('submit', function (event) {
    // prevent the default behaviour of the form (making a GET request to the current page)
    console.log('form has submitted');
    event.preventDefault();
    $("#error").hide() // hide error
  
    console.log( $( this ).serialize() );

    //const safeHTML = `<p>${escape(this)}</p>`;
    $("<div>").text(this); // other check text from user

    const data = $(this).serialize();
    

    console.log('data', data);
    if (data === "text=") {
      error("Can not be empty!");      
      return
    } else if (data.length > 145) {
      error("Tweet is too long!");      
      return
    }

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    }).then((success) => {
      console.log("Hello", success);      

      $('#tweet-text').val('');
      loadTweets();
      
   });
  });
  

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET'
   }).then((success) => {
              

    // $('#container-tweets').empty();

    renderTweets(success);
 });
  };

  loadTweets();  
 
  
});




// $(document).ready(function() {
//   console.log('Client.js check');
//   $.getJSON("/server/data-files/initial-tweets.json", function(data){
//     console.log("data", data)
//   }) 

// });

// const $tweet = $(`<article class="tweet">Hello world</article>`);

// Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $('#container-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
