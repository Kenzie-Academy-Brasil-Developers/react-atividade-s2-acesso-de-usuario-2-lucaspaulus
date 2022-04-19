import { Link } from "react-router-dom"
import "./index.css"

export default function Home({pessoas}){
    return(
        <div className="Home">
            <ul className="Home__peopleList">
                {
                    pessoas.map((pessoa)=>(
                       // <li key={pessoa.id} to={}></li>
                       pessoa.type === "pj" 
                            ?
                            <li className="Home__ListContainer" key={pessoa.id}>
                                <Link className="Home__pessoa-link" to={`/company/${pessoa.id}`}>
                                Membro
                                    <p className="Home__pessoaType">
                                        {pessoa.type.toUpperCase()}
                                    </p>
                                </Link>
                            </li>
                          
                            :
                            <li className="Home__ListContainer" key={pessoa.id}>
                                <Link className="Home__pessoa-link" to={`/customer/${pessoa.id}`}>
                                Membro
                                    <p className="Home__pessoaType">
                                        {pessoa.type.toUpperCase()}
                                    </p>
                                </Link>
                            </li>
                                            
                        
                    ))
                }
            </ul>

        </div>
    )
}