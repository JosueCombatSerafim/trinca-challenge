import { useState } from "react";
import styles from "../Login/login.module.scss";
import datas from "../../datas/loginDatas.json";

interface ILogin {
  handleLoggin: () => void;
}

const Login = ({ handleLoggin }: ILogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ type: "", message: "" });

  const handleSubmit = () => {
    datas.users.map((user) => {
      if (user.email == email) {
        if (user.password == password) {
          handleLoggin();
        } else {
          setError({ type: "password", message: "Senha incorreta" });
        }
      } else {
        setError({ type: "e-mail", message: "Usuário não encontrado" });
      }
    });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.inputLoginContainer}>
        <span className={styles.inputSpan}>Login</span>
        <input
          className={styles.loginInput}
          type="text"
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={styles.errorMessageInput}>
          {error.type == "e-mail" && error.message}
        </span>
      </div>
      <div className={styles.inputLoginContainer}>
        <span className={styles.inputSpan}>Senha</span>
        <input
          className={styles.loginInput}
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={styles.errorMessageInput}>
          {error.type == "password" && error.message}
        </span>
      </div>

      <button className={styles.loginSubmitButton} onClick={handleSubmit}>
        Entrar
      </button>
    </div>
  );
};

export default Login;
