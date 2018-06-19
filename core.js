//var github = '<i class="icon-github-squared"></i><a href="https://github.com/Kratak" target="_blank"> github </a>';
//var linkedin = '<i class="icon-linkedin-squared"><a href="https://www.linkedin.com/in/maciej-kaczanowski-189404166/" target="_blank"> linkedin </a>';
//
//document.getElementById("fotInData").innerHTML = "made by Maciej Kaczanowski";
//document.getElementById("fotInGithub").innerHTML = github;
//document.getElementById("fotInLinkedin").innerHTML = linkedin;

/*---START---very smode scroll, to eny elemnt on page---START---*/

/*https://css-tricks.com/snippets/jquery/smooth-scrolling/*/

// Select all links with hashes
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});
/*---END---very smode scroll, to eny elemnt on page---END---*/
