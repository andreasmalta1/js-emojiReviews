const starsEl = document.querySelectorAll('.fa-star')

const emojisEl = document.querySelectorAll('.far')

const colors = ['red', 'orange', 'lightblue', 'lightgreen', 'green']

updatingRating(0)

starsEl.forEach((star, index) => {
    star.addEventListener('click', () => {
        updatingRating(index)
    })
})

function updatingRating(index){
    starsEl.forEach((star, i) => {
        if (i < index + 1){
            star.classList.add('active')
        } else{
            star.classList.remove('active')
        }
    })

    emojisEl.forEach(emoji =>{
        emoji.style.transform = `translateX(-${index*50}px)`
        emoji.style.color = colors[index]
    })
}

