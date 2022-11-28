let money = document.querySelectorAll('.money')
let money1 = document.querySelectorAll('.money1')
let p = document.querySelector('.p')
let p1 = document.querySelector('.p1')
let input = document.querySelector('.input')
let input1 = document.querySelector('.input1')
let first = 'RUB'
let second = 'USD'
getCurrency('https://api.exchangerate.host/latest')

money.forEach(item=>{
    item.addEventListener('click',(e)=>{
        deleteClass()
        e.target.classList.add('change')
        first = e.target.innerText
        getCurrency('https://api.exchangerate.host/latest')

    })
})

function deleteClass(){
    money.forEach(item=>{
        item.classList.remove('change')
    })
}

money1.forEach(item=>{
    item.addEventListener('click',(e)=>{
        deleteClass1()
        e.target.classList.add('change')
        second = e.target.innerText
        getCurrency('https://api.exchangerate.host/latest')
    })
})

function deleteClass1(){
    money1.forEach(item=>{
        item.classList.remove('change')
    })
}

async function getCurrency(url){
    let data = await fetch(`${url}?base=${first}&symbols=${second}`)
    let dataConvert = await data.json()
    p.innerText = `1 ${first} = ${dataConvert.rates[second]} ${second}`
    input1.value = input.value*dataConvert.rates[second]

    let data1 = await fetch(`${url}?base=${second}&symbols=${first}`)
    let dataConvert1 = await data1.json()
    p1.innerText = `1 ${second} = ${dataConvert1.rates[first]} ${first}`
}

let navbar = document.querySelector('.navbar')

navbar.addEventListener('mousemove',()=>{
    navbar.classList.add('new-navbar')
})

navbar.addEventListener('mouseleave',()=>{
    navbar.classList.remove('new-navbar')
})