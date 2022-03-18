const spanTime = document.querySelector('.time span')
const spanText = document.querySelector('.text span')

function Clock() {
    const time = new Date()
    const hours = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    spanTime.innerText = `${hours} : ${minute} : ${second}`
    setTimeout(Clock, 1000)
    if(hours >= 0 && hours < 12) {
        spanText.innerText = 'Chào buổi sáng'
    } else if (hours >= 12 && hours < 17) {
        spanText.style.fontSize = '28px'
        spanText.innerText = 'Chào buổi chiều'
    } else if(hours >= 17 && hours < 23) {
        spanText.style.fontSize = '32px'
        spanText.innerText = 'Chào buổi tối'
    }
}
Clock()

setInterval(() => {
    spanText.classList.toggle('active')
}, 800)