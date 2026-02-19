Conversor de Moedas (Português)

📌 Visão Geral

O Conversor de Moedas é uma aplicação web desenvolvida em HTML, CSS e JavaScript puro que permite converter valores entre mais de 50 moedas internacionais em tempo real.

A aplicação consome dados de uma API pública de câmbio e oferece uma experiência moderna, responsiva e otimizada para usabilidade.

🚀 Funcionalidades
✅ Conversão em Tempo Real

Conversão automática baseada na taxa atual da moeda.

Atualização imediata ao alterar valor ou moeda.

Conversão automática ao pressionar Enter.

🔄 Botão Inverter Moedas

Permite alternar rapidamente entre moeda de origem e destino.

Atualiza o cálculo automaticamente após a inversão.

⭐ Sistema de Favoritos

Salvar pares de moedas frequentes.

Persistência via localStorage.

Botão para carregar favorito.

Botão para remover favorito.

Prevenção de duplicação.

⚡ Conversões Rápidas

Botões pré-configurados para:

BRL → USD

USD → BRL

BRL → EUR

EUR → BRL

BRL → GBP

USD → EUR

A troca ocorre com um clique e recalcula automaticamente.

📋 Botão Copiar Resultado

Copia o valor convertido com 1 clique.

Feedback visual “Copiado!”.

Implementação com:

navigator.clipboard (moderno)

fallback com execCommand (compatibilidade)

📊 Informações Detalhadas da Conversão

Após cada cálculo, o sistema exibe:

Valor convertido

Taxa atual aplicada
Ex: 1 BRL = 0.2012 USD

Cálculo detalhado
Ex: 100 BRL × 0.201200 = 20.12 USD

Conversão inversa
Ex: 1 USD = 4.97 BRL

Data e hora da atualização

🌍 Suporte a 50+ Moedas

Inclui moedas como:

BRL, USD, EUR, GBP, JPY

CAD, AUD, CHF

MXN, ARS, CLP

INR, KRW, SGD

AED, SAR, TRY

PLN, CZK, HUF

e diversas outras

📱 Design Responsivo

Layout adaptável para mobile.

Grid responsivo.

Interface moderna em tema escuro.

🔎 SEO Integrado

Inclui seção otimizada com:

Conteúdo explicativo sobre câmbio

Perguntas frequentes

Uso estratégico de palavras-chave

🧱 Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6+)

LocalStorage

Fetch API

Exchange Rate API (dados de câmbio)

🗂 Estrutura do Projeto
conversor-moedas/
│
├── index.html
├── style.css
└── script.js

🧠 Lógica Principal

Usuário insere valor.

Sistema captura moeda origem/destino.

Requisição via fetch() para API.

Cálculo com base na taxa retornada.

Atualização da interface.

Persistência de favoritos no navegador.

📌 Possíveis Melhorias Futuras

Gráfico de variação histórica

Cache de cotação por tempo definido

PWA (instalável)

Histórico de conversões

Modo claro/escuro com toggle

--------------------------------------------------------------------------------------------------------------

Currency Converter (English Version)

📌 Overview

The Currency Converter is a web-based application built using pure HTML, CSS, and JavaScript that allows users to convert values between 50+ international currencies in real time.

It consumes exchange rate data from a public API and provides a modern, responsive, and user-friendly interface.

🚀 Features
✅ Real-Time Conversion

Instant conversion based on the latest exchange rate.

Auto-update when value or currency changes.

Automatic conversion when pressing Enter.

🔄 Swap Button

Instantly swaps base and target currencies.

Automatically recalculates the conversion.

⭐ Favorites System

Save frequently used currency pairs.

Persistent storage using localStorage.

Load favorite with one click.

Remove favorite option.

Duplicate prevention.

⚡ Quick Conversions

Pre-configured quick buttons:

BRL → USD

USD → BRL

BRL → EUR

EUR → BRL

BRL → GBP

USD → EUR

Single-click conversion.

📋 Copy Result Button

One-click copy of converted value.

Visual feedback: “Copied!”

Uses:

Modern Clipboard API

Fallback method for compatibility

📊 Detailed Conversion Information

Displays:

Converted value

Current exchange rate
Example: 1 BRL = 0.2012 USD

Detailed calculation
Example: 100 BRL × 0.201200 = 20.12 USD

Inverse conversion
Example: 1 USD = 4.97 BRL

Last updated date and time

🌍 50+ Supported Currencies

Includes:

BRL, USD, EUR, GBP, JPY

CAD, AUD, CHF

MXN, ARS, CLP

INR, KRW, SGD

AED, SAR, TRY

PLN, CZK, HUF

and many more

📱 Responsive Design

Mobile-friendly layout.

Responsive grid system.

Modern dark-themed interface.

🔎 SEO Integration

Includes optimized content section with:

Educational explanation about exchange rates

Frequently asked questions

Strategic keyword usage

🧱 Technologies Used

HTML5

CSS3

JavaScript (ES6+)

LocalStorage

Fetch API

Exchange Rate API

🗂 Project Structure
currency-converter/
│
├── index.html
├── style.css
└── script.js

🧠 Core Logic

User inputs amount.

System captures base and target currencies.

Fetch request to exchange rate API.

Calculation using returned rate.

UI update.

Favorites persisted locally.

📌 Future Improvements

Historical exchange chart

Exchange rate caching

PWA support

Conversion history

Light/Dark mode toggle
