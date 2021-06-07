# O projeto
Desenvolver uma página que receba uma api de um servidor criado localmente e renderize os nome e valores dos dados, com precos converter a moeda brasileira. Adicione os valores na api criada do servidor fazendo uso do método Get. Para isso, usar React e typescript além de criar um servidor.

## Desenvolvimento do projeto.

1.Criei um aquivo usando o comando: npx create-react-app afya-react --template=typescript. Adicionei o servidor na maquina usando o comando: npm add json-server -D para rodar o servidor tem que da o comando: npm run sever. No package.json foi no sacript e adicionei o comando para rodar o servidor que foi: "sever": "json-server server.json --watch -p 8888", A porta escolhida para rodar o servidor foi a 8888,também poderia ser outra qualquer o endereço ficou assim: http://localhost:8888. Foi criado um documento (api) fora do src, o server.json, para colocar dados. Foi usado na api pra cria id automatico com numero e traços o uuidv4. Passei o comando npm add uuidv4 para baixar.


Ver o desenvolvimento rodando [aqui](https://facebook.github.io/create-react-app/docs/getting-started).
