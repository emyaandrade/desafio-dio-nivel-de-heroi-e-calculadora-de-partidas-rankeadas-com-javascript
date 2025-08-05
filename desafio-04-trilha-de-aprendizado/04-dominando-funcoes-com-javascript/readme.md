# 🪓 Mestre Construtor: Minerando em busca de recursos

Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar **biomas** em diferentes regiões do mundo.  
Cada bioma possui características únicas, como tipos de solo, vegetação e clima.

Mas antes de expandir, é preciso **coletar minérios** para construir!

---

## 🎯 Tarefa

Sua missão é **coletar minérios** enquanto ataca uma rocha com sua picareta.  
Utilize **loops e lógica de programação** para representar cada golpe na rocha e descobrir qual minério foi obtido.

---

## 📥 Entrada

O programa irá solicitar um **número inteiro positivo**, representando a **quantidade de golpes** que você deseja dar com a picareta.

```bash
Digite a quantidade de golpes: 5
```

## 📤 Saída

Para **cada golpe**, o programa exibirá uma mensagem com:

- O **número do golpe**
- O **minério obtido**

### ⛏️ Minérios possíveis:

- `1`: Carvão  
- `2`: Ferro  
- `3`: Diamante  
- `4`: Pedra

---

### 🔁 Exemplo de saída esperada:

```bash
Golpe 1: Você encontrou Pedra!
Golpe 2: Você encontrou Ferro!
Golpe 3: Você encontrou Diamante!
Golpe 4: Você encontrou Carvão!
Golpe 5: Você encontrou Pedra!
```

> ℹ️ **Observação:**  
> A escolha do minério pode ser feita de forma **aleatória** ou seguindo uma **lógica definida por você**.

---

## ✅ Conceitos aplicados

Este desafio permite praticar:

- Estruturas de repetição (**loops**)
- Uso de **if/else** ou **switch**
- Manipulação de **números aleatórios** (opcional)
- Saída de dados **formatada**

---

## 💡 Dica

Use `Math.random()` (em JavaScript) ou funções similares da linguagem escolhida para **sortear minérios aleatórios** a cada golpe.