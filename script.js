
// Code By YSS(Yadnika)::::---Do Not Edit-----
const container = document.getElementById("container");
const audio = new Audio("pok-sound.mp3")
const failaudio = new Audio("sound-fail.mp3")

const ShowPokemons = async (types) => {
    for(let i = 1; i <= types; i++){
        const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const api_data = await api_poke.json();

        PokemonCards(api_data);
    }
}
//--------YSS----------------------
function PokemonCards(api_data){

        const flip_card = document.createElement('div');
        flip_card.classList = `flip-card`
        
        const avatar = document.createElement('img');
        avatar.src = api_data.sprites.front_default;
        
        const flip_card_inner = document.createElement('div')
        flip_card_inner.classList  = `flip-card-inner`

        const flip_card_front = document.createElement('div');
        flip_card_front.classList = `flip-card-front`

        const name = document.createElement('p')
        name.classList = `Pkname`

        name.innerText = api_data.name;

        const pokType = document.createElement('p')
        pokType.classList = `PokType`

        pokType.innerText = api_data.types[0].type.name;
        
        const pokID = document.createElement('p')
        pokID.classList = `PokId`

        pokID.innerText = "#" + api_data.id;
        
        flip_card_front.appendChild(pokID)
        flip_card_front.appendChild(avatar)
        flip_card_front.appendChild(name)
        flip_card_front.appendChild(pokType)
        flip_card.appendChild(flip_card_inner)

        //BackSide::
        flip_card_inner.appendChild(flip_card_front)
        container.appendChild(flip_card)

        const Bckavatar = document.createElement('img');
        Bckavatar.src = api_data.sprites.back_default;

        const flip_card_back = document.createElement('div');
        flip_card_back.classList = `flip-card-back`
        
        const pokAbilities = document.createElement('p')
        pokAbilities.classList = `PokAb`
        const pokAbilities1 = document.createElement('p')
        pokAbilities1.classList = `PokAb1`

        pokAbilities.innerText = "Abilities: " + api_data.abilities[0].ability.name
        // pokAbilities1.innerText = api_data.abilities[1].ability.name

        const PokID = document.createElement('p')
        PokID.classList = `Pok_Id`

        PokID.innerText = "#" + api_data.id;

        flip_card_back.appendChild(PokID)
        flip_card_back.appendChild(Bckavatar)
        flip_card_back.appendChild(pokAbilities)
        flip_card_inner.appendChild(flip_card_back)

        //types Colors::
        if(api_data.types[0].type.name == 'grass')
        {
            flip_card_front.style.backgroundColor = "#A0CF59"
            flip_card_back.style.backgroundColor = "#A0CF59"
        }
        if(api_data.types[0].type.name == 'fire')
        {
            flip_card_front.style.backgroundColor = "#FD842F"
            flip_card_back.style.backgroundColor = "#FD842F"
        }
        if(api_data.types[0].type.name == 'water')
        {
            flip_card_front.style.backgroundColor = "#4E98C7"
            flip_card_back.style.backgroundColor = "#4E98C7"
        }
        if(api_data.types[0].type.name == 'bug')
        {
            flip_card_front.style.backgroundColor = "#79A449"
            flip_card_back.style.backgroundColor = "#79A449"
        }
        if(api_data.types[0].type.name == 'normal')
        {
            flip_card_front.style.backgroundColor = "#A9B0B3"
            flip_card_back.style.backgroundColor = "#A9B0B3"
        }
        if(api_data.types[0].type.name == 'poison')
        {
            flip_card_front.style.backgroundColor = "#BD86CC"
            flip_card_back.style.backgroundColor = "#BD86CC"
        }
        if(api_data.types[0].type.name == 'electric')
        {
            flip_card_front.style.backgroundColor = "#EFD73F"
            flip_card_back.style.backgroundColor = "#EFD73F"
        }
        if(api_data.types[0].type.name == 'ground')
        {
            flip_card_front.style.backgroundColor = "#F7E049"
            flip_card_back.style.backgroundColor = "#F7E049"
        }
        if(api_data.types[0].type.name == 'fairy')
        {
            flip_card_front.style.backgroundColor = "#FDBDEA"
            flip_card_back.style.backgroundColor = "#FDBDEA"
        }
        if(api_data.types[0].type.name == 'fighting')
        {
            flip_card_front.style.backgroundColor = "#D76F2E"
            flip_card_back.style.backgroundColor = "#D76F2E"
        }
        if(api_data.types[0].type.name == 'psychic')
        {
            flip_card_front.style.backgroundColor = "#F46EBD"
            flip_card_back.style.backgroundColor = "#F46EBD"
        }
        if(api_data.types[0].type.name == 'rock')
        {
            flip_card_front.style.backgroundColor = "#A8922C"
            flip_card_back.style.backgroundColor = "#A8922C"
        }
        if(api_data.types[0].type.name == 'ghost')
        {
            flip_card_front.style.backgroundColor = "#826AA8"
            flip_card_back.style.backgroundColor = "#826AA8"
        }
        if(api_data.types[0].type.name == 'ice')
        {
            flip_card_front.style.backgroundColor = "#5AC7E8"
            flip_card_back.style.backgroundColor = "#5AC7E8"
        }
        if(api_data.types[0].type.name == 'dragon')
        {
            flip_card_front.style.backgroundColor = "#DCAA2B"
            flip_card_back.style.backgroundColor = "#DCAA2B"
        }
}
        
ShowPokemons(151);

//Filter by Types::

const filter_Type = document.getElementById('filterType');
const selectElement = document.getElementById("mySelect");

filter_Type.addEventListener("click", function () {
    const selectedOption = selectElement.value;

    if(selectedOption === 'Types'){
        failaudio.play()
        alert('Select the type of Pokemon!')
    }
    //Grass--YS
    if(selectedOption === 'Grass'){
        async function grass(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        grass()
        audio.play();
    }
    //Fire--YS
    if(selectedOption == 'Water'){
        async function water(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        water()
        audio.play();
    }
    //Water--YS
    if(selectedOption == 'Fire'){
        async function fire(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        fire()
        audio.play();
    }
    //Bug--YS
    if(selectedOption == 'Bug'){
        async function bug(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        bug()
        audio.play();
    }
    //Normal--YS
    if(selectedOption == 'Normal'){
        async function Normal(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Normal()
        audio.play();
    }
    //Poison--YS
    if(selectedOption == 'Poison'){
        async function Poison(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Poison()
        audio.play();
    }
    //Electric--YS
    if(selectedOption == 'Electric'){
        async function Electric(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Electric()
        audio.play();
    }
    //Ground--YS
    if(selectedOption == 'Ground'){
        async function Ground(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Ground()
        audio.play();
    }
    if(selectedOption == 'Fairy'){
        async function Fairy(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Fairy()
        audio.play();
    }
    if(selectedOption == 'Fighting'){
        async function Fighting(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Fighting()
        audio.play();
    }
    if(selectedOption == 'Rock'){
        async function Rock(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Rock()
        audio.play();
    }
    if(selectedOption == 'Ghost'){
        async function Ghost(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Ghost()
        audio.play();
    }
    if(selectedOption == 'Ice'){
        async function Ice(){
            const PokArray = [];
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();
                
                PokArray.push(api_data);

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Ice()
        audio.play();
    }
    if(selectedOption == 'Dragon'){
        async function Dragon(){
            for(let i = 1; i <= 151; i++){
                const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const api_data = await api_poke.json();

                let dataCheck = api_data.types[0].type.name.includes(selectedOption.toLowerCase());
                if(dataCheck){
                    PokemonCards(api_data);
                }
            }
        }
        container.textContent = '';
        Dragon()
        audio.play();
    }
    console.log("Selected option: " + selectedOption);
});
const reset = document.getElementById('reset')
reset.addEventListener("click", function () {
    window.location.reload();
})
function clear(){
    window.location.reload();
}
//Search By Name::---YSS----
const SearchByName = document.getElementById('SearchName');
SearchByName.addEventListener("keyup", function (e) {
    e.preventDefault();
    const searchName = document.getElementById('myInput');
    let searchTerm = searchName.value;
    searchTerm = searchTerm.toLowerCase();

    async function data(){
        const PokArray = [];
        for(let i = 1; i <= 151; i++){
            const api_poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const api_data = await api_poke.json();

            PokArray.push(api_data)
        }
        const searchpok = PokArray.filter(pokemon => pokemon.name.includes(searchTerm))

        // console.log(searchpok)
        searchpok.forEach(Element=>{
            PokemonCards(Element)
        })
    }
    container.textContent = '';
    data();
})
