import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Kullanıcı adı ve şifre boş bırakılamaz.");
      return;
    }

    try {
      setIsLoading(true);
      const { token } = await loginUser({ username, password });
      localStorage.setItem("token", token);
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      setError("Giriş başarısız. Lütfen tekrar deneyiniz.");
    }
  };
  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center"> Giriş Yap</h1>
        {error && <p className="text-red-500 text-sm ">{error} </p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Şifre"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
            disabled={isLoading}
          >
           {isLoading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Hesabınız yok mu?{" "}
            <span
              onClick={handleNavigateToRegister}
              className="text-blue-600 hover:underline cursor-pointer "
            >
              Kayıt Ol
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
