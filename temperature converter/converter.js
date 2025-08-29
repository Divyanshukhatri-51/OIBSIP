const btn = document.getElementById('btn');
function converter() {
    const input = parseFloat(document.getElementById('input').value);
    const para = document.getElementById('value');
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    if(isNaN(input)){
        para.innerText = "Enter valid number value"
        return
    }
    let temp
    if(from == to) {
        temp = input
        para.innerText = `Converted Temperature is ${temp} ${to[0].toUpperCase()}`
    }
    else if(from == "celsius") {
        if(to == "farenheit") temp = (input * 9/5) + 32
        if(to == "kelvin") (temp = input + 273.15).toFixed(2)
        para.innerText = `Converted Temperature is ${temp} ${to[0].toUpperCase()}`
        // console.log(input)
    }
    else if(from == "farenheit") {
        if(to == "celsius") temp = (input - 32) * 9/5
        if(to == "kelvin") (temp = (input - 32) * 5/9 + 273.15).toFixed(2)
        para.innerText = `Temperature is ${temp} ${to[0].toUpperCase()}`
        console.log(input)
    }
    else if(from == "kelvin") {
        if(to == "celsius") (temp = input - 273.15).toFixed(2)
        if(to == "farenheit") temp = ((input - 273.15) * 9/5 + 32).toFixed(2)
        para.innerText = `Temperature is ${temp} ${to[0].toUpperCase()}`
        console.log(input)
    }
    
}

btn.addEventListener('click', () => {
    // alert("enter value")
    converter()
})