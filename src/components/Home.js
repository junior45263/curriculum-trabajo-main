import React, { useEffect } from "react";
import gsap from "gsap";
import ListaCV from "./ListaCV";

function Home() {
  useEffect(() => {
    // Animación con GreenSock
    const bannerTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    bannerTimeline.to(".banner", {
      duration: 1,
      x: 100,
      backgroundColor: "#D40909",
    });

    // Limpia la animación al desmontar el componente
    return () => bannerTimeline.kill();
  }, []);

  return (
    <>
      <div className="banner">
        Bienvenido!!!! Al lugar donde puedes crear tu curriculum
      </div>{" "}
      {/* Agregar el div para el banner */}
      <div className="text-center mt-5">
        <h1 className="text-info"></h1>
      </div>
      <ListaCV />
    </>
  );
}

export default Home;
