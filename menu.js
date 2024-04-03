/Galatians 5:22-23 But the spirit produces love, joy, peace, patience, kindness, goodness, faithfulness, humility and self control. Against such things there is no law./

const video = document.getElementById("background");
const homepage = document.getElementById("home");
const quizButton = document.getElementById("quiz-btn");
const leaderboardButton = document.getElementById("leaderboard-btn");
const optionsButton = document.getElementById("options-btn");
const introText = document.querySelector("span","h1");
const ballAnimation = document.getElementById("balls");
const leaderboard = document.getElementById("leaderboard");
const options = document.getElementById("options");
const leaderboardBackButton = document.getElementById("leaderboard-back-btn");
const optionsBackButton = document.getElementById("options-back-btn");
const game = document.getElementById("game");
const learn = document.getElementById("learn");
const learnButton = document.getElementById("learn-btn");
const learnBackButton = document.getElementById("learn-back-button");
const edVid1 = document.getElementById("vid1");
const edVid2 = document.getElementById("vid2");
const resetScoresBtn = document.getElementById("reset");




//To delay and play newpage
const newPage = () => {
setTimeout(url, 1000);
}
const url = () => {
window.open("quiz.html", "_self");
};
quizButton.addEventListener("click", newPage);

//Opening homepage utilities
const show = (asset) =>{
  asset.classList.remove("hidden");
}
leaderboardButton.addEventListener("click", function() {show(leaderboard)});
optionsButton.addEventListener("click", function() {show(options)});
learnButton.addEventListener("click", function() {show(learn)});


//To close utilities
const hide = (asset) => {
asset.classList.add("hidden");
};
leaderboardBackButton.addEventListener("click", function() {hide(leaderboard)});
optionsBackButton.addEventListener("click", function() {hide(options)});
learnBackButton.addEventListener("click", function() {hide(learn)});

//Options
//mute
const backgroundSong = document.getElementById("background-song")
const muteButton = document.getElementById("mute-btn");
const mute = () => {
if (backgroundSong.muted === false) {
backgroundSong.muted = true;
muteButton.innerHTML = "Party time";
} else {
  backgroundSong.muted = false;
  muteButton.innerHTML = "Silence";
}
};
muteButton.addEventListener("click", mute);

//mute on video play

edVid1.addEventListener("mouseover", () => {
backgroundSong.muted = true;
});
edVid1.addEventListener("mouseleave", () => {
backgroundSong.muted = false;
});
edVid2.addEventListener("mouseover", () => {
backgroundSong.muted = true;
});
edVid2.addEventListener("mouseleave", () => {
backgroundSong.muted = false;
});

resetScoresBtn.addEventListener("click" , () => {
  localStorage.clear();
});

for (let i = 0; i < localStorage.length; i++) {
const key = localStorage.key(i);
const value = localStorage.getItem(key);
const li = document.createElement('li');
li.textContent = `${key}: ${value}`;
leaderboard.appendChild(li);
}


