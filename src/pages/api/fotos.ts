import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      fotos: [
        {
          url: "https://i.pinimg.com/736x/df/df/b5/dfdfb57bd8f4c3ac86819072f78c309b.jpg",
        },
        {
          url: "https://i.pinimg.com/736x/43/32/79/433279ac978e0081e0690d486af8d321.jpg",
        },
      ],
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
