import { ChatOllama } from '@langchain/ollama';

const llm = new ChatOllama({
  model: 'gemma2:2b',
});

console.log('Protótipo de IA Gen');
console.log('<><><><><><><><><>');

const question = "Como são os problemas da educação no Brasil?";
console.log(`Pergunta: ${question}`);

const response = await llm.invoke(question);
console.log(`Resposta: ${response.content}`);