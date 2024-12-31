/* eslint-disable @next/next/no-sync-scripts */
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import CustomButton from "@/components/common/buttons/customButton";
import Footer from "@/components/common/footer";
import Title from "@/components/common/title";
import { FormEvent, useState } from "react";
import authService from "@/service/authService";
import { useRouter } from "next/router";
import ToastComponent from "@/components/common/toast";

const Register = function(){
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const firstName = formData.get("firstName")!.toString();
    const lastName = formData.get("lastName")!.toString();
    const phone = formData.get("phone")!.toString();
    const whatsapp = formData.get("whatsapp")!.toString();
    const birth = formData.get("birth")!.toString();
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const confirmPassword = formData.get("confirmPassword")!.toString();
    const params = { firstName, lastName, phone, whatsapp, birth, email, password };

    if (password != confirmPassword) {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage("Senha e confirmação diferentes.");
          
      return;
    }

    const { data, status }= await authService.register(params);

    if (status === 201) {
      router.push("/login?registred=true");
    } else {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage(data.message);
    }
    
  }; 

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
          <Form  onSubmit={handleRegister} className={styles.form}>
            <p className={styles.description}><strong>Faça o seu cadastro!</strong> </p>
            <FormGroup>
              <Label for="firstName" className={styles.label}>Nome</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Digite o seu nome?"
                required
                maxLength={20}
                className={styles.inputName}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="lastName" className={styles.label}>Sobrenome</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Qual o seu sobrenome?"
                required
                maxLength={20}
                className={styles.inputName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone" className={styles.label}>Telefone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(xx) 9xxxx-xxxx"
                data-mask="[-]+55 (00) 00000-0000"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="whatsapp" className={styles.label}>WhatsApp</Label>
              <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="(xx) 9xxxx-xxxx"
                  data-mask="[-]+55 (00) 00000-0000"
                  required
                  className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="birth" className={styles.label}>Data de nascimento</Label>
              <Input
                id="birth"
                name="birth"
                type="date"
                min="1930-01-01"
                max="2020-12-31"
                required
                className={styles.input}
              />
            </FormGroup>
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
            <FormGroup>
              <Label for="confirmPassword" className={styles.label}>Confirme a sua senha</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme a sua senha"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              Cadastrar
            </Button>
            <CustomButton link={"/login"} text={"Entrar"}/>
          </Form>
        </Container>
        <Footer/>
        <ToastComponent color="bg-danger" isOpen={toastIsOpen} message={toastMessage}/>
      </div>
    </main>
  </>)
};

export default Register;