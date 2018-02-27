 	var nav=document.querySelector("nav");
	window.addEventListener('scroll',function(){
		if(window.pageYOffset!=0)
		 {
		 	nav.classList.add('scroll');
		 	nav.style.transition = 'all ease-in-out 250ms'
	 	 }
		else
         {
         	nav.classList.remove('scroll');
         	nav.style.transition = 'all ease-in-out 250ms '
         }
         var get_started = document.getElementById("get_started");
         var logo = document.getElementById('logo');
         if(window.pageYOffset>=175){
           logo.classList.add('logo_width');
           get_started.classList.remove('get_started');
           get_started.classList.add('get_started_scroll');
           logo.classList.remove('logo');
         }
         else if (window.pageYOffset===0){
         	logo.classList.remove('logo_width');
         	logo.classList.add('logo');
         	get_started.classList.add('get_started');
         	get_started.classList.remove('get_started_scroll');
         }
	});