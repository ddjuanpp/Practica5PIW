import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Peli } from "../types.ts";
import axios from "npm:axios";
import Pelicula from "../components/Peli.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Peli>) {
    const id = ctx.params.id;
    try {
      const response = await axios.get(`https://filmapi.vercel.app/api/films`);
      if (response.status !== 200) {
        throw new Response("Error fetching data", { status: response.status });
      }
      const peli = response.data.filter((peli: any) => peli._id === id);
      return ctx.render(peli[0]);

    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  },
};

export default function perfilPropio(props: PageProps<Peli>) {
  const perfil: Peli = props.data;
  return (
        <Pelicula {...perfil} />
  );
}