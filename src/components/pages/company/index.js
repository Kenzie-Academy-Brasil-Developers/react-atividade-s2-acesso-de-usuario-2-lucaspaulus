import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css"

export default function Company({ pessoas }) {
    const params = useParams();
    const member = pessoas.find((pessoa) => pessoa.id === params.id);
    console.log(member)
    return (
        <div className="Company">
            <div className="Company__display">
                <h1 className="Company__title">Detalhes da Empresa</h1>
                <p className="Company__description"> Nome da empresa: {member && member.name}</p>
            </div>
            
            <Link className="Company__btn" to="/">Voltar</Link>
        </div>
    );
}
