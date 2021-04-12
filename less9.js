let activeBtns = document.querySelectorAll('.active_btn')
let equally = document.querySelector('.equally')
let clearBtn = document.querySelector('.clear')

equally.addEventListener('click', function(){
    let input = document.querySelector('input')
    input.value = eval(input.value)
})

clearBtn.addEventListener('click', function(){
    let input = document.querySelector('input')
    input.value = ''
})

activeBtns.forEach(button => {
    button.addEventListener('click', function(){
        let input = document.querySelector('input')
        input.value = input.value+button.value
    })
})