let user = [
    {nombre : "Matias", apellido: "Mendez"},
    {nombre : "Cristian", apellido: "Falcone"},
    {nombre : "Rodrigo", apellido: "Grigera"}
]

user.forEach (usuario => console.log (usuario.nombre + " " +usuario.apellido)); 


const filtrados = user.filter (filtro=>filtro.nombre=="Matias"); 
console.log(filtrados)

const concatenar=user.map(juntar=>juntar.nombre+"-"+juntar.apellido);
console.log(concatenar);

let concatenado=[];
for (let i = 0; i < user.length; i=i+1) {
    concatenado[i]=user[i].nombre+"-"+user[i].apellido;
}
console.log(concatenado);