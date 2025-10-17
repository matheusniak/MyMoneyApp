# 💰 MyMoneyApp

Aplicativo de **finanças pessoais** para gerenciar ciclos de pagamento (Billing Cycles) com dashboard, formulário dinâmico e integração mockada com API.  
Desenvolvido com **React**, **Redux Toolkit** e **React Router DOM**.

---

## 📝 Descrição curta

> MyMoneyApp — app de finanças pessoais para gerenciar ciclos de pagamento. CRUD de ciclos, formulário dinâmico, lista e dashboard com resumo de créditos/débitos. Desenvolvido com React + Redux; mock de API incluso.

---

## 📚 Índice

- [📊 Status](#-status)
- [🖼️ Pré-visualização](#-pré-visualização)
- [⚙️ Funcionalidades](#️-funcionalidades)
- [🧠 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [🎯 Objetivos e aprendizados](#-objetivos-e-aprendizados)
- [🧩 Pré-requisitos](#-pré-requisitos)
- [🚀 Instalação e execução](#-instalação-e-execução)
- [🧪 Rodar com mock de API](#-rodar-com-mock-de-api)
- [📁 Estrutura de pastas](#-estrutura-de-pastas)
- [📄 Arquivos principais](#-arquivos-principais)
- [🔧 Configuração da API](#-configuração-da-api)
- [🎨 Estilos e layout](#-estilos-e-layout)
- [🐞 Problemas comuns](#-problemas-comuns)
- [🌿 Commits e branches](#-commits-e-branches)
- [📜 Licença](#-licença)
- [👤 Autor](#-autor)

---

## 📊 Status

![status](https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen)
![licença](https://img.shields.io/badge/license-MIT-blue)

---

## 🖼️ Pré-visualização

### Dashboard

```markdown
![Dashboard Preview](/docs/screenshot-dashboard.png)
```

### Ciclos de Pagamento

![Billing Cycles Preview](/docs/screenshot-billingcycle.png)

> ⚠️ Observação: o sidebar não aparece estendido até o final da página na screenshot full porque ele utiliza `position: fixed` e altura igual à viewport. Em capturas de tela “full page”, elementos fixos não se expandem junto ao documento longo, então é um comportamento esperado.

### Formulário Dinâmico

![Formulário Dinâmico](/docs/screenshot-form.png)

### Menu Responsivo

![Menu Responsivo](/docs/screenshot-hamburger.png)

---

## ⚙️ Funcionalidades

- CRUD completo de Ciclos de Pagamento (Billing Cycles)
- Formulário dinâmico com adição e remoção de créditos e débitos
- Cálculo automático de totais e valores consolidados
- Dashboard com resumo de créditos, débitos e total
- Rotas configuradas com react-router-dom v6
- Mock de API para desenvolvimento offline
- Notificações de sucesso/erro com react-toastify
- Layout inspirado no AdminLTE com Bootstrap e Font Awesome

---

## 🧠 Tecnologias utilizadas

- React (Create React App)
- Redux Toolkit + React Redux
- React Router DOM v6
- React Hook Form
- Axios (ou mock customizado)
- React Toastify
- Bootstrap
- Font Awesome
- AdminLTE

---

## 🎯 Objetivos e aprendizados

Este projeto foi desenvolvido com foco em praticar conceitos fundamentais de React e Redux, incluindo:

- Estruturação de projeto em arquitetura modular (features e common)
- Implementação de Redux Toolkit com slices e thunks assíncronos
- Integração com API (real e mock)
- Uso de React Router DOM v6
- Criação de componentes reutilizáveis (formulários, abas, widgets, layout)
- Controle de estado global e reatividade entre componentes
- Aplicação de boas práticas de commits semânticos e versionamento

🧩 Este é um projeto de aprendizado e prática pessoal, não aberto a contribuições externas.

---

## 🧩 Pré-requisitos

- Node.js >= 16
- npm ou yarn
- Navegador moderno (Chrome, Edge, Firefox)

---

## 🚀 Instalação e execução

```bash
# Clonar o repositório
git clone <REPO_URL>
cd mymoneyapp

# Instalar dependências
npm install
# ou
yarn install

# Rodar o projeto localmente
npm start
# ou
yarn start
```

Acesse http://localhost:3000 no navegador.

---

## 🧪 Rodar com mock de API

1. O projeto possui um mock localizado em src/mocks/axiosMock.js.

Verifique o import de axios nas features:

```js
import axios from "../../mocks/axiosMock";
```

2. O mock implementa:

- GET /api/billingCycles → retorna lista vazia ou simulada
- GET /api/billingCycles/summary → retorna { credit: 1000, debt: 400 }
- POST, PUT, DELETE → simulam operações CRUD com logs no console

💡 Dica: em ambiente de produção, altere o import para import axios from "axios" e defina a URL real da API.

---

## 📁 Estrutura de pastas

```bash
src/
  main/                # index, rotas e configuração da store
  app/                 # componente principal (App.jsx)
  features/
    dashboard/
    billingCycle/
  common/              # componentes reutilizáveis (layout, tab, form, widget)
  mocks/               # axiosMock.js
  assets/              # custom.css e outros estilos
```

---

## 📄 **Arquivos principais**

| Arquivo                                    | Função                                        |
| ------------------------------------------ | --------------------------------------------- |
| `src/main/index.js`                        | Ponto de entrada com Provider e BrowserRouter |
| `src/main/routes.jsx`                      | Define as rotas da aplicação                  |
| `src/store/index.js`                       | Configura Redux Store e combina reducers      |
| `src/features/dashboard/dashboardSlice.js` | Lógica do Dashboard (fetchSummary)            |
| `src/mocks/axiosMock.js`                   | Mock de API local                             |
| `src/assets/custom.css`                    | Estilos personalizados                        |

---

## 🔧 Configuração da API

Crie um arquivo .env na raiz do projeto:

```env
REACT_APP_API_URL=http://localhost:3003/api
```

E utilize no código:

```js
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3003/api";
```

---

## 🎨 Estilos e layout

Estilos baseados em AdminLTE + Bootstrap  
Ícones com Font Awesome  
Customizações em src/assets/custom.css  
Layout dividido em Header, Sidebar, Content e Footer

⚠️ Dica: se o Footer não estiver ocupando 100% da largura, adicione:

```css
.main-footer {
  width: 100%;
  left: 0;
  right: 0;
}
```

---

## 🐞 Problemas comuns

| Problema                 | Solução                                            |
| ------------------------ | -------------------------------------------------- |
| Module not found         | Verifique nomes de arquivos e imports              |
| AdminLTE requires jQuery | Use apenas o CSS do AdminLTE                       |
| ERR_CONNECTION_REFUSED   | Habilite o mock de API                             |
| Estilos quebrados        | Verifique compatibilidade Bootstrap/AdminLTE       |
| React Router erros       | Use sintaxe v6 (<Routes>, <Route element={...} />) |

---

## 🌿 Commits e branches

Commits seguem o padrão Conventional Commits:

- `feat(scope): adicionar nova funcionalidade`
- `fix(scope): corrigir comportamento`
- `chore(scope): manutenção / refatoração`

Branch principal: main

### Exemplo de fluxo de merge

```bash
git checkout main
git pull origin main
git merge master
git branch -d master
git push origin main
git push origin --delete master
```

---

## 📜 Licença

Distribuído sob a licença MIT.  
Consulte o arquivo LICENSE para mais detalhes.

---

## 👤 Autor

**matheusniak**  
📧 matheusniak@gmail.com
