function greet() {
    console.log(`Welcome to mastering DOM events`)
}
function printDate() {
    console.log(`The time when this event happened is: ${Date()}`)
}
const firstBtn = document.querySelector('button')
firstBtn.onclick = greet
// Mistake !! the printDate() is called on script load
// firstBtn.onmouseover = undefined
firstBtn.onmouseover = printDate() 

// Right way: assign a function, not the invocation
firstBtn.onmouseover = printDate

const logPIBtn = document.querySelector('.btn--logPI')
// TODO: not working for submit
logPIBtn.addEventListener('click', event => {
    //event.preventDefault()
    console.log(`The value of PI is : ${Math.PI}`)
})

// NOTE: use addEventListener() to associate more than one one listener to the same event
const multipleBtn = document.querySelector('.btn--multiple-events')
multipleBtn.addEventListener('click', function(event) {
    console.log(`This is the first listener on the button. More to come`)
})

multipleBtn.addEventListener('click', function(event) {
    alert('This is the second listener event for the same click event!!')
})

multipleBtn.addEventListener('mouseover', function (event) {
    multipleBtn.innerText = 'STOP HOVERING ON ME!!'
})

multipleBtn.addEventListener('mouseout', function(event){
    multipleBtn.innerText = 'That was a joke.. Click me again!!'
})
// NOT possible !! 
const multipleBtnOnClick = document.querySelector('.btn--multiple-events-onclick')
multipleBtnOnClick.onclick = function () {
    console.log('This is the first lsitener on the firstr= button. But you will never see this message!!')
}

multipleBtnOnClick.onclick = function () {
    alert('You cannot regeister more than one event without using addEventListener')
}