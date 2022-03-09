import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

export default function UseState(props) {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    return (

        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exemplo #01" />
                <div className="center">
                    <span className="text">{ count }</span>
                    <div>
                        <button className="btn" onClick={()=>setCount(count -1)}>-1</button>
                        <button className="btn" onClick={()=>setCount(count +1)}>+1</button>
                        <button className="btn" onClick={()=>setCount(1000)}>1000</button> {/* seta a partir do 1000 */}
                        <button className="btn" onClick={()=>setCount(current => current + 1000)}>+1000</button> {/* seta a partir do 1000 */}
                    </div>
                </div>

            <SectionTitle title="Exemplo #02" />
        <input type="text" className="input" 
            value={name} onChange={e=>setName(e.target.value)}
        />
        <span className="text">{name}</span>


        </div>
    )
}    

