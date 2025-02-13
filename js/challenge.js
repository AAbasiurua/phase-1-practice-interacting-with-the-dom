// starting counter at beginning 
let counter = 0;

// creating likes arr
let likes = [];

// pause starts at false because we want counter to auto-start
let isPaused = false; 

// this will keep track of count per counter value
let likeCounts = {}; 

// grabbing my elements
const incrementButton = document.getElementById("plus");
const decrementButton = document.getElementById("minus");
const heartButton = document.getElementById("heart");
const likeList = document.querySelector('.likes');
const pauseButton = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input"); 
const commentList = document.getElementById("list");

// we are updating the counter display
function updateCounter() {
    document.getElementById("counter").textContent = counter;
}

// show likes 
function showLikes() {
    // clears previous list 
    likeList.innerHTML = ''; 

    // looping through the likeCounts object 
    // for each CURRENT value of the counter, I'll do lines 36-38
    Object.keys(likeCounts).forEach(currentValueOfCounter => {
        const li = document.createElement('li');
        li.textContent = `${currentValueOfCounter} has been liked ${likeCounts[currentValueOfCounter]} times`;
        likeList.appendChild(li);
    })
}

const autoStart = setInterval(() => {
    if(!isPaused) {
        counter++;
        updateCounter();
    }
}, 1000);


// creating event listener for increment button
incrementButton.addEventListener('click', () => {
    if(!isPaused) {
        counter++;
        updateCounter();
    }
})

// creating event listener for decrement bttn 
decrementButton.addEventListener('click', () => {
    if(!isPaused) {
        counter--;
        updateCounter();
    }
})

// creating an event listener for the like button 
heartButton.addEventListener('click', () => {
    if(!isPaused) {

        // this adds current counter value to the likes array
        likes.push(counter);

        // this allows me to increase the like count for the current counter VALUE
        if(likeCounts[counter]) {
            likeCounts[counter]++
        } else {
            likeCounts[counter] = 1;
        }
        // show the list of likes
        showLikes();
    }
});

// this is our pause functionality
pauseButton.addEventListener('click', () => {

    // setting isPause to true
    isPaused = !isPaused;
    
    // pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    
    if(isPaused) {
        // pause button to say "Resume"
        pauseButton.textContent = "Resume"
    } else {
        // i want my pause bttn to say "Pause"
        pauseButton.textContent = "Pause"
    }
});

commentForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const commentText = commentInput.value;
    if(commentText) {
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
    }

    // this is clearing my input after submission of the old + it rendering
    commentInput.value = ''; 
})


