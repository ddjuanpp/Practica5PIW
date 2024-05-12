import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Peli } from "../types.ts";
import { Mostradas } from "./Mostradas.tsx";

import { brand } from "../signals/Brand.ts";
import { iso } from "../signals/Iso.ts";
import { name } from "../signals/Name.ts";
import { color } from "../signals/Color.ts";
import { for120 } from "../signals/For120.ts";
import { for35 } from "../signals/For35.ts";

export const Listado: FunctionalComponent<{ data: Peli[] }> = (pelis) => {
  if(!pelis || !pelis.data) {
    return null;
  }
  const filtradas = pelis.data.filter((p) => {
    const brandExiste = brand.value === "any" || p.brand === brand.value;
    const isoExiste = iso.value === "any" || p.iso.toString() === iso.value;
    const nameExiste = name.value === "" || p.name.toLowerCase().includes(name.value.toLowerCase());
    const colorExiste = color.value === "any" || (color.value === "true" ? p.color : !p.color);
    const for_120 = !for120.value || p.formatOneTwenty;
    const for_35 = !for35.value || p.formatThirtyFive;

    return brandExiste && isoExiste && nameExiste && colorExiste && for_120 && for_35;
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
      {filtradas.map((p: Peli) => <Mostradas data={p} />)}
    </div>
  );
};