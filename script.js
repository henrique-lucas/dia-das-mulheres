// Crie um array com as mensagens
const messages = [
  "O Dia Internacional da Mulher é celebrado em todo o mundo em 8 de março. É uma ocasião para honrar as conquistas e contribuições das mulheres à sociedade, bem como destacar as desigualdades de gênero que ainda existem e a luta por igualdade de direitos e oportunidades.",
  "O Dia das Mulheres é uma oportunidade para celebrar as mulheres que mudaram o curso da história com sua coragem, determinação e perseverança. É também um momento para refletir sobre os desafios que as mulheres enfrentam hoje e para trabalhar juntos em direção a um futuro mais justo e igualitário para todas as mulheres.",
  "Neste Dia das Mulheres, é importante lembrar que as mulheres de todo o mundo ainda enfrentam desafios significativos em sua luta por igualdade. A discriminação de gênero, a violência contra as mulheres e a falta de acesso a oportunidades e recursos são apenas algumas das questões que ainda precisam ser abordadas.",
  "O Dia das Mulheres é uma oportunidade para honrar as mulheres em nossas vidas que nos inspiram e nos capacitam. Mães, avós, irmãs, filhas, amigas e colegas de trabalho - todas desempenham um papel fundamental em nossas vidas e comunidades.",
  "O Dia das Mulheres é um momento para celebrar a diversidade e inclusão, reconhecendo que as mulheres de diferentes origens, raças, orientações sexuais e identidades de gênero enfrentam desafios únicos e que todos merecem igualdade de oportunidades e respeito.",
];

// Selecione o botão e a div onde a mensagem será exibida
const generateButton = document.querySelector("#clicaAi");
const messageDiv = document.querySelector("#text");

// Adicione um event listener para o botão
generateButton.addEventListener("click", () => {
  // Gere um número aleatório para selecionar uma mensagem do array
  const randomIndex = Math.floor(Math.random() * messages.length);
  // Exiba a mensagem na div
  messageDiv.textContent = messages[randomIndex];
});