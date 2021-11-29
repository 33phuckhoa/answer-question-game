let onClick = document.getElementsByClassName('app__alphabet--main')
const button = document.querySelector('.app__alphabet')
const pressValue = document.querySelector('.app__press')
const paint = document.querySelector('.app__paint--main')
const hint = document.querySelector('.app__btn1')
const again = document.querySelector('.app__btn2')
const suggestion = document.querySelector('.app__suggestion')
const number = document.querySelector('.app__word--number')
const word = document.querySelector('.app__word')
const ctx = paint.getContext('2d')

// const ctx = getContext(paint)

let pickUp
let color
let key
let cue
const question = [
    'Which European country shares its border with the most neighbours (nine)?',
    'What is the capital city of Slovenia formerly part of the state of Yugoslavia?',
    'Which Asian country is bigger than France, Spain and Germany combined but has a population of little over two million?',
    'Hamilton is the capital of which island in the North Atlantic Ocean?',
    'Mount Vesuvius overlooks which modern Italian city?',
    'Of which country is Sofia the capital?',
    'Which republic lies partly in Europe and partly in Asia?',
    'Which stretch of water separates the Isle of Wights from mainland Britain?',
    'Which country is nicknamed ‘The Cockpit of Europe’ because of the number of battles throughout history fought on its soil?',
    'Which European capital city is divided by canals into about 90 islands joined by about 400 bridges?',
]

const response = [
    'germany',
    'ljubljana',
    'mongolia',
    'bermuda',
    'naples',
    'bulgaria',
    'turkey',
    'solent',
    'belgium',
    'amsterdam'
]
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'l', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const doIt = alphabet.map(arr => (`
    <button class="app__alphabet--main">${arr}</button>
`))

button.innerHTML = doIt


const init = () => {
}
init()


//Reset 
const playAgain = () => {
    again.addEventListener('click', () => {
        window.location.reload()
    })
}
playAgain()

//render question and request answer
const divideQuestion = (k) => {
    hint.addEventListener("click", () => {
        for(var i = 0; i < 10; i++) {
            if(suggestion.innerHTML === '') {
                suggestion.innerHTML = question[i]
                const compareQuestion = () => {
                    console.log(response[i].length)
    
                    // Value for simple array in response
                    const valueSimple = response[i].split('')
                    const count = response[i].length
                    console.log(valueSimple)
    
                    //Make value for string 
                    const char = '-'
    
                    const arr= []
    
                    while(arr.length < count) {
                        arr.push(char)
                    }
                    
                    arr.join('')
    
                    const add = arr.map((char, index) => (`
                        <div class="app__press-main">
                            <div class="app__press-block">${char}</div>
                            <div class="app__press-none">${valueSimple[index]}</div>
                        </div>
                    `))
                    
                    compareValue(add, i)
                }
                compareQuestion()
            }
        
            else if(suggestion.innerHTML === question[i]) {
                suggestion.innerHTML = ''
            }

        }
    })
}
divideQuestion()

const compareValue = (add) => {
    pressValue.innerHTML = add
    const elementPress = document.getElementsByClassName('app__press-none')
    const elementBlock = document.getElementsByClassName('app__press-block')
    let count = 10
    let str
    for(var u = 0; u < 25; u++) {
        let index = u
        onClick[u].addEventListener('click', (e) => {
            for(var k = 0; k < elementPress.length; k++) {
                str = String(elementPress[k].innerHTML)
                if(str.indexOf(e.target.innerHTML) !== -1) {
                    elementBlock[k].innerHTML = ''
                    elementBlock[k].innerHTML = e.target.innerHTML
                    callButton(index)
                    results = elementBlock[k].innerHTML
                    break
            }}
            if(str.indexOf(e.target.innerHTML)) {
                count--
                callButton(index)
                switchLives(count)
                callPaintError(count)
            }
        })
    }
}

const callButton = (pickUp) => {
    for(var i = 0; i < onClick.length; i++) {
        onClick[pickUp].style.backgroundColor = '#f0f0f0'
    }
}


const switchLives = (i) => {
    if(i > 0) {
        number.innerHTML = i
    }
    if(i === 0) {
        word.innerHTML = ''
        word.innerHTML = `<h3>Game Over</h3>`
    }
}




const callPaintError = (count) => {
    if(count === 9) {
        ctx.beginPath()
        ctx.moveTo(0, 150)
        ctx.lineTo(250, 150)
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 3
        ctx.stroke()
    }
    else if(count === 8) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.moveTo(10, 10); // Xác định điểm bắt đầu
        ctx.lineTo(10, 250); 
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
    else if(count === 7) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.moveTo(0,10); // Xác định điểm bắt đầu
        ctx.lineTo(100,10); // Xác định điểm kết thúc
        ctx.strokeStyle = 'white' 
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
    else if(count === 6) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.moveTo(100,0); // Xác định điểm bắt đầu
        ctx.lineTo(100,40); // Xác định điểm kết thúc
        ctx.strokeStyle = 'white' 
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
    else if(count === 5) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.arc(100, 50, 10, 0, 2*Math.PI)
        ctx.strokeStyle = 'white' 
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
    else if(count === 4) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.moveTo(100,150); // Xác định điểm bắt đầu
        ctx.lineTo(100,10); // Xác định điểm kết thúc
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
    else if(count === 3) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.moveTo(100,200); // Xác định điểm bắt đầu
        ctx.lineTo(250,100); // Xác định điểm kết thúc
        ctx.strokeStyle = 'white' 
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
    else if(count === 2) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.moveTo(300,200); // Xác định điểm bắt đầu
        ctx.lineTo(25,100); // Xác định điểm kết thúc
        ctx.strokeStyle = 'white' 
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
    else if(count === 1) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.moveTo(7,200); // Xác định điểm bắt đầu
        ctx.lineTo(250,100); // Xác định điểm kết thúc
        ctx.strokeStyle = 'white' 
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
      else if(count === 0) {
        ctx.beginPath(); // Khai báo vẽ đường thẳng mới
        ctx.moveTo(80,200); // Xác định điểm bắt đầu
        ctx.lineTo(250,100); // Xác định điểm kết thúc
        ctx.strokeStyle = 'white' 
        ctx.lineWidth = 3
        ctx.stroke(); 
    }
}