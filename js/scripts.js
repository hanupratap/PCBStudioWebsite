;(function() {
	'use strict';

	// wait till DOM is loaded
	window.addEventListener('load', function() {
		// add novalidate to form
		document.getElementById('form1').setAttribute('novalidate', 'novalidate');

		function ValidateEmail(email){
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			if(email.value.match(mailformat)){
				return (true);
			}
			return (false);
		}


		// intercept document submit
		document.getElementById('form1').addEventListener('submit', function(e) {
			// halt event
			e.preventDefault();
			e.stopPropagation();

			// form checking
			var isValid = true;

			// error messages shortcuts
			var errName = document.getElementById('errName');
			var errPhone = document.getElementById('errPhone');
			var errEmail = document.getElementById('errEmail');
			var errMessage = document.getElementById('errMessage');

			// input shortcuts
			var qstName = document.getElementById('qstName');
			var qstPhone = document.getElementById('qstPhone');
			var qstEmail = document.getElementById('qstEmail');
			var qstMessage = document.getElementById('qstMessage');

			// hide all error messages
			var errMessages = document.querySelectorAll('.message--error');
			for (var i = 0; i < errMessages.length; i++) {
				errMessages[i].style.display = 'none';
			}

			// check name
			if (qstName.value == '') {
				isValid = false;
				errName.innerHTML = 'gelieve een naam in te vullen';
				errName.style.display = 'block';
				qstName.classList.add('invalid');
			}
			else{
				qstName.classList.remove('invalid');
				qstName.classList.add('valid');
			}

      // check phone
      if (qstPhone.value == '') {
        isValid = false;
        errPhone.innerHTML = 'gelieve een telefoonnummer in te vullen';
        errPhone.style.display = 'block';
        qstPhone.classList.add('invalid');
      }
      else{
        qstPhone.classList.remove('invalid');
        qstPhone.classList.add('valid');
      }

			// check email
			if (ValidateEmail(qstEmail)) {
				qstEmail.classList.add('valid');
			}
			else{
				isValid = false;
				errEmail.innerHTML = 'gelieve een geldige email in te vullen';
				errEmail.style.display = 'block';
				qstEmail.classList.add('invalid');
			}

      // check message
      if (qstMessage.value == '') {
        isValid = false;
        errMessage.innerHTML = 'gelieve een vraag met/zonder foto in te vullen';
        errMessage.style.display = 'block';
        qstMessage.classList.add('invalid');
      }
      else{
        qstMessage.classList.remove('invalid');
        qstMessage.classList.add('valid');
      }

			// draw conclusion
			if (isValid) {
				form1.style.display = 'none';
				thankyou.style.display = 'block';
				setTimeout(function () {
						window.location = "index.html";
				}, 3000);
			} else {
				summary.style.display = 'block';
			}

		});
	})

})();
