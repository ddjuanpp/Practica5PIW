import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Filters, Peli } from "../types.ts";
import { Listado } from "../islands/Listado.tsx"
import { Busqueda } from "../islands/Busqueda.tsx"

type PeliData = {
  pelis: Peli[];
  filters: Filters;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown>) => {
    const response = await Axios.get<PeliData>("https://filmapi.vercel.app/api/films");
    const data: Peli[] = response.data;

    const brands = [...new Set(data.map(peli => peli.brand)), "any"];
    const isos = [...new Set(data.map(peli => peli.iso)), "any"];

    const filters: Filters = { brands, isos };

    return ctx.render({ films: data, filters });
  },
};

export default function Home({ data }: PageProps) {
  return (
    <div class="Main">
      <Busqueda data={data.filters} />
      <Listado data={data.films} />
    </div>
  );
}