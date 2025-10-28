import React, { useState } from "react";

const PhotoPost = () => {
  const [token, setToken] = useState("");
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);
    formData.append("img", img);

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Token:
          <input
            placeholder="Token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </label>

        <label>
          Nome:
          <input
            placeholder="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          Peso:
          <input
            placeholder="Peso"
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
        <label>
          Idade:
          <input
            placeholder="Idade"
            type="text"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </label>
        <label>
          Imagem:
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default PhotoPost;
