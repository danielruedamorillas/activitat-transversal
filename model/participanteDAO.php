<?php
class participanteDAO{
    private $pdo;
    public function __construct(){
        include 'conexion.php';
        $this->pdo=$pdo;
    }
    public function inscripcion($dni,$nombre,$primer_apellido,$segundo_apellido,$fecha_nac,$sexo,$edad){
        try{
            $this->pdo->beginTransaction();
            $query0="SELECT DNI_participante FROM tbl_participante WHERE DNI_participante='$dni'";
            $sentencia0=$this->pdo->prepare($query0);
            $sentencia0->execute();
            $comprovar_dni=$sentencia0->fetchAll(PDO::FETCH_ASSOC);
            foreach($comprovar_dni as $comp_dni){
                    $dni_comprovado=$comp_dni['DNI_participante'];
            }
            $this->pdo->commit();

            if(empty($dni_comprovado)){

                    echo $edad;
                    $this->pdo->beginTransaction();
                    $query_cat="SELECT id_categoria FROM tbl_categoria WHERE edad_min<=$edad AND edad_max>=$edad AND Sexo='$sexo'";
                    $sentencia_cat=$this->pdo->prepare($query_cat);
                    $sentencia_cat->execute();
                    $this->pdo->commit();
                    $conseguir_id=$sentencia_cat->fetchAll(PDO::FETCH_ASSOC);
                    foreach($conseguir_id as $id){
                    $id_categoria=$id['id_categoria'];
                    }
                    print_r($sentencia_cat);
                    $this->pdo->beginTransaction();
                    $query_dorsal="SELECT max(dorsal) FROM tbl_participante";
                    $sentencia_dorsal=$this->pdo->prepare($query_dorsal);
                    $sentencia_dorsal->execute();
                    $this->pdo->commit();
                    $conseguir_dorsal=$sentencia_dorsal->fetchAll(PDO::FETCH_ASSOC);
                    foreach($conseguir_dorsal as $dorsal){
                    $dorsal_participante=$dorsal['max(dorsal)'];
                    }
                    $dorsal_participante=$dorsal_participante+1;
                    $this->pdo->beginTransaction();
                    $query1="INSERT INTO tbl_participante 
                            (DNI_participante,dorsal,nombre,primer_apellido,segundo_apellido,sexo,fecha_nacimiento,id_categoria)
                            VALUES ('$dni',$dorsal_participante,'$nombre','$primer_apellido','$segundo_apellido','$sexo','$fecha_nac','$id_categoria')";
                    $sentencia1=$this->pdo->prepare($query1);
                    $sentencia1->execute();
                    $this->pdo->commit();

                    $this->pdo->beginTransaction();
                    $query2="INSERT INTO tbl_inscripcion
                            (DNI_participante,id_cursa,id_categoria) 
                            VALUES ('$dni',1,'$id_categoria')";
                    $sentencia2=$this->pdo->prepare($query2);
                    $sentencia2->execute();
                    $this->pdo->commit();

                    echo "INSCRIPCION HECHA";
                    echo "<br>";
                    ?>
                    <div class="boton_volver">
                    <?php
                    echo "<a href='../index.html'>Volver a la pagina principal</a>";
                    ?>
                    </div>
                    <?php
                    // echo "<a href='../index.html'>Volver a la pagina principal</a>";

            }else{
                    $error1="El DNI intruducido ya esta inscrito";
                    header("Location: form_inscripcion.php?error1=$error1");
            }


        }catch(PDOException $e){ // si no lo hace bien nos mostrara el mensaje
                echo $e->getMessage();
        }
    }
}