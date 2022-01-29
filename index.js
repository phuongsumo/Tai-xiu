const dice1 = document.querySelector('.dice_wrap:nth-child(1) .dice');
const dice2 = document.querySelector('.dice_wrap:nth-child(2) .dice');
const dice3 = document.querySelector('.dice_wrap:nth-child(3) .dice');
const button = document.querySelector('.rotate_btn');
const historyBox = document.querySelector('.history');
const history = [];

const handleClick = () => {
    const point1 = Math.floor(Math.random() * 6 + 1);
    const point2 = Math.floor(Math.random() * 6 + 1);
    const point3 = Math.floor(Math.random() * 6 + 1);
    dice1.classList.add('active');
    dice2.classList.add('active');
    dice3.classList.add('active');
    document.querySelector('.rotate_btn').classList.add('disabled');
    setTimeout(() => {
        switch (point1) {
            case 1:
                dice1.style.transform = 'rotateX(0) rotateY(0)'
                break;
            case 2:
                dice1.style = 'transform: rotateX(-90deg)'
                break;
            case 3:
                dice1.style = 'transform: rotateY(-90deg)'
                break;
            case 4:
                dice1.style = 'transform: rotateY(90deg)'
                break;
            case 5:
                dice1.style = 'transform: rotateX(90deg)'
                break;
            case 6:
                dice1.style = 'transform: rotateY(180deg)'
                break;
            default:
                break;
        }
        switch (point2) {
            case 1:
                dice2.style.transform = 'rotateX(0) rotateY(0)'
                break;
            case 2:
                dice2.style = 'transform: rotateX(-90deg)'
                break;
            case 3:
                dice2.style = 'transform: rotateY(-90deg)'
                break;
            case 4:
                dice2.style = 'transform: rotateY(90deg)'
                break;
            case 5:
                dice2.style = 'transform: rotateX(90deg)'
                break;
            case 6:
                dice2.style = 'transform: rotateY(180deg)'
                break;
            default:
                break;
        }
        switch (point3) {
            case 1:
                dice3.style.transform = 'rotateX(0) rotateY(0)'
                break;
            case 2:
                dice3.style = 'transform: rotateX(-90deg)'
                break;
            case 3:
                dice3.style = 'transform: rotateY(-90deg)'
                break;
            case 4:
                dice3.style = 'transform: rotateY(90deg)'
                break;
            case 5:
                dice3.style = 'transform: rotateX(90deg)'
                break;
            case 6:
                dice3.style = 'transform: rotateY(180deg)'
                break;
            default:
                break;
        }

        if (point1 === point2 && point1 === point3) {
            document.querySelector('.point').innerText = `${point1 + point2 + point3}: Đồng hoa`;
            history.push(`${point1 + point2 + point3}: Đồng hoa`);
        } else if ((point1 + point2 + point3) >= 11) {
            document.querySelector('.point').innerText = `${point1 + point2 + point3}: Tài`;
            history.push(`${point1 + point2 + point3}: Tài`);
        } else if ((point1 + point2 + point3) <= 10) {
            document.querySelector('.point').innerText = `${point1 + point2 + point3}: Xỉu`;
            history.push(`${point1 + point2 + point3}: Xỉu`);
        }
        dice1.classList.remove('active');
        dice2.classList.remove('active');
        dice3.classList.remove('active');
        document.querySelector('.rotate_btn').classList.remove('disabled');
        const load = history.map(even => `<li class="vs-content">${even}</li>`)
        historyBox.innerHTML = `<ul class="vs-container">${load.join('')}</ul>`
    }, 3000)
}
button.onclick = handleClick;