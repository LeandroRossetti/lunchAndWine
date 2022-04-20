let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");


const fnSaveSession = (name) => {

   sessionStorage.setItem('usrlogged', true);

   location.href = "./index.html";
}

let btnRegister = document.getElementById("register")
btnRegister.addEventListener("click", saveDate)

function saveDate() {
   if (inputEmail.value == localStorage.getItem('nameEmail')) {
      Swal.fire({
         title: 'Ya te encuentras registrado',
         text: 'Este email ya se encuentra en uso.',
         icon: 'error',
         confirmButtonText: 'Confirmar'
      });
   }
   else if ((inputName.value == '') || (inputEmail.value == '') || (inputPassword.value == '')) {

      Swal.fire({
         title: 'Falta completar algún dato',
         text: 'Revisa si el email, el nombre o la contraseña estan vacias',
         icon: 'error',
         confirmButtonText: 'Confirmar'
      });
   }

   else {
   localStorage.setItem('name', inputName.value)
   localStorage.setItem('nameEmail', inputEmail.value)
   localStorage.setItem('password', inputPassword.value)


   Swal.fire({
      title: 'Usuario creado exitosamente',
      text: 'Ya puedes iniciar sesión con tu usuario.',
      icon: 'success',
      confirmButtonText: 'Confirmar'
   })
}

}


let btnLogin = document.getElementById("login")
btnLogin.addEventListener("click", checkLogin)

function checkLogin() {
   if (inputEmail.value == localStorage.getItem('nameEmail') && inputName.value == localStorage.getItem('name') && inputPassword.value == localStorage.getItem('password')) {

      Swal.fire({
         title: 'Redirigiendo...',
         text: 'Aguarde...',
         icon: 'info'

      })

      fnSaveSession(inputName.value);



   } else
      return Swal.fire({
         title: 'Dato erroneo',
         text: 'Revise algún dato se encuentra incorrecto',
         icon: 'question',
         confirmButtonText: 'Confirmar'
      })

}



let btnGuest = document.getElementById("invitado")
btnGuest.addEventListener("click", guest)

function guest() {

   sessionStorage.setItem('usrloggedGuest', true);
   location.href = "./index.html";

}