# DiarioDeClasse_Frontend

### Integrantes da equipe:

Matheus Gabriel da Silva, 
Larissa Hoffman de Souza, 
Eduardo da maia Haak, 
Lukas Thiago Rodrigues, 
Mateus Akira de Oliveira Muranaka

## Requisitos Funcionais

 - **RF001:** O usuário Administrador deve poder cadastrar novos professores, fornecendo informações como e-mail e senha.

 - **RF002:** Tanto o usuário Administrador quanto o usuário Professor devem poder realizar login com e-mail e senha.

 - **RF003:** O usuário Administrador deve criar novas turmas, atribuindo um nome, código e um professor responsável.

 - **RF004:** O usuário Administrador deve editar os detalhes das turmas existentes.

 - **RF005:** O usuário Administrador deve excluir turmas que não são mais necessárias.

 - **RF006:** O usuário Professor deve visualizar as turmas nas quais está cadastrado, com detalhes como lista de alunos.

 - **RF007:** O usuário Administrador deve cadastrar novos alunos em turmas, inserindo informações como nome, e-mail, data de nascimento, código da matrícula, cartão de crédito frente e verso.

 - **RF008:** O usuário Administrador deve editar os dados dos alunos quando necessário.

 - **RF009:** O usuário administrador deve poder remover alunos de turmas.

 - **RF010:** O usuário Professor deve visualizar a lista de alunos de sua turma, incluindo informações básicas.

 - **RF011:** O usuário Professor deve registrar a presença dos alunos, podendo marcar como "Presente", "Faltou" ou "Falta Justificada".

 - **RF012:** O usuário Professor deve visualizar o histórico de presença de cada aluno.

 - **RF013:** O usuário Professor deve registrar notas de avaliações e atividades de cada aluno.

 - **RF014:** O usuário Professor deve poder visualizar as notas registradas de seus alunos e calcular médias.


## Requisitos Não Funcionais

 - **RNF001:** O sistema deve processar registros de presença e notas rapidamente. (dentro de 24 horas, em dias úteis)

 - **RNF002:** O sistema deve suportar a adição de novos professores e turmas sem impacto significativo na performance.

 - **RNF003:** As senhas devem ser criptografadas e as sessões de usuário devem expirar após um período de inatividade.

 - **RNF004:** O sistema deve ter uma interface intuitiva, testada com usuários para facilitar a navegação.

 - **RNF005:** O sistema deve ser acessível em navegadores modernos (Chrome, Firefox, Safari, Edge).

 - **RNF006:** O sistema deve atender às diretrizes de acessibilidade para garantir que todos os usuários possam utilizá-lo.

 - **RNF007:** O sistema deve manter logs de atividades dos usuários para auditoria e rastreamento de erros.

 - **RNF008:** O sistema deve passar por testes de carga para garantir que suporte o número esperado de usuários simultâneos.

##História de Usuário

**UC 1: Cadastro de Usuário (ADM)**

- **Como** administrador, **quero** cadastrar novos professores fornecendo informações como e-mail e senha, **para que** eles possam acessar o sistema.
 - **Critérios de Aceitação:**
  - O ADM deve inserir e-mail e senha do professor.
  - A conta deve ser criada com sucesso.
 - **Definition of Done:**
  - A funcionalidade de cadastro de professores está implementada.
  - Testes de criação e validação de conta concluídos.

**UC 2:** Login de Usuário

- **Como** administrador ou professor, **quero** realizar login com e-mail e senha, **para que** eu possa acessar o sistema.
 - **Critérios de Aceitação:**
  - O sistema deve permitir login com e-mail e senha corretos.
  - Exibir erro se o login falhar por e-mail ou senha incorretos.
 - **Definition of Done:**
  -Função de login implementada e testada para ADM e professores.

**UC 3:** Criação de Turmas (ADM)

- **Como** administrador, **quero** criar novas turmas atribuindo um nome, código e professor responsável, **para que** as turmas possam ser organizadas no sistema.
 - **Critérios de Aceitação:**
  - O ADM deve inserir o nome, código e selecionar um professor para a turma.
  - A turma deve ser criada com sucesso e exibida na lista de turmas.
 - **Definition of Done:**
  -Funcionalidade de criação de turmas implementada e testada.

**UC 4:** Edição de Turmas (ADM)

- **Como** administrador, **quero** editar os detalhes das turmas existentes, **para que** eu possa corrigir ou atualizar informações conforme necessário.
 - **Critérios de Aceitação:**
  - O ADM deve poder alterar o nome, código e professor da turma.
  - As atualizações devem ser salvas com sucesso.
 - **Definition of Done:**
  - Funcionalidade de edição de turmas implementada e testada.

**UC 5:** Exclusão ou Arquivamento de Turmas (ADM)
  
- **Como** administrador, **quero** excluir ou arquivar turmas que não são mais necessárias, **para que** eu possa manter o sistema organizado.
 - **Critérios de Aceitação:**
  - O ADM deve poder excluir ou arquivar uma turma da lista de turmas.
  - Exibir um aviso de confirmação antes de excluir uma turma.
 - **Definition of Done:**
  - Funcionalidade de exclusão/arquivamento de turmas implementada e testada.

**UC 6:** Visualização de Turmas (Professor)
  
- **Como** professor, **quero** visualizar as turmas nas quais estou cadastrado, **para que** eu possa ver as listas de alunos e outros detalhes.
 - **Critérios de Aceitação:**
  - O professor deve ver uma lista de suas turmas com os detalhes, como nome da turma, código, e lista de alunos.
 - **Definition of Done:**
  - Funcionalidade de visualização de turmas para professores implementada e testada.

**UC 7:** Cadastro de Alunos (ADM)
  
- **Como** administrador, **quero** cadastrar novos alunos em turmas, fornecendo informações como nome, e-mail, data de nascimento e código de matrícula, **para que** os alunos possam ser registrados no sistema.
 - **Critérios de Aceitação:**
  - O ADM deve inserir os dados do aluno e associá-lo a uma ou mais turmas.
  - O cadastro deve ser salvo com sucesso.
 - **Definition of Done:**
  - Funcionalidade de cadastro de alunos implementada e testada.

**UC 8:** Edição de Alunos (ADM)
  
- **Como** administrador, **quero** editar os dados dos alunos, **para que** eu possa corrigir ou atualizar as informações conforme necessário.
 - **Critérios de Aceitação:**
  - O ADM deve poder alterar dados como nome, e-mail e turmas registradas.
  - As alterações devem ser salvas com sucesso.
 - **Definition of Done:**
  - Funcionalidade de edição de alunos implementada e testada.

**UC 9:** Exclusão de Alunos (ADM)
  
- **Como** administrador, **quero** remover alunos de turmas, **para que** eu possa gerenciar a lista de alunos conforme necessário.
 - **Critérios de Aceitação:**
  - O ADM deve poder remover um aluno de uma turma.
  - Exibir um aviso de confirmação antes de excluir o aluno.
 - **Definition of Done:**
  - Funcionalidade de exclusão de alunos implementada e testada.

**UC 10:** Visualização de Alunos (Professor)
  
- **Como** professor, **quero** visualizar a lista de alunos da minha turma, **para que** eu possa ver suas informações básicas.
 - **Critérios de Aceitação:**
  - O professor deve visualizar uma lista de alunos, com informações como nome, e-mail, notas e presença.
 - **Definition of Done:**
  -Funcionalidade de visualização de alunos implementada e testada.

**UC 11:** Registro de Presença (Professor)

- **Como** professor, **quero** registrar a presença dos alunos, **para que** eu possa acompanhar a assiduidade de cada um.
 - **Critérios de Aceitação:**
  - O professor deve poder marcar um aluno como "Presente", "Faltou" ou "Falta Justificada".
  - O registro de presença deve ser salvo corretamente.
 - **Definition of Done:**
  - Funcionalidade de registro de presença implementada e testada.

**UC 12:** Visualização de Registro de Presença (Professor)

- **Como** professor, **quero** visualizar o histórico de presença de cada aluno, **para que** eu possa acompanhar seu desempenho.
 - **Critérios de Aceitação:**
  - O professor deve poder visualizar o histórico completo de presença de cada aluno.
 - **Definition of Done:**
  - Funcionalidade de visualização de presença implementada e testada.

**UC 13:** Inserção de Notas (Professor)

- **Como** professor, **quero** registrar as notas de avaliações e atividades dos alunos, **para que** eu possa registrar seu desempenho acadêmico.
 - **Critérios de Aceitação:**
  - O professor deve poder inserir notas para avaliações e atividades.
  - As notas devem ser salvas com sucesso.
 - **Definition of Done:**
  - Funcionalidade de inserção de notas implementada e testada.

**UC 14:** Visualização de Notas (Professor)

- **Como** professor, **quero** visualizar as notas dos meus alunos, **para que** eu possa acompanhar o progresso acadêmico.
 - **Critérios de Aceitação:**
  -O professor deve visualizar todas as notas registradas e também as médias, que serão geradas pelo sistema.
 - **Definition of Done:**
  - Funcionalidade de visualização de notas e cálculo de médias implementada e testada.

