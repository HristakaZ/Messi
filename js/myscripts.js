function onScroll() {
					document.getElementById('navbar').style.transition = "all 2s";
					if (document.documentElement.scrollTop > 50) {
						document.getElementById('navbar').style.backgroundColor = "rgb(35, 31, 32)";
					}
					else {
						document.getElementById('navbar').style.backgroundColor = "rgba(0, 0, 0, 0)";
					}
				}

function smoothScroll() {
					document.documentElement.style.scrollBehavior = "smooth";
				}	

function scrollToTop() {
					window.scrollTo(0, 0);
					smoothScroll();
				}