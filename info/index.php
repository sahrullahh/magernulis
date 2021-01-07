<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>MagerNulis - Syarat dan Kententuan</title>
	<meta property="og:title" content="MagerNulis" />
    <meta property="og:description" content="Solusi orang mager nulis atau malas." />

    <link rel="stylesheet" type="text/css" href="../css/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="../css/css/all.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/ijendev.min.css">
</head>
<body>
	<nav>
		<div class="container">
			<h2>MagerNulis! <i class="far fa-pen"></i></h2>
		</div>
<nav>
	<div class="jumbotron">
		<img src="../assets/img/undraw_Terms_re_6ak4.svg">

		<br><br>
		<div class="content">
			<h2>Syarat dan ketentuan.</h2>
			<br><br>
			<ul>
				<li>Hai jangan lupa follow instagram ku ya.</li>
				<li>Gunakan <b>MagerNulis!</b> Sewajarnya saja, Pakai <b>MagerNulis</b> Pada Saat Kamu Merasa bosan atau
				waktu udah mepet mengerjakan tugas.</li>
				<li>Berikan tanggapan kamu tentang kekurangan web ini dan kasih saran web ini.</li>
				<li>Dan terima kasih telah menggunakan <b>MagerNulis</b>.</li>
			</ul>
			<br><br>
		<form onsubmit="approved();">
			<input type="checkbox" id="check" required><label>Apakah anda setuju dengan Syarat dan ketentuan kami?</label>
			<br><br>
	 <button class="btn" type="submit">Oke, Saya Setuju!</button><button class="btn transparent" type="button"  id="skip">Skip</button>
		</form>
		</div>
	</div>
</body>
<script type="text/javascript">
	let check = document.querySelector("#check");
	let skip = document.querySelector("#skip");
	function approved() {
		if (check.checked == true) {
			window.open('https://instagram.com/sahrullahhh04_', '_blank');
		}else{

		}
	}
	skip.addEventListener("click", function () {
		document.location.href = "../";
	})
</script>
</html>
<style type="text/css">
	*{
		margin: 0 auto;
		padding: 0 auto;
		font-family: 'GT Eesti Pro Display', sans-serif;
	}
	.content label{
		margin-left: 30px;
	}
	button{
		margin-left: 10px;
	}
	.transparent{
		background: transparent !important;
		color: #1386DD !important;
	}
	.jumbotron{
		margin-top: 2%;
		text-align: center;
	}
	.jumbotron img{
		max-width: 200px;
	}
	.content{
		color: #333;
	}
	.content ul{
		text-align: left;
		width: 400px;
	}
	.content ul li{
		padding: 10px;
	}
	nav{
		border-bottom: none;
		padding: 20px;
	}
	nav .container{
		width: 70%;
	}
	nav h2{
		color: #1386DD;
	}
	@media only screen and (max-width: 780px) {
		nav .container{
			width: 100%;
			text-align: center;
		}
	}
</style>