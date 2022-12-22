console.time()
funcionTrucha= ["pepe","funciona","esquizofenico <rb>"]
var goku = {
poderio:"infinito <br>",
colorDePelo:"negro",
altura:"1,67"};
numeroPrimario=0
numeroSecundario=10
do {
	document.write(numeroSecundario)
numeroSecundario--
if (numeroSecundario==3) {break}
}while(numeroSecundario>1);

while(numeroPrimario<10){

	numeroPrimario+=2
	document.write(numeroPrimario)
}
for (let reloj=0;reloj<100;reloj+=10){
	if(reloj==70){
		continue
	}
	document.write(reloj+"<br>")
}
let armas=["pistola","metralleta","escopeta"]
armas.calibre=12+"<br><br>"
for(arma in armas){
document.write(arma+"<br>")
}
document.write("<br>")
for(arma of armas){
	document.write(arma+"<br>")
}

document.write(funcionTrucha[0])
document.write(funcionTrucha[2])
document.write(goku["colorDePelo"]) 

function saludo(numero1z,numero2y,puteadaSunTonNiSon){
	puteadaSunTonNiSon=prompt("¿Que es el creador de esta pagina?")
let	numero1=numero1z
let numero2=numero2y
let resultado=numero1+numero2
let frase=`Hola usuario, tu eres un ${puteadaSunTonNiSon}. Y los sabes muy bien.`
document.write(resultado)
document.write(frase)
}
saludo(10,10);
class aventureros {
	constructor(fuerza,agilidad,durabilidad){
		this.fuerza=fuerza;
		this.agilidad=agilidad;
		this.durabilidad=durabilidad;
		this.menu=`Tu poder es chico, tu fuerza es de rango ${this.fuerza},
		 tu agilidad es de rango ${this.agilidad} y tu durabilidad es de rengo ${this.durabilidad}<br>`
	
	}
 personajes(){
		document.write(this.menu)
	}
}
class informeConfidencial extends aventureros{
	constructor2(fuerza,agilidad,durabilidad,habilidadRara){

aventureroNormal(fuerza,agilidad,durabilidad);
this.habilidadRara=habilidadRara;
this.elMundo=`Tu voluntad y deseos se an matrializado en ${this.habilidadRara}`
	}
	static perosnajes2(){
		document.write(this.elMundo)
	}
set documentosFalsos(habilidadFalsa){
	this.habilidadRara=habilidadFalsa
}
get porfin(){
	return this.habilidadRara
}
}
const elCaballeroOscuro = new aventureros("alto","super alto","bajo");
const julius=new aventureros("bajo","medio","super alto")
const dante=new aventureros("$##%","772667826724","¿?")
document.write(elCaballeroOscuro.fuerza)
document.write(elCaballeroOscuro.menu)
julius.personajes()
dante.personajes()
const rimuru=new informeConfidencial("S","a","d","Gula")
rimuru.documentosFalsos="Gloton"
document.write(rimuru.porfin)
let charla1="<br>Hola gente"
let charla2="bye bye putos"
charlas1y2=charla1.concat(charla2)
document.write(charlas1y2)
let charla3="como estas"
let charla4="como te va"
let charla5="estoy divertido divertido divertido"
let numeroParaHacerTexto=5
charlas3y4=charla3.startsWith(charla4);
document.write(charlas3y4);
charlas3y1=charla3.endsWith(charla1)
document.write(charlas3y4)
verificacion=charla1.includes("hola")
document.write(verificacion)
enDondeEsta=charla4.indexOf("te")
document.write(enDondeEsta)
ultimaDiversion=charla5.lastIndexOf("divertido")
document.write(ultimaDiversion)
empiezaLaRepeticion=charla4.padStart(20,"o")
document.write(empiezaLaRepeticion)
terminando=charla3.padEnd(15,"s")
document.write(terminando)
repetirChachara="xd"
gracia=repetirChachara.repeat(5)
document.write(gracia)
let arraysjeje=charla5.split(" ")
document.write(arraysjeje[3])
let empiezeTermine=charla5.substring(5,9)
document.write("<br>"+empiezeTermine)
mayuscula=charla1.toUpperCase()
document.write(mayuscula)
minuscula=charla1.toLowerCase()
document.write(minuscula)
textoDeNumero=numeroParaHacerTexto.toString()
document.write(2+textoDeNumero)
document.write(charla1.length)
sinEspacios=charla1.trim
document.write(sinEspacios.length)
let arrayDeNombre=["Pepe","Pablo","Pedro"]
document.write("<br>"+arrayDeNombre)
sacarUltimo=arrayDeNombre.pop()
document.write("<br>"+sacarUltimo)
document.write("<br>"+arrayDeNombre)
sacoPrimero=arrayDeNombre.shift()
document.write("<br>"+sacoPrimero)
aaaaaahhh=arrayDeNombre.push("Perez","Paco")
document.write(aaaaaahhh)
reverso=arrayDeNombre.reverse()
document.write(reverso)
arrayDeNombre.unshift("Pepito")
document.write("<br>"+arrayDeNombre)
abecedarioMalo=["b","c","f","a","g","x"]
document.write(abecedarioMalo)
abecedarioMalo.sort()
document.write(abecedarioMalo)
arrayDeNombre.splice(1,2,"Pamela")
document.write("<br>"+arrayDeNombre)
arrayUnido=arrayDeNombre.join(".")
document.write(arrayUnido)
let aybue=arrayDeNombre.slice(1,3)
document.write("<br>"+aybue)
let tieneNombre=arrayDeNombre.includes("Pablo")
document.write(tieneNombre)
arrayDeNombre.filter(function comoDijoJackElDestrpador(arrayDeNombre){
	document.write(arrayDeNombre+"<br>")
})
flechasNoSe=arrayDeNombre.filter(arrayDeNombre=> arrayDeNombre.length>5)
document.write("<br>"+flechasNoSe)
maximoNumero=Math.max(3,4,65,746,43)
document.write(maximoNumero)
numeroRandom=Math.random()*100
numeroRandom=numeroRandom.toString()
numeroPasaATexto=numeroRandom[0]+numeroRandom[1]
if (numeroRandom=".") {
	numeroRandom=numeroRandom[3]
}
document.write(numeroPasaATexto)
numeroRandom2=Math.random()*100
numeroCerca=Math.round(numeroRandom2)
redondeadoParaAbajo=Math.floor(numeroRandom2)
document.write(numeroCerca)	
document.write("<br>"+redondeadoParaAbajo)
console.assert(5<4)

console.table([1,4,5,6,3,8,9])
console.warn("cuidadito")
console.dir(["lol","jeje","xd"])
console.count()
console.count()
console.count()
console.countReset()
console.count()
console.group()
console.groupEnd()
console.timeEnd()

idRara= document.getElementById("eeehhh..tooo");
document.write(idRara);
const cambiarDeImput = document.querySelector(".cambiarDeImput");
document.write("cambiarDeImput");


nanana=document.querySelector(".nanana")

inalaExala=document.querySelector(".inalaExala")

document.write("<br>"+nanana)
br="<br>"
const input2=document.querySelector(".bebe")

document.write(input2)


const meOlvideee=document.querySelector(".bebe")


const aProbar =document.querySelector(".laFrutaMadre")

//nanana.classList.add("facil")
//nanana.classList.remove("facil")
//queClase=nanana.classList.item(1)
//siLoTiene=nanana.classList.contains("unaPera")
//reverso=nanana.classList.toggle("estiercol")
//document.write(siLoTiene)
//Scambio=nanana.classList.replace("unaPera","esManzana")
contenedor=document.querySelector(".madrigal")
//contenedor.replaceChild(".madrigal",".madrigal--active")
//elContenido=nanana.textContent
//document.write(elContenido)
//aEscribir=document.createElement("LI")
//textoDelNodo=document.createTextNode("lairalarailalaira")
 // aEscribir.innerHTML=textoDelNodo 
 // aEscribir.appendChild(textoDelNodo)
//document.write(textoDelNodo)
//console.log(aEscribir)
muchosDocumentos=document.createDocumentFragment()

for (var quePendejo =5; quePendejo = 0; quePendejo+1) {
	muchosDocumentos.appendCHiled(aEscribir)
	document.write(muchosDocumentos)
}
laGrieta=document.querySelector(".sueño")
//hades=laGrieta.firstElementChild;
//zeus=laGrieta.lastElementChild;
//console.log(hades)
//console.log(zeus)
//masClaroQueElAgua=laGrieta.childNodes
//console.log(masClaroQueElAgua)
//aj=laGrieta.children
//for (unoPorUno in aj ) {
//console.log(unoPorUno)
//}
ereDiferente=document.createElement("P")
textoNodo=document.createTextNode("eeeeeeeeeooooooo")
ereDiferente.appendChild(textoNodo)
document.write("<br>")
//esta=nanana.outerHTML
//lala=nanana.innerHTML
//destroke=ereDiferente.innerText="tito"
//document.write(destroke)
//document.write(esta+"<br>")
//document.write(lala)
licantropos=document.createElement("LI")
sonDemasiadasVariables=document.createTextNode("AAA UUUUUUHHHHH")
licantropos.appendChild(sonDemasiadasVariables)
const entra=document.querySelector(".gano");
//entra.appendChild(ereDiferente)
 cambiar=document.querySelector(".feo")	;
//cambiar.setAttribute("contentEditable","true");
//cambiar.style.background = "blue"

console.log(licantropos)
paginaDeYoutube="https://youtube.com"
//window.open(paginaDeYoutube) me estaba molestando
window.close
youtubeCerradoOAbierto=window.closed
document.write(youtubeCerradoOAbierto)
document.write("<br>"+"se quemo")
SaleONo=window.confirm("¿A donde vas?")
//window.print()
//window.stop()
document.write(SaleONo)
tamañoDeVentana=window.screen // se puede usar left top right
bajando=window.scrollY
document.write(bajando)
dondeSeEscondera=window.location.href
document.write(dondeSeEscondera)
window.location.protocol // https seguro, http peligroso
window.location.hostname
window.location.pathname
window.location.assing
power=10
powerEnemie=5
goldTotal=10


boton=document.querySelector(".boton")
document.write()

function pelea(){
if(power>=powerEnemie){
	return power+5
	return goldTotal+10
  }
}
document.write(power)
//boton.onClick = ()=>{
//	if(power>=powerEnemie){
//	return power+5
//	return goldTotal+10
//  }

//}
boton.addEventListener("click",()=>{
	console.log("tractorrr")
});
document.write(goldTotal);