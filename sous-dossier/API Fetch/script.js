const pokeObject = document.querySelector(".pokeList");


const pokemon = async () => {
        
    for (let i = 1; i < 151; i++) {
        const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await poke.json();
        console.log(data);

        // On récupère l'image
        let img = document.createElement('img');
        img.src = `${data.sprites.front_default}`;

        // On récupère le nom
        let infoTextNode = document.createTextNode(`${data.name}`);

        // On crée le receptacle pour l'image et le nom
        let test = document.createElement('li');

        // On lui envoie les données
        test.appendChild(img);
        test.appendChild(infoTextNode);

        // On envoie le réceptacle dans notre container parent
        pokeObject.appendChild(test);
    }
}
pokemon();
