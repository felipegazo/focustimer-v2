import * as sounds from "./sounds.js"
import state from "./state.js"
import * as timer from "./timer.js"

export function play() {
    state.isRunning = true
    const play = document.querySelector(".ph-play")
    const pause = document.querySelector(".ph-pause")
        play.classList.add('hide')
        pause.classList.remove('hide')
        
    timer.countdown()
}


export function pause() {
    state.isRunning = false
    const play = document.querySelector(".ph-play")
    const pause = document.querySelector(".ph-pause")
        pause.classList.add('hide')
        play.classList.remove('hide')
}

export function stop() {
    state.isRunning = false
    const play = document.querySelector(".ph-play")
    const pause = document.querySelector(".ph-pause")
        pause.classList.add('hide')
        play.classList.remove('hide')
    timer.updateDisplay(state.minutes = 0, state.seconds = 0)
    return
}

export function plus5() {
    if(state.minutes < 60) {    
    timer.updateDisplay(state.minutes += 5, state.seconds)
    }
}

export function minus5() {
    if(state.minutes > 0) {  
    timer.updateDisplay(state.minutes -= 5, state.seconds)
    }
}

export function tree() {
    const tree = document.querySelector(".ph-tree")
    if(state.isMute) {
        tree.classList.add('clicked')
        state.isMute = false
        sounds.forest.play()
    } else {
        state.isMute = true
        tree.classList.remove('clicked')
        sounds.forest.pause()
    }
}

export function rain() {
    const rain = document.querySelector(".ph-cloud-rain")
    if(state.isMute) {
        state.isMute = false
        rain.classList.add('clicked')
        sounds.raining.play()
    } else {
        state.isMute = true
        rain.classList.remove('clicked')
        sounds.raining.pause()
    }
}

export function coffee() {
    const coffee = document.querySelector(".ph-coffee")
    if(state.isMute) {
        coffee.classList.add('clicked')
        state.isMute = false
        sounds.coffee.play()
    } else {
        state.isMute = true
        coffee.classList.remove('clicked')
        sounds.coffee.pause()
    }
}

export function campfire() {
    const tree = document.querySelector(".ph-campfire")
    if(state.isMute) {
        tree.classList.add('clicked')
        state.isMute = false
        sounds.campfire.play()
    } else {
        state.isMute = true
        tree.classList.remove('clicked')
        sounds.campfire.pause()
    }

}
