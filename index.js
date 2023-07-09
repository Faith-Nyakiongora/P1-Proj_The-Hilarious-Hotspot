function fetchJoke() {
    fetch('https://icanhazdadjoke.com/slack')
      .then(response => response.json())
      .then(data => {
        const jokeText = data.attachments[0].text;
        const jokeElement = document.getElementById('joke');
        jokeElement.textContent = jokeText;

        fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(memeData => {
            const memeUrl = memeData.url;
            const memeContainer = document.querySelector('.img-container');
            memeContainer.innerHTML = `<img src="${memeUrl}" alt="Meme">`;
        })
        .catch(error => {
            console.error("Error fetching meme:", error);
        });
   })
   .catch(error => {
    console.error("Error fetching joke:", error);
  });
  
  }

  
  // Generate a joke on page load
  document.addEventListener("DOMContentLoaded", fetchJoke);
  
  // Event listener for the dislike button
  document.getElementById("dislike-button").addEventListener("click", fetchJoke);

// Event listeners for like, dislike, and refresh buttons
document.getElementById("like-button").addEventListener("click", function() {
    console.log("Liked!");
});

document.getElementById("dislike-button").addEventListener("click", function() {
    console.log("Disliked - Not Funny!");
});

const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit-button');

// Get the comment section element
const commentSection = document.getElementById('comment-section');

// Event listener for the submit button
submitButton.addEventListener('click', function() {
  // Get the comment text from the input field
  const commentText = commentInput.value;

  // Create a new paragraph element to display the comment
  const newComment = document.createElement('p');
  newComment.textContent = commentText;

  // Append the new comment to the comment section
  commentSection.appendChild(newComment);

  // Clear the input field
  commentInput.value = '';
})

