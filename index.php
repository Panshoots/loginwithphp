<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css">
  <script src="https://www.gstatic.com/firebasejs/4.7.0/firebase.js"></script>
  <script src="https://www.google.com/recaptcha/api.js"></script>
</head>

<body>

  <div class="d-flex justify-content-center align-items-center mt-5">
    <div class="card">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item text-center">
          <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="form px-4">
            <form  id="form-login" method="POST">
              <h3 class="text-center mb-3">Ingreso al Sistema</h3>
              <input type="text" name="txtCorreoLogin" id="txtCorreoLogin" class="form-control" placeholder="Correo">
              <input type="password" name="txtPassLogin" id="txtPassLogin" class="form-control" placeholder="Contraseña">
              
              <button class="btn btn-dark btn-block" id="btnAcceder" type="submit">Acceder</button>
            </form>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div class="form px-4">
            <form action="validar.php" id="form-signup" method="POST">
              <h3 class="text-center mb-3">Creación de Usuario</h3>
              <input type="text" name="txtCorreo" id="txtCorreo" class="form-control" placeholder="Correo">
              <input type="text" name="txtPass" id="txtPass" class="form-control" placeholder="Contraseña">
              <div class="g-recaptcha" data-sitekey="6Le1Nb8jAAAAAAB4FTGQalv57AmR67CTHvtiacpS"></div>
              <button class="btn btn-dark btn-block">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


  <script src="app.js"></script>
</body>

</html>