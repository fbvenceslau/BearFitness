/* eslint-disable @next/next/no-sync-scripts */
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import CustomButton from "@/components/common/buttons/customButton";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Title from "@/components/common/title";
import Footer from "@/components/common/footer";
import ToastComponent from "@/components/common/toast";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import authService from "@/service/authService";

const Login = function(){
  const router = useRouter();
  const [toastColor, setToastColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const registerSucess = router.query.registred;
    if (registerSucess === "true") {
      setToastColor("bg-success")
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage("Cadastro feito com sucesso!.");
    }
  }, [router.query]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };

    const { status } = await authService.login(params);

    if (status === 200) {
      router.push("/home");
    } else {
      setToastColor("bg-danger");
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage("Email ou senha incorretos!");
    }
  }
  
  return (<>
    <Head>
      <title>Bear Fitness - Registro</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <script src="https://jsuites.net/v4/jsuites.js"></script>
    </Head>
    <main className={styles.main}>
      <div>
        <Container className="py-5">
          <div className={styles.sectionBtn}>
            <CustomButton link={"/"} text={"Voltar"}/>
          </div>
          <Title title={"Bem-vindo(a) a Bear Fitness!"}/>
          <Form  onSubmit={handleLogin} className={styles.form}>
            <p className={styles.description}><strong>Faça o seu cadastro!</strong> </p>
            <FormGroup>
              <Label for="email" className={styles.label}>E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite o seu email"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Digite a sua senha (Min: 6 | Max: 20)"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              Login
            </Button>
          </Form>
        </Container>
        <Footer/>
        <ToastComponent color={toastColor} isOpen={toastIsOpen} message={toastMessage}/>
      </div>
    </main>
  </>)
};

export default Login;