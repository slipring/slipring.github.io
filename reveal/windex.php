<?php 

$INC_DIR = $_SERVER["DOCUMENT_ROOT"]. "/w11_eportfolio/yourname/includes/";

//Empty variables should be declared NULL (without quotes) like: $title=NULL;

require($INC_DIR. "header.php"); ?> 

<body>

	<div class="reveal">

		<div class="slides">

			<section>
				<h2>reveal.js Math Plugin</h2>
				<p>A thin wrapper for MathJax</p>
			</section>

			<?php include($INC_DIR. "sections.php"); ?>

		</div>

	</div>

<?php require($INC_DIR. "footer.php"); ?>

</body>