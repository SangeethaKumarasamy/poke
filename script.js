
async function foo(){
  let poke=await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=1&limit=50`);
  //console.log(poke);
  let pokedata=await poke.json();
 // console.log(pokedata);
 
  let count_poke=pokedata.results;
 //console.log(count_poke);

 for(let i =0;i<50; i++){
 
     // console.log(data[i].id)
            
 //Display around 50 pokemons
 let names=(`name: ${count_poke[i].name}`);
 //console.log(names);

 let details=await fetch(`${count_poke[i].url}`);
 let eachDataDetails=await details.json();
   //console.log(eachDataDetails);

 //Each pokemon’s ability needs to be listed.
 let abi1=eachDataDetails.abilities[0];
  let abil1=abi1.ability.name;
  let abi2=eachDataDetails.abilities[1];
  let abil2=abi2.ability.name;
 let ability=(`0:${abil1} 1:${abil2}`);
 // console.log(ability);


 
 //Display the pokemon’s moves.
 let moves=eachDataDetails.moves[0];
 let move=moves.move.name;
 // console.log(move);
 

 //Also display the weight of each pokemon

 let wt=(`${eachDataDetails.weight}`);
 //console.log(wt);
 
    var namepoke=document.createElement("div");
 namepoke.ClassName="Name_of_the_Pokemon";

 var abipoke=document.createElement("div");
 abipoke.className = "abilities";

 var pokemove=document.createElement("div");
 pokemove.className="Moves";

 var wtpoke=document.createElement("div");
 wtpoke.className="Weight";


 var pokeHead=document.createElement("div");
 pokeHead.className="POKE";
 pokeHead.innerText = "POKEMONS";
 namepoke.append(pokeHead);
for(i in count_poke) {
     const pokeContainer = document.createElement("div");
     pokeContainer.className = "Card";
     pokeContainer.innerHTML = 
     `<div class="name">${names}</div>
     <div>Ability--  </div>
     <div>${ability}</div>
     <div>Moves--</div>
     <div>${move}</div>
     <div>weight--</div>
     <div>${wt}</div>
     </div>`;
      namepoke.append(pokeContainer);
 };
 document.body.append(namepoke);




 

 }

 


 

}
foo();