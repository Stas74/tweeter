/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


$(() => {
  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]

  const renderTweets = function(tweets) {
    // loops through tweets
    console.log("tweets", tweets)
    for (const tweet of tweets) {
      console.log("tweet", tweet)
      // calls createTweetElement for each tweet
      let $tweetElement = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#container-tweets').append($tweetElement);
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
    // const $name = $('<avatars>').text(`${data.user.name}`); 
    // const $avatars =  $('<avatars>').text(`${data.user.avatars}`); 
    // const $handle = $('<div>').text(`${data.user.handle}`);   

    // const $header = $('<header>').addClass('header');

    // $header.append($name, $avatars, $handle)

    // const $text = $('<article>').text(`${data.content.text}`);

    // const $created_at = $('<tweet-footer>').addClass('<timeago>').text(`${data.created_at}`);  

    
    // const $data = $('<container-tweets>');

    // $data.append($header, $text, $created_at);

    
    return $tweet
  };

  $('#add-tweet').on('submit', function (event) {
    // prevent the default behaviour of the form (making a GET request to the current page)
    console.log('form has submitted');
    event.preventDefault();    

    console.log( $( this ).serialize() );

    const data = $('#add-tweet').serialize();

    console.log('data', data);

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    })
  });

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((success) => {
      console.log(success);

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
