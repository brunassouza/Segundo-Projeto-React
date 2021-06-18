import React, {useState, useEffect} from 'react'

const Filtro = () => {
    const [personagens, setPersonagem] = useState([]) //renderiza os personagens na tela
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('') //useState é como começa

useEffect(()=> {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(resposta => resposta.json())
    .then(dados => setPersonagem(dados))

},[])


useEffect(()=>{
    setFiltroPersonagem(
        personagens.filter(personagem => {
            return personagem.name.includes(busca) //quero quw filtre o personagem que tem o nome que esteja incluso no termo digitado na busca, no target
        })
    )
}, [busca, personagens]) //acontece quando esas variaveis modificarem



return (
    <>
    <input placeholder="Digite um personagem" onChange={e=>{setBusca(e.target.value)}}/>
    {filtroPersonagem.map(personagem => (
        <div> {/* se tivesse um id teria: key={personagem.char_id}*/}
        <p>{personagem.name}</p>
        <img src={personagem.image} alt={personagem.name}/> 
        </div>
    ))}
    </>
) 
    }

export default Filtro