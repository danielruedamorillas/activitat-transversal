<!DOCTYPE html>
<html lang="en">
<head>
<title>CSS Website Layout</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="../estilo.css">
<script src="../js/code.js"></script>
</head>
<body>


<div class="topnav">
  <a href="../index.html">Inicio</a>
  <a href="form_inscripcion.php">Inscripcion</a>
</div>

<form action="inscripcion.php" onsubmit="return validacionForm(dni)" id="form" method="POST">
    <h2> INTRODUCE TUS DATOS </h2>
    <p>DNI</p><input type="text" name="dni" id="dni" size="40">
    <p>Nombre</p><input type="text" name="nombre" id="nombre" size="40">
    <p>Primer apellido</p><input type="text" name="papellido" id="papellido" size="40">
    <p>Segundo apellido</p><input type="text" name="sapellido" id="sapellido" size="40">
    <p>Fecha de nacimiento</p><input type="date" name="fecha_nac" id="fecha_nac" size="40">
    <p>Email</p><input type="text" name="email" id="email" size="40">
    <p>Sexo</p>
        <select name="sexo" id="sexo">
            <option value="Escoge tu sexo">Escoge tu sexo</option>
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
        </select>
        </p>
      <input type="submit" value="Inscribirme">
    
    <div id="message" class="message"></div>
  </form>
  <?php
  if(isset($_GET['error1'])){
      $error1=$_GET['error1'];
      echo $error1;
      echo "<br>";
      echo "<br>";
  }
  ?>
  <div class="boton_volver">
  <?php
  echo "<a href='../index.html'>Volver a la pagina principal</a>";
  ?>
  </div>
  <footer>
        <div class='define'>
            <p>Contactanos: nba@gmail.com</p>
            <p>Fundado en 2018</p>
            <p>Pagina desarrollada por Daniel Rueda Services</p>
        </div>
    </footer>

</body>
</html>