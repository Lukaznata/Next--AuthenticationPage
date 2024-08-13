import { useEffect, useState } from "react";

import AuthInput from "../components/auth/AuthInput";
import { WarnIcon } from "../components/icons";

import useAuth from "../data/hook/useAuth";

export default function Authentication() {
  const { toRegister, toLogin, toLoginWithGoogle } = useAuth();

  const [mode, setMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>("");
  const [password, setPassword] = useState("");

  const toSubmit = async () => {
    try {
      if (mode === "login") {
        toLogin && (await toLogin(email, password));
      } else {
        toRegister && (await toRegister(email, password));
      }
    } catch (error: unknown | null) {
      if (error instanceof Error) {
        toExhibitError(
          error?.message ?? "Ocorreu um erro, tente novamente mais tarde."
        );
      } else {
        console.error("Ocorreu um erro, tente novamente mais tarde.");
      }
    }
  };

  const toExhibitError = (msg: string, timeInSeconds = 5) => {
    setError(msg);
    setTimeout(() => {
      setError(null);
    }, timeInSeconds * 1000);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://picsum.photos/2000"
          alt="Imagem da Tela de Autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1
          className={`
        text-3xl font-bold mb-5`}
        >
          {mode === "login"
            ? "Entre Com a Sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>

        {error ? (
          <div
            className={`
          bg-red-400 text-white py-3 px-5 my-2
          border border-red-700 rounded-lg
          flex 
          `}
          >
            {WarnIcon(25)}
            <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="E-mail"
          value={email}
          type="email"
          valueChanged={setEmail}
          required
        />
        <AuthInput
          label="Senha"
          value={password}
          type="password"
          valueChanged={setPassword}
          required
        />

        <button
          onClick={toSubmit}
          className={`
        w-full bg-indigo-500  hover:bg-indigo-400
        text-white rounded-lg px-4 py-3 mt-6
        `}
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={toLoginWithGoogle}
          className={`
        w-full bg-red-500  hover:bg-red-400
        text-white rounded-lg px-4 py-3
        flex gap-4 justify-center items-center 
        `}
        >
          <img
            src="icons/google.svg"
            alt="Icone do google"
            className="bg-white rounded-full p-1"
          />
          Entrar com Google
        </button>

        {mode === "login" ? (
          <p className="mt-8 text-center">
            Novo por aqui?
            <a
              onClick={() => {
                setMode("register");
                setError(null);
              }}
              className={`
              text-blue-500 hover:text-blue-700 
              font-semibold cursor-pointer
              `}
            >
              {" "}
              Criar uma conta Gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8 text-center">
            Ja faz parte da nossa comunidade?
            <a
              onClick={() => {
                setMode("login");
                setError(null);
              }}
              className={`
            text-blue-500 hover:text-blue-700 
            font-semibold cursor-pointer
            `}
            >
              {" "}
              Entre com as suas Credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
