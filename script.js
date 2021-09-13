const tombol = document.querySelector(".container-tombol");
const layar = document.querySelector("#layar");
let resetLayar = false;
let bolehHitung = false;
let tmpVal = '';
let operator = '';

tombol.addEventListener("click",function(e){
    
    let tombolCLick = e.target;
    let nilaiTombol = tombolCLick.innerText;

    //"INI ADALAH STRING " + INIVARIABEL + "STRING LAGI"
    //"INI ADALAH STRING + INIFUNCTION()"
    //VARIABEL + INIFUNCTION()

    if(nilaiTombol == "C"){
        layar.value = "";
    }else if(nilaiTombol == "<"){
        layar.value = layar.value.slice(0, -1);
    }else if(nilaiTombol == "="){
        if(bolehHitung == true){
            layar.value = eval(tmpVal + operator + layar.value)
            bolehHitung = false;
        }
    }else if(tombolCLick.classList.contains('operator')){
        if(bolehHitung == true){
            layar.value = eval(tmpVal + operator + layar.value)
            bolehHitung = false;
        }
        
        tmpVal = layar.value;
        operator = nilaiTombol;
        
        resetLayar = true;

    }else{
        if(resetLayar == true){
            layar.value = nilaiTombol;
            resetLayar = false;
            bolehHitung = true;
        }else{
            layar.value = layar.value + nilaiTombol;
        }
    }
});


