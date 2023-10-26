"use client";
import * as React from "react";
import Image from "next/image";
import Background from "./Background";

const HeaderIndex = (props: any) => (
  <Background>
    <div
      style={{
        position: "absolute",
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 220,
      }}
    >
      <Image src="/cid.svg" alt="cid_logo" width={250} height={200} />
    </div>
  </Background>
);
export default HeaderIndex;
