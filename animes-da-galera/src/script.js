var animes = [
	"https://animesonlineup.com/wp-content/uploads/2020/07/unpQ-large.jpg",

	"https://labdicasjornalismo.com/images/noticias/383/383_23042019233511.jpg",

	"https://media.fstatic.com/6nZzFgvFprgvaV0J7TaR-Madj7I=/290x478/smart/media/movies/covers/2014/07/another_t51362_1.jpg",

	"https://teoriageek.com.br/wp-content/uploads/2021/04/tatsu-imortal-poster.jpg"
];

// var nome_anime [

// ];
var elementoResultado = document.getElementById("resultado");
var novaAnime = document.getElementById("link_anime");
var count = 0;

if (!localStorage.getItem("animes")) {
	localStorage.setItem("animes", animes.toString());
}

var storageAnime = localStorage.getItem("animes");

animes = storageAnime.split(",");
console.log("animes", animes);

for (count; count < animes.length; count++) {
	elementoResultado.innerHTML += "<img src=" + animes[count] + "> ";
}

function adicionar() {
	var elementoResultado = document.getElementById("resultado");
	var novaAnime = document.getElementById("link_anime").value;

	if (animes.includes(novaAnime)) {
		document.body.innerHTML +=
			"<p class = " + aviso + ">Essa serie ja foi adicionada.</p>";
	} else {
		animes.push(novaAnime);
		localStorage.setItem("animes", animes.toString());

		do {
			elementoResultado.innerHTML += "<img src=" + animes[count] + ">";
			count++;
		} while (indice < animes.length);
	}
	document.getElementById("link_anime").value = "";
}
