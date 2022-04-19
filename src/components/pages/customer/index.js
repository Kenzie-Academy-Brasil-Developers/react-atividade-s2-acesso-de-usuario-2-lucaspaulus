import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css"

export default function Customer({ pessoas }) {
    const params = useParams();
    const member = pessoas.find((pessoa) => pessoa.id === params.id);

    return (
        <div className="Customer">
            <div className="Custumer__display">
                <h1 className="Customer__title">Detalhes do cliente</h1>

                <p className="Customer__description">Nome: {member && member.name}</p>
            </div>
          

            <Link className="Customer__btn" to="/">Voltar</Link>
        </div>
    );
}
