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
        {
          url: "https://i.pinimg.com/736x/1e/ce/5f/1ece5fff6b4cff7d74e258587fc7824c.jpg",
        },
        {
          url: "https://i.pinimg.com/736x/5b/ab/13/5bab139f010287e92c264e25a4eb65fd.jpg",
        },
        {
          url: "https://i.pinimg.com/736x/06/1a/cb/061acba0605fc5a43e096e785487a55f.jpg",
        },
        {
          url: "https://i.pinimg.com/1200x/20/36/2f/20362f089cf6f9f27957936403cda4d0.jpg",
        },
        {
          url: "https://i.pinimg.com/1200x/5e/85/96/5e85967027ea4221eac470adac7c1ff9.jpg",
        },
        {
          url: "https://i.pinimg.com/1200x/4c/2c/2b/4c2c2b7038c3e4a13ec13c9d407ac0a8.jpg",
        },
        {
          url: "https://i.pinimg.com/736x/07/a6/96/07a69694c69d43de48d1bed07f31be4d.jpg",
        },
        {
          url: "https://i.pinimg.com/736x/c4/3a/dc/c43adc40d2540998f36f14fc4604e65f.jpg",
        },
        {
          url: "https://i.pinimg.com/1200x/1f/f6/13/1ff613287c6a853049bac770246379c5.jpg",
        },
        {
          url: "https://i.pinimg.com/736x/ec/e1/7b/ece17b1c77610b62cd2155ef8550a712.jpg",
        },
        {
          url: "https://i.pinimg.com/736x/70/e0/4f/70e04f23bea21fe17d54ac557a43037a.jpg",
        },
        {
          url: "https://i.pinimg.com/736x/2a/b9/18/2ab918adfdafa11692cb3a6cd72f7d0e.jpg",
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
