import Head from "next/head";
import styles from "../styles/Home.module.css";
import classes from "../styles/ScoreCard.module.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Home(props) {
  const formik = useFormik({
    initialValues: {
      files: "",
      ref: "",
      refId: "",
      field: "",
    },
    validationSchema: Yup.object({
      files: Yup.mixed().required("Image is required"),
      ref: Yup.string(),
      refId: Yup.string(),
      field: Yup.string(),
    }),
    onSubmit: async (values) => {
      console.log("submithandler");
      const token = localStorage.getItem("token1");
      const { ref, refId, field, files } = values;

      console.log("token", token);
      console.log("values", values);

      let formData;
      if (files.length === 1 && ref.length && refId.length && field.length) {
        console.log("single file to contenct type")
        formData = new FormData();
        files.forEach((file) => {
          formData.append("files", file);
        });
        formData.append("ref", ref);
        formData.append("refId", refId);
        formData.append("field", field);
      }

      if (!ref && !refId && !field.length) {
        console.log("single file to media")
        formData = new FormData();
        formData.append("files", files);
      }

      if (
        files.length > 1 &&
        ref &&
        refId &&
        field.length
      ) {
   
        console.log("multi files")


        formData = new FormData();
        files.forEach((file) => {
          formData.append("files", file);
        });

        formData.append("ref", ref);
        formData.append("refId", refId);
        formData.append("field", field);
      }

      // this is the file object
      const req = await fetch(`http://localhost:1337/upload`, {
        method: "POST",
        Authorization: "Bearer" + token,
        body: formData,
      });
      const res = await req.json();
      console.log("file upload", res);
    },
  });

  // console.log('HomeProps', props)
  const [articles, setArticles] = useState([]);

  const getArticleHandler = async () => {
    const token = localStorage.getItem("token1");
    console.log("token", token);
    // console.log('token', token)
    const response = await fetch("http://localhost:1337/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    // console.log('data', data)
    setArticles(data);
  };
  // console.log('articles', articles)

  return (
    <div className={styles.container}>
      <Head>
        <title>Strap App</title>
        <meta name="description" content="Strapi + nextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={classes.mainheader}>ScoreBoard</h1>
      <button className={classes.button}>
        <a href="https://ccaa-101-98-153-53.ngrok.io/connect/google">Login</a>
      </button>
      <main className={styles.main}>
        <button onClick={getArticleHandler}>Get Protected Articles</button>

        {/* {articles.map(article => (
          <div className={classes.card}>
            <h2>{article.title}</h2>
          </div>
        ))} */}

        <div className={classes.card}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="file">File</label>
            <input
              id="file"
              name="file"
              type="file"
              multiple
              onChange={(event) => {
                formik.setFieldValue("files", Array.from(event.currentTarget.files));
              }}
             
            />
           
            {formik.errors.file ? <div>{formik.errors.file}</div> : null}
            <label htmlFor="ref">Ref</label>
            <input
              id="ref"
              name="ref"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.ref}
            />
            {formik.errors.ref ? <div>{formik.errors.ref}</div> : null}
            <label htmlFor="refId">RefId</label>
            <input
              id="refId"
              name="refId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.refId}
            />
            {formik.errors.refId ? <div>{formik.errors.refId}</div> : null}
            <label htmlFor="field">Field</label>
            <input
              id="field"
              name="field"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.field}
            />
            {formik.errors.field ? <div>{formik.errors.field}</div> : null}
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={classes.container}>
          <div className={classes.scoreCard}>
            {props.games.map((game, index) => {
              return (
                <>
                  <h1>{game.title}</h1>
                  {game.scores.map((score, index) => {
                    return (
                      <>
                        <h2>{score.player}</h2>
                        <p>{score.score}</p>
                      </>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const gamesReq = await fetch("http://localhost:1337/games");
  const games = await gamesReq.json();
  // console.log('games', games)

  return {
    props: {
      games: games,
    },
  };
};
