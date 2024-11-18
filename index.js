let result1 = document.querySelector(".result1")
let result2 = document.querySelector(".result2")

function fivePercent(){
    let billValue =  document.querySelector(".bill-value").value
    let peopleIcon = document.querySelector(".people-icon").value
    result1.textContent = "$" + billValue / peopleIcon * 0.05
    result2.textContent = "$" + billValue / peopleIcon
}
function tenPercent(){
    let billValue =  document.querySelector(".bill-value").value
    let peopleIcon = document.querySelector(".people-icon").value
    result1.textContent = "$" + billValue / peopleIcon * 0.1
    result2.textContent = "$" + billValue / peopleIcon
}
function fifteenPercent(){
    let billValue =  document.querySelector(".bill-value").value
    let peopleIcon = document.querySelector(".people-icon").value
    result1.textContent = "$" + billValue / peopleIcon * 0.15
    result2.textContent = "$" + billValue / peopleIcon
}
function twentyfivePercent(){
    let billValue =  document.querySelector(".bill-value").value2   
    let peopleIcon = document.querySelector(".people-icon").value
    result1.textContent = "$" + billValue / peopleIcon * 0.2
    result2.textContent = "$" + billValue / peopleIcon
}
function fiftyPercent(){
    let billValue =  document.querySelector(".bill-value").value
    let peopleIcon = document.querySelector(".people-icon").value
    result1.textContent = "$" + billValue / peopleIcon * 0.5
    result2.textContent = "$" + billValue / peopleIcon
}
function customPercent(){
    let selectCustom = document.querySelector(".select-custom").value / 100 
    let billValue =  document.querySelector(".bill-value").value
    let peopleIcon = document.querySelector(".people-icon").value
    result1.textContent = "$" + billValue / peopleIcon * selectCustom
    result2.textContent = "$" + billValue / peopleIcon
}