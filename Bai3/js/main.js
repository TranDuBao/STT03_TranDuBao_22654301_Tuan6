window.onload = function() {
    let index = 1
    let interval
    document.querySelector(".play").onclick = function() {
        clearInterval(interval)
        let img = document.querySelector("img")
        interval = setInterval(function() {
            if(index > 10) index = 1
            img.src = `../img/b${index}.jpg`
            index += 1
        },500)
    }
    document.querySelector(".stop").onclick = function() {
        clearInterval(interval)
    }
}