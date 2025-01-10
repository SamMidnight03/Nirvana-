import { React, useState } from "react";

export default function Contactos() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [completado, setCompleto] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    setCompleto(true);
  }

  if (completado == true) {
    return (
      <div id="Tarjeta">

        <div id="infoTrjerta">
        <h1>Contactado</h1>

          <img src="/public/NevermindGato.jpg" alt="gato" id="GatoXd" />

          <div id="info">

            <p>
              Nombre: {nombre} {apellido}
            </p>

            <p>Correo: {correo}</p>

            <p>Mensaje: {mensaje}</p>

            <input
              type="submit"
              value="Back"
              onClick={() => {
                setCompleto(false);
              }}
            />
          </div>

        </div>

      </div>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit}>

        <div className="contacto">

          <div className="formulario">
          
            <h1>Contactame</h1>
          
            <label>
              Nombre
              <input
                required
                type="text"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </label>
          
            <label>
              Apellido
              <input
                required
                type="text"
                value={apellido}
                onChange={(event) => setApellido(event.target.value)}
              />
            </label>
          
            <label>
              Correo
              <input
                required
                type="email"
                value={correo}
                onChange={(event) => setCorreo(event.target.value)}
              />
            </label>
          
            <label>
              Mensaje
              <textarea
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
                maxLength={350}
              ></textarea>
            </label>
          
            <br />
          
            <input type="submit" value="submit" id="mandar" />
          
          </div>
          
          <div className="nirvana"></div>
        
        </div>
      
      </form>
    
    </>
  );
}
