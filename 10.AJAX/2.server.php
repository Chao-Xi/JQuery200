<?php

    if(isset($_POST["password"]))
    {
     $password=$_POST['password'];
     $login=$_POST["login"];	
     $loggedin=false;

     $database=file_get_contents("database.txt"); 
     $pairs=explode("-", $database);
     
     	for($i=0; $i<3; $i++)
     	{
     	  $user=explode(":", $pairs[$i]);
     	  if(($user[0]==$login) && ($user[1]==$password))
     	  {
     	  	echo "welcome, ".$user[0]."<br><h1>welcome to Avalon</h1>";
     	  	$loggedin=true;
     	  }	
     	}
      
      if($loggedin===false)
      {
      	echo "Wrong login";
      }
  }