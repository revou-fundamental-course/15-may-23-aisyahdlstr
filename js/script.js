
function hitungluas(){
    var luas='';
    var id = document.getElementById("sisi-luas").value;
    if (id==""){
        alert("Silahkan inputkan nilai")
    } else {
        luas = parseFloat(id) * parseFloat(id);
        document.getElementById("rumus-luas").innerHTML = 'L = S X S';
        var perhitungan = document.getElementById("perhitungan-luas").innerHTML ='L =' + '<span>'+ id + '</span>'+ 'X'+'<span>'+ id + '</span>';
        document.getElementById("output-luas").innerHTML ='L = '+'<span>'+ luas+'</span>';
    }

    
    // luas = id * id;
    
}

function hitungkeliling(){
    var keliling='';
    var id = document.getElementById("sisi-keliling").value;
    if (id==""){
        alert("Silahkan inputkan nilai")
    } else{
        keliling = 4 * parseFloat(id);
        document.getElementById("rumus-keliling").innerHTML = 'K = 4 x S';
        var perhitungan = document.getElementById("perhitungan-keliling").innerHTML ='K =' + '<span>'+ 4 + '</span>'+ 'X'+'<span>'+ id + '</span>';
        document.getElementById("output-keliling").innerHTML ='K = '+'<span>'+ keliling+'</span>';
    }
    
}

function resetluas(){
    document.getElementsByid(formluas).reset();
}
function resetkeliling(){
    document.getElementsByid(formkeliling).reset();
}