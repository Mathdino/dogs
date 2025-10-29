import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../../Components/Forms/Input";
import Button from "../../Components/Forms/Button";
import useForm from "../../Hooks/useForm";
import { PHOTO_POST } from "../../api";
import Error from "../../Components/Helper/Error";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Head from "../../Components/Helper/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    formData.append("img", img.raw);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange(e) {
    setImg({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head
        title="Poste sua foto"
        description="Poste sua foto do seu cachorro"
      />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" name="nome" type="text" {...nome} />
        <Input label="Peso" name="peso" type="number" {...peso} />
        <Input label="Idade" name="idade" type="number" {...idade} />
        <input
          name="img"
          type="file"
          id="img"
          onChange={handleImgChange}
          className={styles.file}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Postar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
