import { FunctionComponent } from "preact";
import { Peli } from "../types.ts";

export const Mostradas: FunctionComponent<{ data: Peli }> = ( pelis ) => {
  return (
    <div class="Peli-Card">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <a href={`/${pelis.data._id}`} className="Peli-Card" key={pelis.data._id}>
          <h1>Name: {pelis.data.name}</h1>
          <img className="Peli-image" src={pelis.data.staticImageUrl} alt={pelis.data.name} />
          <p>Brand: {pelis.data.brand}</p>
          </a>
      </div>
    </div>
  );
};

export default Mostradas;