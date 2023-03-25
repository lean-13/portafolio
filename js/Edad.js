
const EdadText = document.querySelector('.Edad__Text');
const Fecha = '20/10/2001';


function calcularEdad(birthday) { 

    birthday=new Date(birthday.split('/').reverse().join('-'));
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); 
    
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


console.log(calcularEdad(Fecha));   

EdadText.textContent = calcularEdad(Fecha);

