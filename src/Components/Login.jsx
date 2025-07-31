/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const InputField = ({
  id,
  type,
  placeholder,
  icon: Icon,
  value,
  onChange,
  autoComplete,
}) => (
  <div className="input-field">
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      autoComplete={autoComplete}
    />
    <Icon className="icon" />
  </div>
);

const PasswordField = ({
  id,
  placeholder,
  icon: Icon,
  value,
  onChange,
  showPassword,
  togglePassword,
  autoComplete,
}) => (
  <div className="input-field password-wrapper">
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      id={id}
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      autoComplete={autoComplete}
    />
    <Icon className="icon" />
    <button type="button" className="toggle-password" onClick={togglePassword}>
      {showPassword ? "Ocultar" : "Mostrar"}
    </button>
  </div>
);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!username.includes("@")) {
      setErrorMessage("Digite um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);
      // Simulando requisição de login
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Dados enviados:", { username, password, remember });
    } catch (error) {
      setErrorMessage("Erro ao tentar fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className={loading ? "form-blur" : ""}>
        <h1>Acesse o sistema</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <InputField
          id="email"
          type="email"
          placeholder="E-mail"
          icon={FaUser}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="email"
        />

        <PasswordField
          id="password"
          placeholder="Senha"
          icon={FaLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          togglePassword={() => setShowPassword(!showPassword)}
          autoComplete="current-password"
        />

        <div className="recall-forget">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Lembrar de mim
          </label>
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner"></span> Entrando...
            </>
          ) : (
            "Entrar"
          )}
        </button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <Link to="/register">Registrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
