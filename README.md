# How to Install / Instalação

Run `npm install` from the root, the back-end and the front-end folders of the project. This will install all dependencies for the project to work.

Execute `npm install` a partir das pastas raíz, back-end e front-end. Isso instalará todas as dependências necessárias para que o projeto funcione.

# How to Run / Como rodar

This project requires a MySQL DB named `Trybeer`. There is a seeder.sql file in the project's root that shall be run in order to populate the database. You can copy and paste it inside MySQL Workbench to create the database and its tables.

After that, run `npm run start:watch` from inside the back-end folder and `npm start` from inside the front-end folder. This should get the application up and running in the browser.

The project uses environmental variables in order to connect to the MySQL database. You may either hard code your MySQL credentials directly in the connection.js file inside `back-end \ src \ models` or create a .env file inside the `back-end` folder and fill the following information with your MySQL credentials:
```MYSQL_USER=root
MYSQL_PASSWORD=''
HOSTNAME=localhost```

Esse projeto requer um banco de dados MySQL chamado `Trybeer`. Existe um arquivo seeder.sql na raíz do projeto que deverá ser executado para popular o banco de dados. Você pode copiar o seu conteúdo e colar no MySQL Workbench para criar o banco de dados e suas tabelas.

Depois disso, execute `npm run start:watch` de dentro da pasta back-end e `npm start` de dentro da pasta front-end. Isso fará a aplicação rodar no navegador.

O projeto utiliza variáveis de ambiente para se conectar ao banco de dados MySQL. Você pode colocar suas credenciais MySQL diretamente no arquivo connection.js dentro de `back-end \ src \ models` ou criar um arquivo .env dentro da pasta `back-end` e preencher as seguintes variáveis com suas credenciais MySQL:
```MYSQL_USER=root
MYSQL_PASSWORD=''
HOSTNAME=localhost```

# Habilidades desenvolvidas nesse projeto

- Aderência do código à especificação. Seu programa deve se comportar como especificado no repositório e no protótipo;
- Organização do seu código e a arquitetura geral da aplicação (tanto da API quando do front-end);
- Aderência ao padrão REST na API;
~~- Cobertura de testes. Seu código deve ser testável, e deve possuir uma suíte de testes robusta e com alta cobertura.~~

## O que foi desenvolvido

- Front-end em React.js com Context API e Hooks, utilizando Axios para comunicação com o servidor e Material-UI na interface, onde os usuários comprarão cervejas e o admin gerenciará os pedidos;

- API em Node.js com Express.js, recebendo as requisições HTTP do navegador e fazendo a comunicação com o banco de dados MySQL;

- Validações tanto no front-end quanto no back-end (JWT e express-validator);
