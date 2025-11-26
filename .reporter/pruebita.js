//explicacion ciclo FOR:
                    0
animalesTierra=["perro", "gato", "lince", "cocodrilito"]
for (let index = 0; index < animalesTierra.length; index++) {
     let element = animalesTierra.length[index];
     console.log (element, index)   
}
/* 
index = 0
0<4 ? ---> element= animalesTierra[0] = ¨perro¨
console.log(¨perro", 0) perro 0
index = 0 + 1 = 1  
 
De forma sucesiva hasta obtener 4
*/


/*
array (conjunto): palabras reservadas, funciones o metodos constructores
length: numero que representa una cantidad, Indice representa una posicion

*/
//Ejemplo

var element=''
for (let index = 0; index < array.length; index++) {

    if (!(index < array.length -1 ))  {
       element = element + array[index] + ' ';
     
    } else {
        element = element + array[index] ; //caso contrario, para que no quede espacio al final
   }
}

//de palabras a texto : funciona
 // return palabras.join (¨ ¨) ;

var texto= palabras[0];
for (var i = 1; i< palabras.length; i++) {
    texto= texto+" "+palabras[i];
}
   return texto;
//....
for (let index = 0; index < array.length; index++) {
   element += array[index] +(" ") +"!";

}

 //PRACTICO 04

var pal=["hello", "woed"]
text= hello
i = 1 

//prueba ;
 var bandera 
for (let index = 0; index < array.length; index++) {
 array[i]=== elemento ? bandera=true :  !bandera; 

/*var bandera= false;
for (let index = 0; index < array.length; index++) {
   if (array[index]=== element;) {
   
   }
}
return bandera
*/

 //prueba (78): funcion
 var suma =  numeros.reduce((a,b) => a + b, 0);
 return suma; 

 //..
 var acumuladoe= 0
 for (let index = 0; index < array.length; index++) {
   acumulador = numero[index]+acumulador;
   
 }

 //PRACTICO 05:
 //Gato
 const user = {
  username: 'juan.perez',
  password: 'loremipsumpwd123',
  lovesJavascript: true,
  favoriteNumber: 42
};
//...

let gato = {
  nombre: nombre,
  edad: edad,
  meow: function(){
    cconsole.log("Meow!");
  }
 };
 return gato;
 //...
 return{
  nombre,
  edad,
  meow: () => "Meow!"
 };
 

//ojetoMisterioso
 numeroMisterioso({numeroMisterioso})

 return numeroMisterioso * 5;
   //...
const numeroMisterioso=({numeroMisterioso}) => numeroMisterioso * 5;
  //...
return objetoMisterioso.numeroMisterioso * 5; 
 //...
let producto = numeroMisterioso(objetoMisterioso);
console.log (producto);


//TIENE EMAIL
return usuario.email !== undefined && usuario.email !== null;
//...
if (usuario.email) {
   return true;
 } else {
   return false;
 }

 //TIENE PROPIEDAD 
 if (propiedad in objeto) {
   return true;
 } else {
   return false;
 }
//VERIFICAR PASSWORD
 return usuario.password === password;

//...
return usuario.password === password ? true : false; 

//ACTUALIZAR PASSWORD
this.password = nuevaPassword;
  return this; 


//SUMAR LIKES DE USUARIOS 
return (usuario.posts || []).reduce((suma, post) => suma + post.likes, 0);
//[] verifica que si el array esta vacio o nulo

//...
let suma=0;
for (let i = 0; i < usuario.posts.length; i++) {
   suma += usuario.posts[i].likes;
}
return suma; 

//CALCULAR DESCUENTO

let productos ={
   nombre:[],
   precio: [],
   porcentajeDeDecuento: [],
   calcularPrecioDescuento:function () {
     this.precioConDecuento= this.precio - (this.precio * this.porcentajeDeDescuento / precio );
     return this
   }
 };
 productos.calcularPrecioDescuento();
 console.log(productos.precioConDecuento);


}