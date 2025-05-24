console.log("Evaluador de Rendimiento Académico");



let parcial1 = 12;
let parcial2 = 15;
let proyectoFinal = 18;
let notaFinal = (parcial1 * 0.3) + (parcial2 * 0.3) + (proyectoFinal * 0.4);

console.log("Nota del primer parcial= "+parcial1);
console.log("Nota del segundo parcial= "+parcial2);
console.log("Nota del proyecto final= "+proyectoFinal);
console.log("Nota final= "+notaFinal);
if(notaFinal>=14){
    console.log("Aprobado directamente.");
}else{
    if(notaFinal>=10){
        console.log("Va a recuperación.");
    }else{
        console.log("Pierde la materia.");
    }

};
