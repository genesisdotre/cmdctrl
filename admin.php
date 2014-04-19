<?php
require_once("secret.php");
require_once("magicquotes.php"); // may be required depending on PHP version on your server
$logged = "initial";

if (isset($_POST['user']) && isset($_POST['pass'])) {
	$user = $_POST['user'];
	$pass = $_POST['pass'];

	if($user == $userDB	&& $pass == $passDB) {
		$logged = "logged";

		// http://stackoverflow.com/questions/1780687/preventing-csrf-in-php
		session_start();
		$token= md5(uniqid());
		$_SESSION['csrf_token']= $token;
		session_write_close();

	} else {
		$logged = "fail";
	}
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Personal auth</title>
</head>

<body>

<?php if($logged == "logged") { ?>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" ></script>
<link rel="stylesheet" href="styles.css">

<script>
	$(function() {
		$(".greenButton").on("click", function() {
			var text = $("textarea").val();
			var token = $("input[name=token]").val();

			$.post("save.php", {stuff : text, token : token}, function(response) {
				$("#response").html(response);
	  			setTimeout(function(){$("#response").html("");}, 3000);
			});

		});
	});
</script>

<input type="hidden" name="token" value="<?php echo $token; ?>" />
<input type="submit" value="Save" class="greenButton" style="width:300px;"> 
<div id="response">&nbsp;</div>
<br>
<textarea cols=120 rows=40>

	<?php
		$fh = fopen($myFile, 'r');
		$theData = fread($fh, filesize($myFile));
		fclose($fh);
		echo $theData;
	?>

</textarea>

<?php } else { // not logged in ?>

	<form method="post" action="admin.php">
	<label for="user">User</label> <input type="text" id="user" name="user" placeholder="user" autofocus></input>
	<label for="pass">Pass</label> <input type="password"  id="pass" placeholder="password" name="pass"></input>
	<input type="submit" name="submit"></input>
	</form>

	<?php if($logged == "fail") { ?>

	Loggin failed.

<?php } } ?>

</body>
</html>