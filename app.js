const firebaseConfig = {
  apiKey: "AIzaSyDyVrBip-Qq1gaXmfStk-LzVUGuYxcWZWU",
  authDomain: "abss-3b041.firebaseapp.com",
  databaseURL: "https://abss-3b041-default-rtdb.firebaseio.com",
  projectId: "abss-3b041",
  storageBucket: "abss-3b041.appspot.com",
  messagingSenderId: "698289828278",
  appId: "1:698289828278:web:dc81cfe6962b5232095117",
  measurementId: "G-5TW7RLERYC",
};

var formulario = document.getElementById('form-signup');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(formulario);
    
    fetch('validar.php',{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            //console.log(data)
            if (data === 'Verificado') {
              mensajeTime("info", "Verificado", "Captcha Correcto!", 2000);
              registrar();
            } else if (data === 'No Verificado') { 
                //${data}
              mensaje("error", "Error!", "No Verificado!");
            } else {
              mensaje("error", "Error!", "Complete el Captcha!");
            }
        } )
});

function registrar() {
  var email = document.getElementById("txtCorreo").value;
  var pass = document.getElementById("txtPass").value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => {
      mensajeTime("success", "Creado", "Usuario Creado", 1500);
      verificar();
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorCode);
      //console.log(errorMessage);
      mensaje("error", "Error!", errorMessage);
    });
}

function verificar() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
    .then(function () {
        msj();
    })
    .catch(function (error) {
        mensaje("error", "Error!", error);
    });
}

function emailVerificado(user) {
    var aux = user;
    if(aux.emailVerified) {

    } else {
        mensaje("error", "Error!", "Verifique el correo porfavor!");
    }
}

function acceder() {
  var email = document.getElementById("txtCorreoLogin").value;
  var pass = document.getElementById("txtPassLogin").value;
  
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => {
        mensajeTime("info", "Acceso", "Entrando al sistema..", 2000);
        // OPCION 1: 
        setTimeout( function() { window.location.href = "http://localhost:80/proyectos/logins/login3/home.php"; }, 2000 );
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorCode);
      //console.log(errorMessage);
      mensaje("error", "Error!", errorMessage);
    });
}

async function observador() {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      usuario = user;
      console.log(usuario);
      console.log("existe usuario activo..");
    } else {
      console.log("No existe usuario activo..");
    }
  });
}

observador();

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
        window.location.href = "http://localhost:80/proyectos/logins/login3/";
    })
    .catch(function () {

    });
}

function msj() {
  let timerInterval;
  Swal.fire({
    title: "Enviando!",
    html: "Enviando Correo <b></b> milisegundos...",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("Sesión cerrada!");
    }
  });
}

// success, error, info, warning -- position:center, top-end
function mensaje(icono, titulo, mensaje) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#3085d6",
  });
}

function mensajeTime(icono, titulo, mensaje, tiempo) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
    showConfirmButton: false,
    timer: tiempo,
  });
}
