import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, password });
      navigate("/login");
    } catch (error) {
      setError("Kayıt başarısız. Lütfen tekrar deneyin.");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center"> Kayıt Ol</h1>
        {error && <p className="text-red-500 text-sm ">{error} </p>}
        <form onSubmit={handleRegister}>
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
          >
            Kayıt Ol
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Zaten bir hesabınız var mı?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline cursor-pointer "
            >
            Giriş Yap
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
