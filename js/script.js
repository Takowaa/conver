const getSom = document.querySelector("#som")
const getDollar = document.querySelector("#dollar")
const convert = document.querySelector(".calc")
const resultConvert = document.querySelector(".result")



convert.addEventListener("click", ()=>{
    let result =     getSom.value / getDollar.value
    resultConvert.innerText = Math.round(parseFloat(result) *100)/100 + "$"
})