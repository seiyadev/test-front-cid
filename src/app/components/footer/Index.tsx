import Image from "next/image";
import React from "react";

function FooterIndex() {
  return (
    <div className="-mt-1 w-full relative">
      <Image
        src={"/background_footer.svg"}
        width={500}
        height={200}
        alt="background_footer"
        className="absolute -z-10"
      />
      <div className="flex flex-col gap-16 mt-28 justify-center text-center">
        <h3
          style={{
            fontSize: "32px",
          }}
        >
          ¿estas interesado?
          <br />
          platica con nosotros
        </h3>
        <div className="flex flex-row justify-center">
          <button
            className="flex flex-row justify-center items-center pt-2.5 pb-2.5 pl-5 pr-5 gap-4"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              boxShadow: "0px 4px 20px 10px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(35px)",
              borderRadius: "24px",
            }}
          >
            <span>manda un mensaje</span>
            <Image
              src={"/icons/whatsapp.svg"}
              alt="wp-icon"
              width={32}
              height={32}
            />
          </button>
        </div>
        <span
          style={{
            fontSize: "16px",
          }}
        >
          queremos ayudarte a crear tu proyecto
        </span>
        <span
          style={{
            fontSize: "10px",
            marginTop: 56,
          }}
        >
          ©copyright 2023 CID
        </span>
      </div>
    </div>
  );
}

export default FooterIndex;
