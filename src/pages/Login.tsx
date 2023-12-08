import { useState, useEffect } from "react";

import loginBg from "../assets/login_bg.png";
import { postLogin } from "@/utils/fetchData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    const data = await postLogin({ email, password });
    if (!data) return new Error("Error data not found after login");
    localStorage.setItem("TOKEN", data.token);
    window.location.href = "/";
  };

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-12 items-center">
      {/* FORM LOGIN */}
      <div
        className="px-10 py-12 rounded-[9px] h-max w-full"
        style={{ boxShadow: "0px 0px 40px 0px rgba(239, 240, 241, 0.70)" }}
      >
        <h2 className="text-center text-[26px] text-[#181C32] font-bold">
          Sign In
        </h2>

        <div className="mt-8 flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm text-[#3F4254] font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              className="px-4 py-3 bg-[#F5F8FA] border-none rounded-[6px]"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm text-[#3F4254] font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              value={email}
              className="px-4 py-3 bg-[#F5F8FA] border-none rounded-[6px]"
            />
          </div>
        </div>

        <button
          type="button"
          className="mx-auto text-center flex mt-10 px-8 py-4 bg-[#212121] text-white rounded-[6px]"
          onClick={login}
        >
          Sign In
        </button>
      </div>
      <div className="order-1 -order-1">
        <img src={loginBg} alt="login" className="mix-blend-multiply" />
      </div>
    </div>
  );
};

export default Login;
