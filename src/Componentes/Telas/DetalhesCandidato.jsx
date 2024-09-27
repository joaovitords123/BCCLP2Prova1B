import { Container } from "react-bootstrap";
import { Button, Table } from "react-bootstrap"
import Candidato from "./elementos/Candidato";
import { Alert } from "react-bootstrap";
import Pagina from '../layouts/Pagina'
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";

export default function DetalhesCandidato(props) {
    function detalhes(candidato)
    {
        props.listaCandidatos(candidato);
    }

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            { 
                <div>
                <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Nome</th>
                  <th>Avatar</th>
                  <th>Propostas</th>
                  <th>Curtidas</th>
                  <th>Descurtidas</th>
                  <th>Questionamentos</th>
                </tr>
              </thead>
              <tbody>
                {props.listaCandidatos((candidatos)=>{
                    return <tr key={candidatos.id}>
                        <td>{candidatos.email}</td>
                        <td>{candidatos.nome}</td>
                        <td>{candidatos.avatar}</td>
                        <td>{candidatos.propostas}</td>
                        <td>{candidatos.curtidas}</td>
                        <td>{candidatos.descurtidas}</td>
                        <td>{candidatos.questionamentos}</td>
                    </tr>
                })}
              </tbody>
              </Table>
              <Button onClick={()=>{
                props.Pagina(false);
              }}>Voltar</Button>
              </div>
            }
        </Container>
    );
}