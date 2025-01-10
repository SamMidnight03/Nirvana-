import React from "react";
import { Link } from "react-router";

export default function Index() {
  return (
    <main id="index">
      <div className="img uno"></div>

      <div id="info">
        <h1>Gatito RockStar</h1>

        <h4>Pagina oficial de contratacion para el michi roquero</h4>

        <p>
          Hola... soy Kurt Co-cat, y vengo a decirles algo muy simple: las
          fiestas aburridas apestan tanto como una caja de arena sin limpiar.
          😾🎸 Si quieren darle a su evento un toque de rock desgarrador, con un
          poco de melancolía felina y energía desaliñada, aquí estoy yo, con mis
          ronroneos rasposos y garras listas para rasguear clásicos como *Smells
          Like Catnip* y *Come As You Meow*. 🐾✨ Mi estilo es crudo, auténtico
          y un poquito desaliñado, como si acabara de salir de una noche de
          cazadores de ratones callejeros. Pero, hey, así es el verdadero rock:
          imperfecto, honesto y con mucho sentimiento. 🎤🐈‍⬛ Contrátenme para su
          fiesta, y prometo que todos terminarán sacudiendo la cola... o al
          menos contemplando la vida desde una esquina, como todo buen felino
          existencialista. 😼 Recuerden: no hay necesidad de *lame botas*. Solo
          mándenme un mensaje... o un ovillo de lana, si quieren hacerlo más
          interesante. ¡Nos vemos en el escenario, maulladores del grunge! 🤘🐾
        </p>
        <Link to={"/contactos"} className='ruta'>Contacto</Link>
      </div>

      <div className="img dos"></div>
    </main>
  );
}
