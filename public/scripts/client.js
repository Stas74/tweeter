/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


$(() => {

const createTweetElement = (data) => {
  console.log("inside function")
  const $data = $(`<article>
  <header>
    <div class="tweet-header">
      <div class="avatar">
      <img width="70px" height="70px" alt="profile img" src="${data.user.avatars}"></img>
      <p>${data.user.name}</p>
      </div>
    <div>                
      <p>${data.user.handle}</p>
    </div>
  </header>
  ${data.content.text}
  <footer class="tweet-footer">                
    <div class="timeago">
      <p>${data.created_at}</p>
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

  
  return $data
};

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#container-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});




// $(document).ready(function() {
//   console.log('Client.js check');
//   $.getJSON("/server/data-files/initial-tweets.json", function(data){
//     console.log("data", data)
//   }) 

// });

// const $tweet = $(`<article class="tweet">Hello world</article>`);