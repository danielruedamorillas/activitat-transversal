<?php
//include_once '../model/conexion.php';
include '../model/participanteDAO.php';
$dni=$_POST['dni'];
$nombre=$_POST['nombre'];
$primer_apellido=$_POST['papellido'];
$segundo_apellido=$_POST['sapellido'];
$fecha_nac=$_POST['fecha_nac'];
$sexo=$_POST['sexo'];

$cumpleanos = new DateTime($fecha_nac);
$hoy = new DateTime();
$annos = $hoy->diff($cumpleanos);
$edad=$annos->y;


$inscripcion=new participanteDAO;
$inscripcion->inscripcion($dni,$nombre,$primer_apellido,$segundo_apellido,$fecha_nac,$sexo,$edad);        




  
