const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    console.log(randomNumber)
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
}
document.querySelector("#btn").addEventListener ('click', getColor)

getColor();