# Gestão de Membros Mobile

🚧 **Status: Em desenvolvimento** 🟠

Este projeto está em desenvolvimento ativo.
Novas funcionalidades e melhorias podem ser adicionadas conforme a evolução da aplicação.

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Supabase](#supabase)
- [Executando o projeto](#executando-o-projeto)
- [Variáveis de ambiente](#configuração-das-variáveis-de-ambiente)
- [Build com EAS](#build-com-eas)
- [Arquitetura](#arquitetura)
- [Navegação com Expo Router](#navegação-com-expo-router)
- [Organização das responsabilidades](#organização-das-responsabilidades)
- [Fluxo da aplicação](#fluxo-da-aplicação)
- [Objetivos do projeto](#objetivos-do-projeto)
- [Considerações finais](#considerações-finais)

---

# Sobre o projeto

O Gestão de Membros é uma aplicação mobile desenvolvida utilizando React Native, Expo, Expo Router e TypeScript, com o objetivo de auxiliar no gerenciamento de tarefas e informações dentro de uma comunidade evangélica.
A aplicação foi criada para facilitar a organização das atividades da comunidade, permitindo um melhor controle das informações relacionadas aos membros, acompanhamentos e processos internos.
O projeto foi desenvolvido com uma estrutura organizada, seguindo boas práticas de desenvolvimento mobile, utilizando separação de responsabilidades, gerenciamento de estados e integração com serviços externos.

Entre as principais funcionalidades estão:

- Cadastro e gerenciamento de membros;
- Autenticação de usuários;
- Persistência de sessão;
- Integração com banco de dados remoto;
- Upload e gerenciamento de imagens;
- Organização de informações dos membros;
- Geração de documentos e relatórios;
- Compartilhamento de arquivos;
- Interface responsiva para dispositivos Android e iOS.

---

# Tecnologias

- React Native
- Expo
- Expo Router
- TypeScript
- Supabase
- TanStack React Query
- Zustand
- React Hook Form
- Zod
- NativeWind (Tailwind CSS)
- AsyncStorage
- Expo Image Picker
- Expo Print
- Expo Sharing
- React Native View Shot
- Lottie React Native

## Versões do ambiente

- Expo: ~54.0.35
- Expo SDK: 54
- React Native: 0.81.5
- React: 19.1.0
- TypeScript: ~5.9.2

---

# Supabase

O projeto utiliza o **Supabase** como backend da aplicação.

O Supabase fornece uma infraestrutura completa baseada em:

- PostgreSQL;
- Autenticação;
- Storage para arquivos;
- APIs automáticas;
- Controle de acesso utilizando Row Level Security (RLS).

A aplicação utiliza o Supabase para centralizar os dados dos membros e controlar a autenticação dos usuários.

## Integração com Supabase

A comunicação é realizada utilizando o SDK oficial:

```bash
npm install @supabase/supabase-js
```

A configuração do cliente Supabase utiliza variáveis de ambiente:

```ts
createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_KEY
)
```

O projeto utiliza:

- `AsyncStorage` para persistência da sessão;
- Renovação automática do token;
- Persistência do login do usuário;
- Controle da autenticação entre sessões.

Exemplo:

```ts
auth: {
  storage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
}
```

---

# Executando o projeto

## Instalação

Utilizando npm:

```bash
npm install
```

Ou utilizando Yarn:

```bash
yarn
```

---

# Executando em modo desenvolvimento

Inicie o Expo:

```bash
npm run start
```

ou:

```bash
yarn start
```

---

## Android

```bash
npm run android
```

ou:

```bash
yarn android
```

---

## iOS

```bash
npm run ios
```

ou:

```bash
yarn ios
```

---

# Development Build

Caso utilize bibliotecas nativas ou queira executar uma versão mais próxima da produção, utilize o EAS Build.

## Android

```bash
eas build --platform android --profile development
```

## iOS

```bash
eas build --platform ios --profile development
```

Após instalar a Development Build:

```bash
npm run start
```

ou:

```bash
yarn start
```

---

# Configuração das variáveis de ambiente

O projeto utiliza variáveis de ambiente para configurar serviços externos.

Crie um arquivo `.env` na raiz do projeto:

```env
EXPO_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co

EXPO_PUBLIC_SUPABASE_KEY=sua-chave-publica
```

---

# Variáveis de ambiente no EAS

As variáveis utilizadas nas builds precisam ser cadastradas no ambiente da Expo.

As variáveis presentes apenas no `.env` local não são enviadas automaticamente para o EAS Build.

---

## Verificar usuário conectado

Antes de cadastrar as variáveis:

```bash
eas whoami
```

---

## Cadastrar variáveis no EAS

Para o ambiente `preview`:

```bash
eas env:create --environment preview
```

Exemplo:

```
Nome:
EXPO_PUBLIC_SUPABASE_URL

Tipo:
String

Visibilidade:
Plain text

Valor:
https://seu-projeto.supabase.co
```

Repita para:

```
EXPO_PUBLIC_SUPABASE_KEY
```

---

## Listar variáveis cadastradas

```bash
eas env:list --environment preview
```

---

# Build com EAS

## Android - Gerar APK

```bash
eas build --platform android --profile preview
```

## iOS - Gerar IPA

```bash
eas build --platform ios --profile production
```

Após alterar variáveis de ambiente, é necessário gerar uma nova build.

---

# Arquitetura

O projeto utiliza uma arquitetura baseada em separação de responsabilidades, combinando:

- Expo Router para navegação;
- Services para comunicação externa;
- Hooks para lógica reutilizável;
- Stores para estados globais;
- Components compartilhados;
- Formulários com validação.

A estrutura busca manter o código organizado, escalável e fácil de manter.

---

# Navegação com Expo Router

A navegação utiliza o **Expo Router**, baseado no conceito de:

**File-Based Routing**

Cada arquivo dentro da pasta `app` representa automaticamente uma rota.

Benefícios:

- Navegação declarativa;
- Organização por arquivos;
- Layouts compartilhados;
- Rotas agrupadas;
- Facilidade de manutenção.

---

# Organização das responsabilidades

Exemplo da organização principal:

```text
src/
│
├── app/
│   ├── _layout.tsx
│   └── index.tsx
│
├── components/
│
├── features/
│   ├── members/
│   └── auth/
│
├── hooks/
│
├── services/
│   └── supabase.ts
│
├── stores/
│
├── shared/
│
├── types/
│
└── utils/
```

---

## Services

Responsável pela comunicação com serviços externos.

Exemplo:

- Cliente Supabase;
- Consultas ao banco;
- Upload de arquivos;
- Regras de comunicação externa.

---

## Components

Contém componentes reutilizáveis da aplicação.

Exemplos:

- Inputs;
- Botões;
- Cards;
- Modais;
- Componentes visuais.

---

## Hooks

Centraliza lógicas reutilizáveis.

Exemplos:

- Buscar membros;
- Controlar autenticação;
- Gerenciar estados de carregamento.

---

## Stores

Responsável pelo gerenciamento de estados globais utilizando Zustand.

---

# Fluxo da aplicação

O fluxo principal acontece da seguinte forma:

1. Usuário acessa a aplicação;
2. Sistema verifica sessão existente;
3. Usuário realiza autenticação;
4. Sessão é persistida localmente;
5. Dados dos membros são carregados através do Supabase;
6. Usuário pode consultar e gerenciar informações;
7. Arquivos e imagens são armazenados utilizando os recursos do Supabase.

---

# Objetivos do projeto

Este projeto tem como objetivo aplicar boas práticas de desenvolvimento mobile utilizando:

- React Native;
- Expo;
- TypeScript;
- Expo Router;
- Integração com backend utilizando Supabase;
- Gerenciamento de estado;
- Organização modular;
- Componentização;
- Validação de formulários;
- Boas práticas de arquitetura.

---

# Considerações finais

O **Gestão de Membros Mobile** é um projeto desenvolvido com foco em uma aplicação real utilizando tecnologias modernas do ecossistema React Native.

A utilização do Expo, Supabase e uma arquitetura organizada permite criar uma aplicação escalável, facilitando futuras evoluções e manutenção do código.

O projeto busca unir uma experiência moderna de desenvolvimento mobile com uma estrutura próxima de aplicações utilizadas em ambientes profissionais.
