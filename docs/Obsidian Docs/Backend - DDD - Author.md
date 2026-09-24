Definição
Objeto que representa um autor, contendo seu nome, uma biografia opcional e os anos de nascimento e falecimento, quando conhecidos.

Estrutura
- id
- name
- biography (opcional)
- birth_year (opcional)
- death_year (opcional)

Regras
- `name` é obrigatório.
- `biography` pode ser `None` e pode ser preenchida posteriormente.
- `birth_year` e `death_year` são inteiros opcionais, pois a data exata de autores antigos pode ser desconhecida.
- Não deve ser inventada precisão histórica quando apenas o ano for conhecido.