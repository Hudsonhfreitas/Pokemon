
        document.getElementById('buscar').addEventListener('click', buscarNome);
        const tipos = document.querySelectorAll('.tipo');

        tipos.forEach( tipo => {
            tipo.addEventListener('click', () => {
                buscarTipo(tipo.id)
            });
        })

    
        function buscarNome () {

            const pokemon = document.getElementById('pokemonInput').value;
            document.getElementById('container').innerHTML = "";

            var myInit = { 
            method: 'GET',
            mode: 'cors',
            cache: 'default'
            };

            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        
            fetch(url, myInit)
                .then((response) => {
                    return response.json();
                    
                })
                .then((data) => {
                    console.log(data)
                    var card = document.createElement('div');
                    var h1 = document.createElement('h1');
                    var img = document.createElement('img');
                    var h3 = document.createElement('h3');
                    card.id=`card${data.id}`;
                    card.classList = "card";
                    h1.id=`nome${data.id}`;
                    img.id=`imagem${data.id}`;
                    h3.id=`numero${data.id}`;

                    card.appendChild(h1);
                    card.appendChild(img);
                    card.appendChild(h3);
                    document.getElementById('container').appendChild(card);

                    document.getElementById(`nome${data.id}`).innerHTML = data['name'];
                    document.getElementById(`imagem${data.id}`).setAttribute('src',data['sprites']['front_default']);
                    document.getElementById(`numero${data.id}`).innerHTML = data['id'];
                
                });
            
        } 
                

                function buscarTipo(tipo) {
                    let i = 0;
                    document.getElementById('container').innerHTML = "";

                    var myInit = { 
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
                    };


                        const url = `https://pokeapi.co/api/v2/type/${tipo}`;
                    
                        fetch(url, myInit)
                            .then((response) => {
                                return response.json();
                                
                            })
                            .then((data) => {
                                
                                do {

                                var card = document.createElement('div');
                                var h1 = document.createElement('h1');
                                var img = document.createElement('img');
                                var h3 = document.createElement('h3');
                                card.id=`card`+i;
                                card.classList = "card";
                                h1.id=`nome`+data.pokemon[i]['pokemon']['name'];
                                img.id='imagem'+data.pokemon[i]['pokemon']['name'];
                                h3.id='numero'+data.pokemon[i]['pokemon']['name'];
                                
                                card.appendChild(h1);
                                card.appendChild(img);
                                card.appendChild(h3);
                                
                                document.getElementById('container').appendChild(card);

                                document.getElementById(`nome`+data.pokemon[i]['pokemon']['name']).innerHTML = data.pokemon[i]['pokemon']['name'];

                                var urlpokemon = data.pokemon[i]['pokemon']['url'];

                                formataUrl(urlpokemon);

                                i++;

                              }
                                    while(i < data.pokemon.length)
                                    
                            })
                            
                 };

                 function formataUrl(urlpokemon) {

                    var myInit = { 
                            method: 'GET',
                            mode: 'cors',
                            cache: 'default'
                            };

                    const url = urlpokemon;

                    fetch(url, myInit)
                    .then(response => response.json())
                    .then(dado => {

                        document.querySelector(`#imagem${dado.name}`).setAttribute('src', dado['sprites']['front_default']); 
                        document.querySelector(`#numero${dado.name}`).innerHTML = dado.id; 
                        

                    })

                    

                 }


