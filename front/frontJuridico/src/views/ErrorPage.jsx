import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      navigate("/");
    }, 5000);

    return () => clearInterval(countdownInterval);
  }, [navigate]);

  return (
    <section className="container d-grid gap-3  ">
      <h2 className="text-center">Upss, pagina no encontrada! </h2>
      <p className="text-center">
        {" "}
        Serás redireccionado a la pagina principal.
      </p>
      <h3 className="text-center">{countdown}</h3>
      <img src="/logo.svg" alt="Logo" className="w-30 mx-auto" />
    </section>
  );
};

export default ErrorPage;
