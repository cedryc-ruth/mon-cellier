/**
 * Main JS file
 *
 */
 
//Avec l'API Fetch (cours de la semaine prochaine)
/*
fetch('https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines')
	  .then(response => response.json())
	  .then(json => console.log(json));
	  
*/
//Modif
//Avec XMLHttpRequest
const xhr = new XMLHttpRequest();

xhr.onload = function() {
	if(this.status==200) {
		const response = this.responseText;
		const data = JSON.parse(response);
		
		console.log(data);
		
		//Afficher le nom des vins dans la page
		let strLis = '';
		
		for(let i in data) {
			strLis += `<li>${data[i].name}</li>`;
		}
		
		//jQuery
		//$('#liste').html(strLis);
		
		//Vanilla JS
		const listeUL = document.querySelector('#liste');
		
		for(let i in data) {
			let li = document.createElement('li');
			li.innerText = data[i].name;
			
			li.addEventListener('click', function(e) {
				this.style.backgroundColor = 'green';
				
				//TODO Afficher toutes les infos du vin sélectionné dans la div#fiche
				const titre = document.querySelector('#fiche h2');
				titre.innerText = this.innerText;
				
			});
			
			listeUL.appendChild(li);
		}
	}
	
	$('button#btnDelete').click(function() { alert('DELETE') });
}

xhr.open('GET','https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines',true);
xhr.send();


