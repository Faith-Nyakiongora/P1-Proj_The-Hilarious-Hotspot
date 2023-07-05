fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        let jokes = document.getElementById('joke');
        jokes.innerHTML = jokeText;
    }) 

// Event listeners for like, dislike, and refresh buttons
document.getElementById("like-button").addEventListener("click", function() {
    console.log("Liked!");
});

document.getElementById("dislike-button").addEventListener("click", function() {
    console.log("Disliked - Not Funny!");
});