
document.addEventListener('DOMContentLoaded',()=>{
    const url = `https://swapi.dev/api/people/`

    // PESSOAS QUE PRECISAM DE CHVAE PARA O API
//     const api_key = 'Chave disponibilizada pela api'
//     fetch(url, {headers:{
//         'x-api-key': api_key
//     }})
fetch(url)
.then((response)=>{
    if(!response.ok){
        throw new Error('Erro ao receber os dados')
    }
    return response.json()
})
.then((data)=>{
    renderizarPersonagens(data)
})
.catch((err)=>console.log(err))
 })

 function renderizarPersonagens(items){
    const container = document.getElementById("personagem-container");

    items.results.forEach((item, index)=>{
        const divPersonagens = document.createElement('div');
        divPersonagens.innerHTML = `
        <div class="personagem-caixa">
            <img src="/image/perso${index}.png">
        <div>
            <h3>${item.name}</h3>
        </div>
    </div>    
    
    `
    divPersonagens.classList.add('personagem')
    container.appendChild(divPersonagens)
    })
 }