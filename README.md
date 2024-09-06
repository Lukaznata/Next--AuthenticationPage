# Next--AuthenticationPage - Sistema de Autenticação

## Link Para Acessar

https://next-authentication-page.vercel.app/authentication

Este é um projeto de um sistema de autenticação completo, desenvolvido com Next.js e TypeScript, utilizando o Firebase como backend. O sistema permite login com email/senha ou autenticação via Google, e implementa uma interface responsiva com suporte a tema escuro e claro, persistindo preferências de usuário e sessão.

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)


## Descrição do Projeto

Este projeto foi criado para fornecer um sistema de autenticação robusto e seguro, com suporte a autenticação via email/senha e Google. Utiliza Context API para gerenciamento de estado, e Firebase para gerenciamento de autenticação e backend. A interface é responsiva e adapta-se a diferentes tamanhos de tela, com suporte a tema claro e escuro.

## Tecnologias Utilizadas
- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Firebase**: Plataforma utilizada para autenticação e backend.
- **Context API**: Usada para gerenciamento global de estado.
- **SCSS/Tailwind CSS**: Para estilização da interface, com suporte a temas.
- **JavaScript Cookies**: Para gerenciar cookies e persistir sessões de usuário.
- **LocalStorage**: Para salvar preferências de tema do usuário.
- **Variáveis de Ambiente**: usadas para privar dados sensiveis para o lado do cliente, mantidas apenas no lado do servidor.

## Instalação
Para rodar o projeto localmente, siga os passos abaixo:

Clone o repositório:

1. Clone o repositório:
    ```bash
    git clone https://github.com/Lukaznata/Next--AuthenticationPage.git
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o Firebase:

4. Crie um projeto no Firebase.

5. Adicione a configuração do Firebase em um arquivo .env.local.

6. Ative os provedores de autenticação necessários (email/senha, Google).

7. Execute o servidor de desenvolvimento:

 ```bash
npm run dev
   ```
8. Abra o navegador e acesse http://localhost:3000.

## Funcionalidades
- **Autenticação com Email e Senha**: Registre-se e faça login utilizando credenciais de email.
- **Autenticação via Google**: Use sua conta Google para acessar o sistema.
- **Páginas Protegidas**: Acesse conteúdo protegido após autenticação.
- **Gerenciamento de Sessão**: Sessão persistente após recarregamento da página.
- **Tema Claro e Escuro**: Personalize a aparência do sistema conforme sua preferência.
- **Responsividade**: Interface adaptável a diferentes dispositivos, incluindo mobile e desktop.

## Contribuição

### Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Por favor, siga o código de conduta e as diretrizes de contribuição.
