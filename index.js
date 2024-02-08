const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Um framework de CSS",
        "Uma linguagem de programação",
        "Um banco de dados NoSQL",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar um elemento HTML pelo seu ID",
        "Selecionar um elemento HTML pelo seu nome",
        "Selecionar um elemento HTML pelo seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Uma estrutura de controle",
        "Um tipo de dado",
        "Um bloco de código reutilizável",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "for (i <= 5; i++)",
        "for (i = 0; i <= 5)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código?\nconsole.log(typeof 'hello');",
      respostas: [
        "string",
        "number",
        "boolean",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um framework de estilo",
        "Uma linguagem de script",
        "Uma representação em árvore dos elementos HTML de uma página",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener'?",
      respostas: [
        "Adicionar um elemento HTML à página",
        "Registrar um manipulador de eventos em um elemento HTML",
        "Remover um elemento HTML da página",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição.
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    // coloca a pergunta na
    quiz.appendChild(quizItem)
  }