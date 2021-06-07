# O projeto
Desenvolver uma página que receba uma api de um servidor criado localmente e renderizar os nomes e valores dos dados. Com os precos, converter a moeda brasileira. Adicionar os valores na api criada para o uso no servidor. Desenvolver usando React e typescript.

## Desenvolvimento do projeto.

1.Criei um aquivo usando o comando: npx create-react-app afya-react --template=typescript. Adicionei o servidor na máquina usando o comando: npm add json-server -D para rodar o servidor tem que da o comando: npm run sever. No package.json fui no script e adicionei o comando para rodar o servidor que foi: "sever": "json-server server.json --watch -p 8888", A porta escolhida para rodar o servidor foi a 8888,também poderia ser outra qualquer, o endereço ficou assim: http://localhost:8888. Foi criado um documento (api) fora do src, o server.json, para colocar os dados. Para cria id automatico na api, com numero e traços foi usado o uuidv4. Passei o comando npm add uuidv4 para baixar.


Ver o desenvolvimento rodando [aqui](#).
