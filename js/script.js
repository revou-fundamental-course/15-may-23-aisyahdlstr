
function hitungluas(){
    var luas='';
    var rumus = document.getElementById("rumus-luas").innerHTML = 'L = S X S';
    var id = document.getElementById("sisi-luas").value;

    var perhitungan = document.getElementById("perhitungan-luas").innerHTML ='L =' + '<span>'+ id + '</span>'+ 'X'+'<span>'+ id + '</span>';
    
    luas = id * id;
    document.getElementById("output-luas").innerHTML ='hasil = '+'<span>'+ luas+'</span>';
}

function hitungkeliling(){
    var luas='';
    var rumus = document.getElementById("rumus-keliling").innerHTML = 'K = 4 x S';
    var id = document.getElementById("sisi-keliling").value;

    var perhitungan = document.getElementById("perhitungan-keliling").innerHTML ='K =' + '<span>'+ 4 + '</span>'+ 'X'+'<span>'+ id + '</span>';
    
    luas = 4 * id;
    document.getElementById("output-keliling").innerHTML ='hasil = '+'<span>'+ luas+'</span>';
}

function resetluas(){
    document.getElementsByid(formluas).reset();
}
function resetkeliling(){
    document.getElementsByid(formkeliling).reset();
}