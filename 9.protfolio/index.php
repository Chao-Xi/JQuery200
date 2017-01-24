<!DOCTYPE html>
<html>
<head>
	<title>jQuery Portfolio</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script type="text/javascript" src="interactive.js"></script>
    <script type="text/javascript" src="filter.js"></script>

    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
</head>
<body>
   <div id="header">
     <div id="menu">
        <h2>jQuery portfolio</h2>
        <input id="search" type="text" name="search" placeholder="search..." style="float: right">
     </div>
   </div>
   
   <div id= "overlay"></div>
   <div id="frame">
      <table id="frame-table">
      	<tr>
      		<td id="left">
      			<img src="images/left.png" alt="left">
      		</td>

      		<td id="right">
      			<img src="images/right.png" alt="right">
      		</td>
      	</tr>
      </table>
     <img id="main" src="" alt="">
     
      <div id="description">
      <p></p>
      </div>
  </div>
  <div id="wrapper"> 
  
  <ul id="filter">
     <li id="category" class="active">all</li>
     <li id="separator">|</li>
     <li id="category">actress</li>
     <li id="separator">|</li>
     <li id="category">singer</li>
     <li id="separator">|</li>
     <li id="category">model</li>
  </ul> 

  
     <ul id="portfolio">
         <?php require_once "list.html";  ?>
     </ul>
   </div>
</body>
</html>