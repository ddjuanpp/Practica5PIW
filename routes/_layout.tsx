import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
    return (
        <div class="layout">
            <title>Peliculas</title>
            <a href="/">Home</a>
            <Component />
        </div>
    );
}