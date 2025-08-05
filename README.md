
#  Desafios DIO: Classificador de Herói & Calculadora Rankeada

Repositório com dois desafios simples para praticar **lógica de programação** em JavaScript. Você vai usar conceitos como variáveis, funções, estruturas condicionais e operadores.

---
### 🚀 Tecnologias utilizadas
![JavaScript](https://img.shields.io/badge/JavaScript-FBC02D?style=flat-square&logo=javascript&logoColor=black) | ![Node.js](https://img.shields.io/badge/Node.js-3C873A?style=flat-square&logo=nodedotjs&logoColor=white) |
| ---------------------- | --------------------- |


#### 📦 Dependências
- [chalk](https://www.npmjs.com/package/chalk)

---

## 🛡️ Desafio 01: Classificador de Nível de Herói

### 🧰 Conceitos abordados

✔️ Variáveis  
✔️ Operadores  
✔️ Estruturas de decisão  
✔️ (Opcional) Laços de repetição

---

### 🎯 O que você deve fazer

1️⃣ Crie uma variável com o **nome do herói**  
2️⃣ Crie uma variável com a **quantidade de XP**  
3️⃣ Use uma estrutura de decisão para verificar a faixa de XP  
4️⃣ Exiba o nível do herói

---

### 🧮 Tabela de Classificação por XP

| Faixa de XP           | Nível do Herói       |
|------------------------|----------------------|
| Menor que 1.000        | 🏅 Ferro             |
| Entre 1.001 e 2.000    | 🥉 Bronze            |
| Entre 2.001 e 5.000    | 🥈 Prata             |
| Entre 5.001 e 7.000    | 🥇 Ouro              |
| Entre 7.001 e 8.000    | 💎 Platina           |
| Entre 8.001 e 9.000    | 🚀 Ascendente        |
| Entre 9.001 e 10.000   | 🔥 Imortal           |
| 10.001 ou mais         | ✨ Radiante          |

---

### 💬 Exemplo de saída

```bash
O Herói de nome **{nome}** está no nível **{nível}**
```

---

## 🎮 Desafio 02: Calculadora de Partidas Rankeadas

### 🧰 Conceitos abordados

✔️ Variáveis  
✔️ Operadores  
✔️ Funções  
✔️ Estruturas de decisão  
✔️ Laços de repetição (opcional)  

---

### 🎯 O que você deve fazer

1️⃣ Crie uma função que receba dois parâmetros: 
  - Quantidade de vitórias 🟢
  - Quantidade de derrotas 🔴  
2️⃣ Calcule o saldo de Partidas
  ```bash 
  let saldo = vitorias - derrotas
  ``` 
3️⃣ Use uma estrutura condicional para descobrir o nível do jogador com base nas vitórias.  

---

### 🧮 Tabela de Classificação por XP

| Faixa de XP       | Nível do Herói       |
|-------------------|----------------------|
| Menor que 10      | 🏅  Ferro            |
| 11 a 20           | 🥉 Bronze            |
| 21 a 50           | 🥈 Prata             |
| 51 a 80           | 🥇 Ouro              |
| 81 a 90           | 💎 Diamante          |
| 91 a 100          | 🔥 Lendário           |
| >= 101            | ✨ Imortal           |

---

### 💬 Exemplo de saída

```bash
O Herói tem um saldo de **{vitorias}** está no nível **{nível}**
```

---

## 💻 Objetivo dos desafios
Esses desafios fazem parte da jornada de aprendizado da DIO. Eles têm como objetivo:

✅ Praticar lógica e raciocínio computacional

✅ Utilizar conceitos básicos de JavaScript

✅ Ganhar confiança com estruturas condicionais e funções


## 🕹 Desafio 03: Escrevendo as classes de um jogo

### 🧰 Conceitos abordados

✔️ Variáveis  
✔️ Operadores  
✔️ Funções  
✔️ Estruturas de decisão  
✔️ Laços de repetição  
✔️ Classes e Objetos 

---

### 🎯 O que você deve fazer

1️⃣ Crie uma classe genérica que represente um herói de uma aventura e que possua as seeguintes propriedades: 
  - nome (heroName)
  - idade (heroAge) 
  - tipo (hero) - exemplo: guerreiro, mago, monge, ninja
2️⃣ Além disso, deve ter um método chamado *atacar* que deve atender os seguintes requisitos:
  - exibir a mensagem: "O *{hero}* atacou usando *{ataque}*
  - o *{hero}* deve ser concatenando o tipo que está na propriedade da classe
  - e o *{ataque}* deve seguir uma descrição diferente conforme o *{hero}*, seguindo a tabela abaixo

---

### 🧮 Tabela de Classificação Hero e Ataque

| Hero         | Ataque           |
|--------------|------------------|
| Mago         | magia            |
| Guerreiro    | espada           |
| Monge        | artes marciais   |
| Ninja        | shuriken         |

---

---

### 💬 Exemplo de saída

```bash
"O {tipo} atacou usando {ataque}"
```
---
## 🧩 Desafios: Aprimorando sua lógica de programação

### 📚 Trilha de Aprendizado

A ordem dos conceitos abordados nos desafios foi pensada para quem está começando na programação:

1️⃣ **🔤 Manipulando variáveis**  
Aprenda a armazenar e acessar informações com `let`, `const` e `var`.

2️⃣ **➗ Dominando operadores**  
Use operadores matemáticos (+, -, *, /) e lógicos (==, >, &&, etc.) para trabalhar com dados.

3️⃣ **🔀 Explorando condicionais**  
Tome decisões no código com `if`, `else if` e `else`.

4️⃣ **🔁 Dominando funções**  
Agrupe instruções em blocos reutilizáveis com `function`.

5️⃣ **🔄 Laços de repetição**  
Repita ações com `for`, `while` e outras estruturas de loop.