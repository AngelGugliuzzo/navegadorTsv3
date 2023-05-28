document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Bienvenido a la aplicacion de carga de  clientes. Para utilizarla, use la ayuda </h1>
`;

const app = document.querySelector<HTMLDivElement>('#app');
const home = document.querySelector<HTMLAnchorElement>('#home');
const clientes = document.querySelector<HTMLAnchorElement>('#clientes');
const crearClientes = document.querySelector<HTMLAnchorElement>('#crearClientes');
const ayuda = document.querySelector<HTMLAnchorElement>('#ayuda');
const btnguardar=document.querySelector<HTMLAnchorElement>('#guardar')!;



//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
home?.addEventListener('click', () => {
	app!.innerHTML = `<h1>Nos dedicamos a hacer Aplicaciones  para clientes.<br> Contactenos a 5555-5555 nuestra direccion es Corrientes 0 PB </br> </h1>`;	
	// TODO: optimizar
  //contactanos!.classList.remove('active');
	ayuda!.classList.remove('active');
	home!.classList.add('active');
});
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
crearClientes?.addEventListener('click', () => {

	app!.innerHTML = `<div class="input-group input-group-sm mb-3">
	<span class="input-group-text" id="nombre">Nombre</span>
	<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div> 
  
  <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="apellido">Apellido</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

  <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="telefono">Telefono</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<!--°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°-->

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="empresa">Empresa</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="cuit">cuit/cuil</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-3">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">pais</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Argentina</a></li>
      <li><a class="dropdown-item" href="#">Brasil</a></li>
      <li><a class="dropdown-item" href="#">Bolivia</a></li>
    </ul>
    <input type="text" class="form-control" aria-label="Text input with dropdown button">
  </div>
  
<!--°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°-->

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="localidad">Localidad</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="codPostal">Codigo Postal</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="direccion">Direccion</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>




<!--<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Guardar</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>-->



<button id="guardar">Guardar</button>


`


 
	// TODO: optimizar
	home!.classList.remove('active');
	ayuda!.classList.remove('active');
	//contactanos!.classList.add('active');
                                                                       });

//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
ayuda?.addEventListener('click', () => {
	app!.innerHTML = `<h1>Crear Clientes: Ingrese los datos de los clientes, sin dejar datos en blanco.<br>Clientes : podra ver el listado de clientes. </br></h1>`;
  	// TODO: optimizar
	home!.classList.remove('active');
	//contactanos!.classList.remove('active');
	ayuda!.classList.add('active');
});
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

//const btnguardar = document.querySelector<HTMLInputElement>('#guardar')!;

const cargaDeDatos=()=>{
	
   const nombreInput = document.querySelector('#nombre')!;

   const apellidoinput= document.querySelector('#apellido');
   
   const telefonoInput=document.querySelector('#telefono');
   
   const empresaInput = document.querySelector('#empresa');
   
   const cuitInput = document.querySelector('#cuit');
   
   const direccionInput=document.querySelector('#direccion');
   
   const localidadInput=document.querySelector('#localidad');
   
   const codPostalinput = document.querySelector('#codPostal');

   const paisInput = document.querySelector('#pais');


   //nombre: string;
   //apellido: string;
   //telefono: number;
   //empresa: string;
   //cuit :  number;
   //direccion : string;
   //localidad : string;
   //codPostal : number;
   //pais : string;

	 //const nombre = nombreInput.value;
	 //const apellido = apellidoInput.value;
	 //const telefono = 
	 //const empresa = 
   //const cuit =
   //const dreccion =
   //const localidad =
   //const codPostal =
	 //const pais = paisInput.value;

   alert(apellidoinput);
   alert(nombreInput);

	//console.log(apellido.value);
	//alert(nombre.value);
	//console.log(nombre.value);
	//alert(apellido.value);
	//alert(nombre.value);
	//console.log(nombre)

 //validacionDeCampos(); 
	//if (nombre==='' || apellido===''||cuit===''||telefono===''||pais===''||empresa===''||codPostal===''||direccion){
	//		return alert(' Campos en blanco ');
	                       }
	
	

btnguardar.addEventListener('click',(event)=>{
	event.preventDefault();
	cargaDeDatos();
                                             });
						


