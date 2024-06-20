import * as sounds from "./sounds.js"

const forest = document.getElementById("tree")
const raining = document.getElementById("rain")
const campfire = document.getElementById("campfire")
const coffee = document.getElementById("coffee")

forest.addEventListener('click', () => {
    sounds.forest.play()
})