import { FunctionComponent } from "preact";
import { Filters } from "../types.ts";

import { brand } from "../signals/Brand.ts";
import { iso } from "../signals/Iso.ts";
import { name } from "../signals/Name.ts";
import { color } from "../signals/Color.ts";
import { for120 } from "../signals/For120.ts";
import { for35 } from "../signals/For35.ts";

export const Busqueda: FunctionComponent<{ data: Filters }> = (props) => {
  return (
    <div class="Busqueda">
      <div>
        <label>Name</label>
        <input onInput={(e) => {name.value = e.currentTarget.value;}}/>
      </div>
      <div>
        <label>Brand</label>
        <select value={"any"} onInput={(e) => {brand.value = e.currentTarget.value;}}>
          {props.data.brands.map((b) => <option>{b}</option>)}
        </select>
      </div>
      <div>
        <label>ISO</label>
        <select value={"any"} onInput={(e) => {iso.value = e.currentTarget.value;}}>
          {props.data.isos.map((i) => <option>{i}</option>)}
        </select>
      </div>
      <div>
        <label>Format</label>
        <div>
          <span>35mm</span>
          <input
            type="checkbox"
            onChange={(e) => {
              for35.value = e.currentTarget.checked;
            }}
          />
          <span>120mm</span>
          <input
            type="checkbox"
            onChange={(e) => {
              for120.value = e.currentTarget.checked;
            }}
          />
        </div>
      </div>
      <div>
        <label>Color</label>
        <select
          value={"any"}
          onInput={(e) => {
            color.value = e.currentTarget.value;
          }}
        >
          <option value="true">On color</option>
          <option value="false">Black and white</option>
          <option value="any">any</option>
        </select>
      </div>
    </div>
  );
};