- Uma única frase deve ser entregue por dia
- Frases não devem se repetir antes de esgotar o pool
- A seleção deve considerar os interesses do usuário

O que acontece caso acabem as frases em banco?
Acredito que seria ideal ir enviando as frases da mais antiga para a mais recente, até serem adicionadas novas frases no banco de dados.

Usuário pode trocar interesses?
Sim, posso implementar no front, assim ele deixa salvo apenas no sqlite local do mobile, e o backend continua sem manter dados do usuário.

Se escolher Filosofia e Esportes, a distribuição é 50/50?
Nesse caso depende da quantidade, acho que ao invés de pensar em porcentagens, vale a pena colocar um pull geral com todas as frases todos os tópicos de interesse do usuário e apenas puxar desse pull sem repetir