import { useState, useEffect } from "react";
import api from "../services/api";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h1`
  text-align: center;
  font-family: "Great Vibes", serif;
    font-weight: 800;
    font-style: normal;
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background: #f4f4f4;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Botao = styled.button`
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Avaliacoes() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [nome, setNome] = useState("");
  const [estrelas, setEstrelas] = useState("");
  const [comentarios, setComentarios] = useState("");

  
  useEffect(() => {
    async function carregarAvaliacoes() {
      try {
        const resposta = await api.get("/avaliacoes");
        setAvaliacoes(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar avaliações", erro);
      }
    }
    carregarAvaliacoes();
  }, []);

  
  async function enviarAvaliacao(evento) {
    evento.preventDefault();

    if (!nome || !estrelas || !comentarios) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const resposta = await api.post("/avaliacoes", {
        nome,
        estrelas: parseInt(estrelas),
        comentarios,
      });

      setAvaliacoes([...avaliacoes, resposta.data]);

      
      setNome("");
      setEstrelas("");
      setComentarios("");
    } catch (erro) {
        if (erro.response) {
          console.error("Erro ao enviar avaliação:", erro.response.data);
          alert(`Erro: ${erro.response.data.message || "Falha ao enviar avaliação"}`);
        } else {
          console.error("Erro ao conectar com a API:", erro);
          alert("Erro ao conectar com a API");
        }
      }

  }

  return (
    <Container>
      <Titulo>Avaliações de Clientes</Titulo>

      <Formulario onSubmit={enviarAvaliacao}>
        <Input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Estrelas (1 a 5)"
          value={estrelas}
          onChange={(e) => setEstrelas(e.target.value)}
          min="1"
          max="5"
        />
        <Textarea
          placeholder="Seu comentário"
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />
        <Botao type="submit">Enviar Avaliação</Botao>
      </Formulario>

      <Lista>
        {avaliacoes.map((avaliacao) => (
          <Item key={avaliacao.id}>
            <strong>{avaliacao.nome}</strong> ({avaliacao.estrelas}⭐⭐⭐⭐⭐)
            <p>{avaliacao.comentarios}</p>
          </Item>
        ))}
      </Lista>
    </Container>
  );
}

export default Avaliacoes;
