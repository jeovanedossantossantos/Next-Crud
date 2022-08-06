# Projeto em Next JS
<a href="https://next-crud-eosin.vercel.app/" target="_blank"> Ver projeto</a>
<div display="flex">
<img width=600 src="https://blog.rocketseat.com.br/content/images/2018/12/ssr-nextjs-reactjs.png">
<img  width=400 src="./img/file_type_firebase_icon_130606.png">
</div>
Objetivo: crud utilizando o firebase para armazenar os dados.

<img src="./img/00.png">
<img src="./img/2.png">
<img src="./img/2.png">

Configuração:

        npx create-next-app next-crud
        npm install -D tailwindcss@latest postcss@lates sutoprefixer@latest
        npx tailwindcss init -p

<a href="https://tailwindcss.com/docs/guides/nextjs">tailwindcss</a>

Dentro do arquivo tailwind.config.js coloque:

        module.exports = {
            purge: {
                content: [
                './src/pages/**/*.{js,ts,jsx,tsx}',
                './src/components/**/*.{js,ts,jsx,tsx}'
                ],
                safelist: [
                /^bg-/,
                /^to-/,
                /^from-/,
                ]
            },
            darkMode: false, // or 'media' or 'class'
            theme: {
                extend: {},
            },
            variants: {
                extend: {},
            },
            plugins: [],
        }
