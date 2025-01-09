<?
require ("dbconnect.php");

require ("global_path.php");  //���������� $save_dir (�� ��������� = "/uploads/")


$uploaddir = ".." . iconv('UTF-8','UTF-8', $save_dir. $_GET['tabname']) ."/"; 

if(!is_dir($uploaddir)) mkdir($uploaddir, 0700, $recursive = true); 

$img = $_FILES['uploadfile'];  

if(!empty($img)) 
{

	if($img['name']!=='') $fileprefix = $_SERVER['REQUEST_TIME']; //������� � �������� ���������� �����

	$nnm = iconv('UTF-8','UTF-8',$fileprefix. "_" .$img['name']);
	move_uploaded_file($img['tmp_name'], $uploaddir.$nnm);
		
	mysql_query ("INSERT INTO uplfiles (tabname, type, detid, prefix, filename, maskname, prim, local_path) VALUES ('" .$_GET['tabname'] ."','" .$_GET['type'] ."','" .$_GET['detid'] ."','".$fileprefix ."', '" .$img['name'] ."', '" .$img['name'] ."', '', '" .$_GET['tabname'] ."')");


}
?>