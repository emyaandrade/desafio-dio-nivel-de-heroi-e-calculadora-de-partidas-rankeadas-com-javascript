# 🏰 Descrição

Sua missão é vasculhar as salas da masmorra em busca de **recompensas lendárias** e **desafios perigosos**.  
Cada sala pode conter **monstros formidáveis**, **tesouros preciosos** ou ambos.  
Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

---

## 🧪 Tarefa

Escreva um programa que simule sua jornada heróica pela masmorra.  
O programa deve percorrer cada sala e verificar se há tesouros ou monstros.  

- Se encontrar um tesouro, colecione a recompensa.  
- Se encontrar um monstro, derrote-o para continuar.

---

## ⚠️ Atenção

Na solução, utilizamos a função JavaScript [`includes()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) para verificar se um número (representando a sala atual) está presente nos arrays `salasComTesouro` e `salasComMonstro`.

---

## 📥 Entrada

- O número total de salas na masmorra (um número inteiro).

---

## 📤 Saída

- Sempre que encontrar um tesouro, imprima:  
  `Tesouro na sala X!`

- Sempre que encontrar um monstro, imprima:  
  `Monstro na sala X!`

---

## ✅ Conceitos aplicados

- Uso de arrays  
- Estruturas de repetição (`for` ou `while`)  
- Métodos de array (`includes()`)  
- Condicionais (`if/else`)  
- Entrada e saída de dados
