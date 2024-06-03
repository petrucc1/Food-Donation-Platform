# Food Donation Platform

## Descrição

A Food Donation Platform é uma aplicação para conectar restaurantes e mercearias com ONGs que coletam alimentos, promovendo a redução do desperdício e ajudando comunidades carentes. Esta aplicação permite que estabelecimentos registrem ofertas de doação de alimentos, agendem coletas e acompanhem o impacto das suas doações.

## Funcionalidades

- Registro e login de usuários (restaurantes, mercearias, ONGs, administradores)
- Perfis de usuários com informações de contato e histórico de doações
- Criação e visualização de ofertas de doação
- Agendamento de coletas
- Visualização do histórico de doações
- Relatórios de impacto (quantidade de alimentos doados, número de beneficiados, etc.)

## Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework web para Node.js
- **MongoDB**: Banco de dados NoSQL
- **Mongoose**: Modelagem de objetos MongoDB para Node.js
- **JSON Web Tokens (JWT)**: Mecanismo de autenticação
- **Swagger**: Documentação da API

### Frontend

- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **axios**: Cliente HTTP baseado em Promises
- **react-router-dom**: Roteamento declarativo para React
- **Bootstrap**: Framework frontend para estilização
- **react-bootstrap**: Componentes do Bootstrap construídos com React
- **react-icons**: Ícones para aplicações React

### DevOps

- **GitHub Actions**: Integração contínua e entrega contínua (CI/CD)
- **Railway**: Plataforma para hospedagem de aplicações
- **Docker**: Plataforma de containerização

### Testes

- **Jest**: Framework de testes JavaScript
- **SuperTest**: Asserções HTTP para testar APIs Node.js

### Segurança

- Proteção contra injeções SQL, XSS e CSRF
- HTTPS para comunicação segura

### Monitoramento e Logs

- **Winston**: Biblioteca de logging para Node.js
- **Prometheus e Grafana**: Para fins de monitoramento

## Estrutura do Projeto

```
food-donation-platform/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── .env
│   ├── server.js
│   ├── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── README.md
├── .github/
│   ├── workflows/
│   │   └── main.yml
└── README.md
```

## Começando

### Pré-requisitos

- Node.js
- Conta MongoDB Atlas
- Git

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/food-donation-platform.git
   cd food-donation-platform
   ```

2. Instale as dependências:

   ```bash
   # Instalar dependências do backend
   cd backend
   npm install

   # Instalar dependências do frontend
   cd ../frontend
   npm install
   ```

3. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` no diretório `backend/` com as seguintes variáveis:

     ```bash
     MONGO_URI=sua-string-de-conexão-mongodb-atlas
     JWT_SECRET=seu-segredo-jwt
     PORT=5000
     ```

4. Inicie o servidor backend:

   ```bash
   # No diretório backend
   npm start
   ```

5. Inicie o servidor de desenvolvimento frontend:

   ```bash
   # No diretório frontend
   npm start
   ```

6. Acesse a aplicação em `http://localhost:3000/`

## Documentação da API

- Após iniciar o servidor backend, acesse a documentação da API:

  ```
  http://localhost:5000/api-docs
  ```

## Testes

- Execute os testes automatizados:

  ```bash
  # No diretório backend
  npm test
  ```

## Deploy

- Faça o deploy da aplicação no Railway ou outra plataforma de hospedagem.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
