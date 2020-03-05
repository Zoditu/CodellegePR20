var JPJ = {
    nombre: "Juan Pablo Javier",
    apellidoPaterno: "García",
    apellidoMaterno: "Castillo",
    edad: 20,
    fechaNac: "07-06-1999",
    sexo: "M",
    caminar: function(){
        console.log(this.edad);
        console.log("Caminando voy")
    },
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: "gcajuan",
    wish: '<ul><li>Xbox one.</li><li>MacBook pro.</li><li>Un departamento.</li><li>Lo que sea.</li></ul>'
};


var EM = {
    nombre: 'Erick Martin',
    apellidoPaterno: 'Fernandez',
    apellidoMaterno: 'Jimenez',
    edad: 20,
    fechaNac:'20-02-2000',
    sexo:'M',
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'Erick',
    wish: '<ul><li>Ropa</li></ul>'
};

var EA = {
    nombre: 'Enrique Alejandro',
    apellidoPaterno: 'Castro',
    apellidoMaterno: 'González',
    edad: 21,
    fechaNac: '07-06-1998',
    sexo: 'M',
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'Quique',
    wish: '<ul><li>Cualquier cosa de arduino.</li><li>Ropa de marca laxmi o estilo parecida</li><li>Ropa de tigres</li></ul>'
}

var GL = {
  nombre: 'Guadalupe',
  apellidoPaterno: 'Limon',
  apellidoMaterno: 'Flores',
  edad: 24,
  fechaNac: '06-10-1995',
  sexo: 'F',
  hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'Gudu',
    wish: '<ul><li>Prisma color premier coloring kit.</li><li>Colores faber Castell.</li><li>Lienzos.</li><li>Caballete.</li></ul>'
};

var JP={
    nombre: 'Juan Pablo',
    apellidoPaterno: 'Villanueva ',
    apellidoMaterno: 'Pámanes',
    edad: 21,
    fechaNac:'14-10-1998',
    sexo:'M',
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'JP',
    wish: '<ul><li>Una tira de luces led</li></ul>'
};

var DA = {
    nombre: "Darío André",
    apellidoPaterno: "Alfaro",
    apellidoMaterno: "Hernández",
    edad: 23,
    fechaNac: "21-02-1997",
    sexo: "M",
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'Darío',
    wish: '<ul><li>Airpods</li></ul>'
}

var GH = {
    nombre:'Guadalupe',
    apellidoPaterno: 'Hernández',
    apellidoMaterno: 'Sánchez',
    edad: 25,
    fechaNac: '21-10-1994',
    sexo:'F',
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'Lupita',
    wish: '<ul><li>Algo de:<ul><li>Avengers</li><li>Harry Potter</li><li>Star Wars</li></ul></li></ul>'
};

var KF = {
    nombre: 'Kevin Fernando',
    apellidoPaterno: 'Navarro',
    apellidoMaterno: 'Garza',
    edad: 23,
    fechaNac: '13-11-1996',
    sexo: 'M',
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'Kevin',
    wish: '<ul><li>Predator Helios 700.</li><li>Libro de sudokus.</li><li>Algo de lego 🤷🏾‍♂️.</li></ul>'
};

var EP = {
    nombre: 'Elisa Paola',
    apellidoPaterno: 'Juárez',
    apellidoMaterno: 'Avila',
    edad: 20,
    fechaNac: '20-05-1999',
    sexo: 'F',
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'Elisa',
    wish: '<ul><li>Boleto para concierto</li></ul>'
};

var NA = { 
    nombre: 'Nayeli Atzin',
    apellidoPaterno: 'Huerta',
    apellidoMaterno: 'Castañeda',
    edad: 21,
    fechaNac: '25-08-1998',
    sexo: 'F',
    hola: function(){
        console.log("Hola " +this.nombre);
    }, 
    apodo: 'Nayeli',
    wish: '<ul><li>Un libro, el que sea :P.</li></ul>'
};

var AA = {
    nombre: 'Angel Aldair',
    apellidoPaterno: 'Bárcenas',
    apellidoMaterno: 'Mora',
    edad: 19,
    fechaNac: '21/07/2000',
    sexo: 'M',
    hola: function(){
        console.log("Hola " +this.nombre);
    },
    apodo: 'Bárcenas',
    wish: '<ul><li>Un bugatti, pero si no les alcanza con unos audifonos se hace.</li></ul>'
};


var K = {
    nombre: "Kevin",
    apellidoPaterno: "Martín del Campo",
    apellidoMaterno: "Fernández",
    edad: 24,
    fechaNac: "14-04-1995",
    sexo: "M",
    hola: function(){
        console.log("Hola " + this.nombre);
    },
    apodo: 'Kevin',
    wish: '<ul><li>Marcadores</li><li>Borradores</li></ul>'

}


var alumnos = [JPJ, EM, EA, GL, JP, DA, GH, KF, EP, NA, AA];
var maestros = [K]