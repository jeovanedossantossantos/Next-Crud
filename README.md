# Projeto em Next JS
<img src="https://blog.rocketseat.com.br/content/images/2018/12/ssr-nextjs-reactjs.png">
Objetivo: crud utilizando o firebase para armazenar os dados.

<img src="./img/00.png">
<img src="./img/01.png">
<img src="./img/02.png">

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
