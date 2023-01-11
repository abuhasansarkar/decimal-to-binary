
const resutl = document.querySelector("#result");
const submit = document.querySelector("#submit");

function binary(e){
    e.preventDefault();
    
    let num = document.getElementById("inputNumber").value;
    
    // console.log(typeof(Number(num)));
    if(num == ""){
        alert("Please enter a number !");
    }else if(num <= 0){
        alert("Please enter a positive number !");
    }else{
        resutl.style.visibility = "visible";
    }
    // convarting

    binaryNumber = Number(num).toString(2);
    resutl.innerText= binaryNumber;
}

submit.addEventListener("click", binary);