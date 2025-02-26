let homeScore = 0
let guestScore = 0

let homePanel = document.getElementById("home-score")
let guestPanel = document.getElementById("guest-score")

let homeFouls = 0
let homeF = document.getElementById("home-fouls")

let guestFouls = 0
let guestF = document.getElementById("guest-fouls")

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points
        homePanel.textContent = homeScore
    } else if (team === 'guest') {
        guestScore += points
        guestPanel.textContent = guestScore
    }
}

function updateFouls(team) {
    if (team === 'home') {
        homeFouls++
        homeF.textContent = homeFouls
    } else if (team === 'guest') {
        guestFouls++
        guestF.textContent = guestFouls
    }
}

document.getElementById("home1+").onclick = () => updateScore('home', 1)
document.getElementById("home2+").onclick = () => updateScore('home', 2)
document.getElementById("home3+").onclick = () => updateScore('home', 3)

document.getElementById("guest1+").onclick = () => updateScore('guest', 1)
document.getElementById("guest2+").onclick = () => updateScore('guest', 2)
document.getElementById("guest3+").onclick = () => updateScore('guest', 3)

document.getElementById("hfoul").onclick = () => updateFouls('home')
document.getElementById("gfoul").onclick = () => updateFouls('guest')