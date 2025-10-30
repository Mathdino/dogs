# Dogs — App React que consome API externa

Aplicação React (Vite) que consome a API pública Dogs (`https://dogsapi.origamid.dev/json`) para autenticação, cadastro de usuários, postagem de fotos, listagem em feed, comentários e estatísticas. O projeto utiliza rotas protegidas, hooks customizados e gerenciamento simples de sessão via `localStorage`.

## Tecnologias

- React + Vite
- React Router (`react-router-dom`)
- Hooks customizados (`useFetch`, `useForm`, `UseMedia`)
- CSS Modules

## API Externa

- Base: `https://dogsapi.origamid.dev/json`
- Endpoints principais (ver `src/api.jsx`):
  - `POST /jwt-auth/v1/token` — autenticação; retorna `token`
  - `POST /jwt-auth/v1/token/validate` — validação do token
  - `GET /api/user` — dados do usuário autenticado
  - `POST /api/user` — criação de usuário
  - `POST /api/photo` — envio de foto (FormData, header `Authorization`)
  - `GET /api/photo/:id` — detalhes de foto
  - `GET /api/photo/?_page&_total&_user` — feed de fotos
  - `POST /api/comment/:id` — comentar na foto
  - `DELETE /api/photo/:id` — excluir foto
  - `GET /api/stats` — estatísticas do usuário

Headers de autenticação: `Authorization: Bearer <token>`

## Fluxo de Autenticação

- Login (`UserContext.userLogin`):
  - Envia `{ username, password }` para `TOKEN_POST`
  - Salva `token` no `localStorage` e busca dados via `USER_GET`
  - Redireciona para `/conta`
- Auto-login: valida token salvo com `TOKEN_VALIDATE_POST`
- Logout: limpa estado e `localStorage`
- Rotas protegidas: `Components/Helper/ProtectedRoute` só renderiza filhos se `login === true`

## Funcionalidades

- Cadastro e login de usuário
- Recuperação e reset de senha
- Feed de fotos com paginação simples
- Modal de foto com detalhes e comentários
- Postagem de foto (`/conta/postar`) com `FormData` (campo `img` via `img.raw`)
- Estatísticas do usuário (`/conta/estatisticas`)
- Layout responsivo (menu mobile via `UseMedia`)

## Hooks e Padrões

- `useFetch`: gerencia requisições (`data`, `loading`, `error`, `request`) e trata erros retornando mensagens amigáveis
- `useForm`: validação de campos (`email`, `password`, `number`); integra com inputs e exibe mensagens
- `UseMedia`: observa `matchMedia` para habilitar comportamentos responsivos

## Instalação e Execução

1. Requisitos: Node.js LTS
2. Instalar dependências:
   ```bash
   npm install
   ```
3. Ambiente de desenvolvimento (HMR):
   ```bash
   npm run dev
   ```
   Abra a URL exibida pelo Vite (ex.: `http://localhost:5173` ou porta alternativa)
4. Build de produção:
   ```bash
   npm run build
   ```
5. Preview do build:
   ```bash
   npm run preview
   ```

## Estrutura

- `src/api.jsx`: definição da base URL e dos endpoints
- `src/UserContext.jsx`: estado global de autenticação, auto-login e navegação
- `src/Components`: páginas e componentes (Feed, Login, User, Photo, Helper)
- `src/Hooks`: hooks customizados

## Observações

- O token JWT é persistido em `localStorage`
- Erros de rede e API são encaminhados para componentes `Error` via hooks
- Favicon: o arquivo está em `public/favicon.ico`; o `index.html` referencia `./favicon.ico` (Vite serve de `public/` automaticamente)
