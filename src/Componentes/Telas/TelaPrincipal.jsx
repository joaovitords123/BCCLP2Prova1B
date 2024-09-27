import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";
export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false)
    const [fichaCandidatos, setFichaCanditados] = useState(listaCandidatos);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState({
        id: 0,
        email: "",
        nome: "",
        avatar: "",
        propostas:[],
        curtidas: 0,
        descurtidas :0,
        questionamentos :[]
    });
    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato fichaCandidatos={fichaCandidatos}
                                        setFichaCanditados={setFichaCanditados}
                                        setDetalharCandidato={setDetalharCandidato}
                                        setCandidatoSelecionado={setCandidatoSelecionado}
                                        />
                ) : (
                    <GridCandidatos fichaCandidatos={fichaCandidatos}
                                    setFichaCanditados={setFichaCanditados}
                                    setDetalharCandidato={setDetalharCandidato}
                                    candidatoSelecionado={candidatoSelecionado}
                                    setCandidatoSelecionado={setCandidatoSelecionado}/>
                )
            }
        </Pagina>
    );
}