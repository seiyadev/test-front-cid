import React from "react";
import { satoshiRegular } from "../fonts";

function Main() {
  return (
    <div className="flex flex-col -mt-32 z-10">
      <div
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "#121214",
          background:
            "linear-gradient(0deg, #121214 14.71%, rgba(18, 18, 20, 0.00) 100%)",
        }}
      />
      <div
        className="pl-6 pr-6 z-10"
        style={{
          backgroundColor: "#121214",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            fontSize: "90px",
          }}
        >
          <h1>agencia</h1>
          <h1>dev</h1>
          <h1>mkt</h1>
          <h1>escuela</h1>
        </div>

        <span
          style={{
            fontSize: "14px",
          }}
        >
          sobre nosotros
        </span>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 600,
          }}
          className={satoshiRegular.className}
        >
          CENTRO INTEGRAL DE DISEÑO
        </h2>
        <p
          style={{
            fontSize: "16px",
          }}
        >
          Somos una agencia de diseño líder que combina estrategia, creatividad
          y tecnología para brindar soluciones visuales y digitales impactantes.
          Con un enfoque centrado en el usuario, ofrecen servicios integrales
          que incluyen branding, diseño gráfico, desarrollo web y marketing
          digital, ayudando a las marcas a destacar y prosperar en el mundo
          digital.
        </p>
      </div>
    </div>
  );
}

export default Main;
