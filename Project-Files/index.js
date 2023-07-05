function fetchData() {
  fetch('https://icanhazdadjoke.com/slack')
    .then(response => {response.json()
    return response.json();
    })
    .then(jokeData => {
        console.log(data.jokeData)
    }) 
}

// Event listeners for like, dislike, and refresh buttons
document.getElementById("like-button").addEventListener("click", function() {
    console.log("Liked!");
});

document.getElementById("dislike-button").addEventListener("click", function() {
    console.log("Disliked - Not Funny!");
});