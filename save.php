<?php
	require_once("secret.php");
	require_once("magicquotes.php");

	session_start();
	$token = $_SESSION['csrf_token'];
	unset($_SESSION['csrf_token']);
	session_write_close();

	if ($token && $_POST['token']==$token) {

		if (isset($_POST['stuff']))  {

			$stuff = $_POST['stuff'];

			$fh = fopen($myFile, 'w+') or die("can't open file");
			fwrite($fh, $stuff);
			fclose($fh);

			echo "saved";
		} else {
			echo "there is no stuff to write";
		}
		
	} else {
		echo "CSRF violation"; // let's be helpful to the attacker, let them know what's going on
	}

?>