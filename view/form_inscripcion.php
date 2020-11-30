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
    <div id="dni_mensaje" class="dni_mensaje"></div>
    <p>Nombre</p><input type="text" name="nombre" class="validar" id="nombre" size="40">
    <p>Primer apellido</p><input type="text" name="papellido" class="validar" id="papellido" size="40">
    <p>Segundo apellido</p><input type="text" name="sapellido" class="validar" id="sapellido" size="40">
    <p>Fecha de nacimiento</p><input type="date" name="fecha_nac" class="validar" id="fecha_nac" size="40">
    <div id="cat_mensaje" class="cat_mensaje"></div>
    <p>Email</p><input type="text" name="email" id="email" class="validar" size="40">
    <p>Sexo</p>
        <select name="sexo" id="sexo">
            <option value="Escoge tu sexo" id="Escoge"class="validar">Escoge tu sexo</option>
            <option value="Masculino">Hombre</option>
            <option value="Femenino">Mujer</option>
        </select>
        </p>
      <input type="submit" value="Inscribirme">
    
    <div id="message" class="message">
    <?php
  if(isset($_GET['error1'])){
      $error1=$_GET['error1'];
      //echo $error1;
      echo "<p style='Background-Color:red; border-radius: 4px; padding: 8px; margin-right: 20px; text-align: center; width:100%;'>".$error1."</p>";
      echo "<br>";
      echo "<br>";
  }
  if(isset($_GET['inscripcion'])){
    $inscripcion=$_GET['inscripcion'];
      echo "<p style='Background-Color:green; border-radius: 4px; padding: 8px; margin-right: 20px; text-align: center; width:100%;'>Inscipcion hecha, perteneces a la categoria de ".$inscripcion."</p>";
      echo "<br>";
      echo "<br>";
  }
  ?>
    </div>
  </form>
  
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