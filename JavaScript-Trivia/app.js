/*
============================================
; Title:  JavaScript Trivia
; Author: Team Commit to Master
; Date:   23 March 2019
; Description: JavaScript Trivia single page application.
;===========================================
*/
// Bio functions
function openBio() {
    document.getElementById('bio-container').style.display = "block";
    document.getElementById('home-container').style.display = "none";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('rank-container').style.display = "none";
    document.getElementById('title').style.display = "none";
    document.getElementById('jordanBio').style.display = "none";
    document.getElementById('gabrielBio').style.display = "none";
    document.getElementById('andrewBio').style.display = "none";
    document.getElementById('group-bio').style.display = "block";
};

function andrewOpen() {
    document.getElementById('group-bio').style.display = "none";
    document.getElementById('andrewBio').style.display = "block";
    document.getElementById('jordanBio').style.display = "none";
    document.getElementById('gabrielBio').style.display = "none";
};

function jordanOpen() {
    document.getElementById('group-bio').style.display = "none";
    document.getElementById('jordanBio').style.display = "block";
    document.getElementById('gabrielBio').style.display = "none";
    document.getElementById('andrewBio').style.display = "none";
};

function gabrielOpen() {
    document.getElementById('group-bio').style.display = "none";
    document.getElementById('gabrielBio').style.display = "block";
    document.getElementById('jordanBio').style.display = "none";
    document.getElementById('andrewBio').style.display = "none";
};

// Home functions
function openHome() {
    document.getElementById('home-container').style.display = "block";
    document.getElementById('rank-container').style.display = "none";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('bio-container').style.display = "none";
    document.getElementById('title').style.display = "block";
};

// Quiz functions
function openQuiz() {
    document.getElementById('quiz-container').style.display = "block";
    document.getElementById('home-container').style.display = "none";
    document.getElementById('rank-container').style.display = "none";
    document.getElementById('bio-container').style.display = "none";
    document.getElementById('title').style.display = "none";
};

// Function to set username based off user entry. If no entry default to: User1
function username() {
    var name = document.getElementById('UserName').value;
    if (name != "")
    document.getElementById('person').innerHTML = "Name: " + name;
    else
    document.getElementById('person').innerHTML = "Name: User1";
}

function startQuiz() {
    document.getElementById('q1').style.display = "block";
    document.getElementById('start-quiz').style.display = "none";
    username();
};

function preQuest1() {
    document.getElementById('q1').style.display = "block";
    document.getElementById('q2').style.display = "none";
};

function nextQuest1() {
    document.getElementById('q2').style.display = "block";
    document.getElementById('q1').style.display = "none";
};

function preQuest2() {
    document.getElementById('q2').style.display = "block";
    document.getElementById('q3').style.display = "none";
};

function nextQuest2() {
    document.getElementById('q3').style.display = "block";
    document.getElementById('q2').style.display = "none";
};

function preQuest3() {
    document.getElementById('q3').style.display = "block";
    document.getElementById('q4').style.display = "none";
};

function nextQuest3() {
    document.getElementById('q4').style.display = "block";
    document.getElementById('q3').style.display = "none";
};

function preQuest4() {
    document.getElementById('q4').style.display = "block";
    document.getElementById('q5').style.display = "none";
};

function nextQuest4() {
    document.getElementById('q5').style.display = "block";
    document.getElementById('q4').style.display = "none";
};

function preQuest5() {
    document.getElementById('q5').style.display = "block";
    document.getElementById('q6').style.display = "none";
};

function nextQuest5() {
    document.getElementById('q6').style.display = "block";
    document.getElementById('q5').style.display = "none";
};

function preQuest6() {
    document.getElementById('q6').style.display = "block";
    document.getElementById('q7').style.display = "none";
};

function nextQuest6() {
    document.getElementById('q7').style.display = "block";
    document.getElementById('q6').style.display = "none";
};

function preQuest7() {
    document.getElementById('q7').style.display = "block";
    document.getElementById('q8').style.display = "none";
};

function nextQuest7() {
    document.getElementById('q8').style.display = "block";
    document.getElementById('q7').style.display = "none";
};

function preQuest8() {
    document.getElementById('q8').style.display = "block";
    document.getElementById('q9').style.display = "none";
};

function nextQuest8() {
    document.getElementById('q9').style.display = "block";
    document.getElementById('q8').style.display = "none";
};

function preQuest9() {
    document.getElementById('q9').style.display = "block";
    document.getElementById('q10').style.display = "none";
};

function nextQuest9() {
    document.getElementById('q10').style.display = "block";
    document.getElementById('q9').style.display = "none";
};



// Rank functions
function openRank() {
    document.getElementById('rank-container').style.display = "block";
    document.getElementById('home-container').style.display = "none";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('bio-container').style.display = "none";
    document.getElementById('title').style.display = "none";
    // Score function: adds up total score and displays to scoreDisplay. Used != to handle "No selection made. Computes rank from score."
    function myScoreRank() {
        var total = 0;
        if (this.checkAnswer1() != "c") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer2() != "c") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer3() != "b") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer4() != "a") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer5() != "a") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer6() != "b") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer7() != "b") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer8() != "d") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer9() != "c") {
        }
        else {
            var total = total + 1;
        }
        if (this.checkAnswer10() != "a") {
        }
        else {
            var total = total + 1;
        }
        var total = total * 10;
        document.getElementById('scoreDisplay').innerHTML = "Score: " + total + "%";

        // compute ranking
        var ranking = total / 10;
        if (ranking < 6) {
            document.getElementById('rankDisplay').innerHTML = "Rank: Beginner";  //(Less than 6 correct answers)
        }
        else if (ranking < 9 && ranking > 5) {
            document.getElementById('rankDisplay').innerHTML = "Rank: Novice";  //(6-8 correct answers)
        }
        else if (ranking > 8) {
            document.getElementById('rankDisplay').innerHTML = "Rank: Expert";  //(8-10 correct answers)
        }
        else {
        document.getElementById('rankDisplay').innerHTML = "Rank: " + ranking;
        }
    };
    myScoreRank();
};
