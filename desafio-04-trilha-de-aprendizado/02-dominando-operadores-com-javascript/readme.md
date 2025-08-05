# 🧙‍♂️ Desafio - Ganho de XP

Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão agora é **enfrentar inimigos** e **ganhar pontos de experiência (XP)** para se tornar mais forte.  
A cada vitória, você acumula XP e se aproxima de se tornar um **lendário campeão**.

---

## 🛡️ Tarefa

Escreva um programa simples que simule o **ganho de XP após derrotar um monstro**.  
O programa deve calcular e exibir a **quantidade de XP ganha com base no nível do monstro e na dificuldade da batalha**.

---

## ⚔️ Cálculo do XP

Para calcular o XP ganho, use a fórmula:

```bash
XP = nível_do_monstro * dificuldade * 100
```

### 🔍 Explicação:

- `nível_do_monstro`:  
  Quanto maior o nível, **mais XP** o herói ganha ao derrotá-lo.

- `dificuldade`:  
  Valor entre **1 e 100**, representando o **nível de dificuldade da batalha**.  
  Dificuldades maiores geram **mais XP**.

- `100`:  
  Um multiplicador fixo para **escalar a recompensa** de XP de forma justa.

---

## 📥 Entrada

O programa deve solicitar dois valores inteiros:

1️⃣ **Nível do monstro**

2️⃣ **Dificuldade da batalha** (de 1 a 100)

---

## 📤 Saída

O programa deve imprimir a **quantidade total de XP ganhos** após a batalha.

---

## 🔁 Exemplo de entrada

```bash
Digite o nível do monstro: 5  
Digite a dificuldade da batalha (1 a 100): 60
```
## 🎯 Exemplo de saída
```bash
Você ganhou 30000 XP!
```

## ✅  Conceitos aplicados
Esse exercício é ótimo para praticar:
- Leitura de dados via terminal
- Cálculo matemático com múltiplos fatores
- Exibição formatada de resultados