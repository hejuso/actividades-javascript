
var expMatricula = new RegExp("^[A-Z]{1,2}\\s\\d{4}\\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$","g");

if(expMatricula.test("S 1234 DDD")){
    
    alert("CORRECTO");
    
}else{
    
    alert("MAL");
    
}