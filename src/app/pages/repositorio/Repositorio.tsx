import { useEffect, useState } from "react"

export const ListaDeRepositorios = () =>{
    const [repositorio, setRepositorio] = useState([])


    useEffect(() => {
        async function carregarRepositorios () {
            const resposta = await fetch('https://api.github.com/users/Vianahdev/repos')
            const repositorios = await resposta.json()

            setRepositorio(repositorios)
        }

        carregarRepositorios()
    }, [])

    return(
        <>
          <ul>
            {repositorio.map(repositorio => (
              <a href={repositorio['html_url']}>
                <li key={repositorio['id']}>
                    {repositorio['name']}
                </li>
              </a>
            ))}
          </ul>
        </>
    )
}