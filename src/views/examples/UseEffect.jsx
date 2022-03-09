import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

//useEffect = se passarmos uma função dentro de nossa função (calcFatorial) para setar o valor e mudar o estado isto irá gerar um loop infinito, o useEffect é usado para setar o valor (no caso number) e chamar a função externa (calcFatorial) sempre que se quiser alterar o estado sem gerar um erro de loop infinito.
//setFatorial (dentro do useEffetct): executa a função (calcFatorial) de acordo com a propriedade passada (number), sendo que number entre chaves [number] representa a dependecia da função com o hook useEffect. Sempre que number mudar, chamará a função.

const UseEffect = (props) => {
    //Exemplo #01
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    //Exemplo para mudar o nome da página (aba)
    useEffect(function () {
        if (fatorial > 1000000) {
            document.title = "Exemplo useEffect!"
        }
    }, [fatorial])

    //Exemplo #02
    const [status, setStatus] = useState("")

    useEffect(function () {
        setStatus(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title='Exemplo #01' />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe Para Números Negativos' : fatorial}</span>
                </div>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title='Exemplo #02' />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
