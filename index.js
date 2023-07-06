fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        let jokes = document.getElementById('joke');
        jokes.innerHTML = jokeText;
    }) 
    
    .catch(error => {
        console.error("Error fetching joke:", error);
    });

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