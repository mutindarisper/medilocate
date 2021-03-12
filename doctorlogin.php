<?php
include_once '../misc/connection/dbconnection.php';

session_start();
if (isset($_SESSION['doctorSession']) != "") {
header("Location: doctor/doctordashboard.php");
}
if (isset($_POST['login']))
{
$doctorCertNumber = mysqli_real_escape_string($con,$_POST['doctorCertNumber']);
$password  = mysqli_real_escape_string($con,$_POST['Password']);

$res = mysqli_query($con,"SELECT * FROM doctor WHERE doctorCertNumber = '$doctorCertNumber'");

$row=mysqli_fetch_array($res,MYSQLI_ASSOC);
// echo $row['password'];
if ($row['Password'] == $password)
{
$_SESSION['doctorSession'] = $row['doctorCertNumber'];
?>
<script type="text/javascript">
alert('Login Success');
</script>
<?php
header("Location: doctor/doctordashboard.php");
} else {
?>
<script type="text/javascript">
    alert("Wrong input");
</script>
<?php
}
}
?>

<!DOCTYPE html>
<html>
<head>
	<style type="text/css">
		body {
			font-family: Arial, Helvetica, sans-serif
		}
 div{
 	background-image: url('img/pexels-karolina-grabowska-4386464.jpg');
	background-size: cover;
	background-position: center;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
 }
input[type=text], input[type=password] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 3px solid #48D1CC;
  border-radius: 10px;
  box-sizing: border-box;
}
button[type=submit]{
	 width: 30%;
	 background-color: #48D1CC;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 3px solid #48D1CC;
  border-radius: 10px;
  box-sizing: border-box;
}
button[type=submit]:hover{
	color: #FA8072;
	transition: 0.5s;
}

span{
	color: red;
}


		}
	</style>
	<title>Login</title>
</head>
<body>
	<div id="back">
			<h1 id="title">Login To Medi<span>Locate</span></h1>
						<form class="form" role="form" method="POST" accept-charset="UTF-8">
                            <input name="doctorCertNumber" type="text" placeholder="Doctor Certification Number" required>
                            <input name="password" type="password" placeholder="Password" required> <br>
                            <button type=" button"  type="submit" name="login">Login</button>
                        </form>


	</div>


	

</body>
</html>