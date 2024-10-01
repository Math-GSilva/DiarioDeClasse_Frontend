# DiarioDeClasse_Frontend


## Requisitos Funcionais

**RF001:** O usuário Administrador deve poder cadastrar novos professores, fornecendo informações como e-mail e senha.

**RF002:** Tanto o usuário Administrador quanto o usuário Professor devem poder realizar login com e-mail e senha.

**RF003:** O usuário Administrador deve criar novas turmas, atribuindo um nome, código e um professor responsável.

**RF004:** O usuário Administrador deve editar os detalhes das turmas existentes.

**RF005:** O usuário Administrador deve excluir turmas que não são mais necessárias.

**RF006:** O usuário Professor deve visualizar as turmas nas quais está cadastrado, com detalhes como lista de alunos.

**RF007:** O usuário Administrador deve cadastrar novos alunos em turmas, inserindo informações como nome, e-mail, data de nascimento, código da matrícula, cartão de crédito frente e verso.

**RF008:** O usuário Administrador deve editar os dados dos alunos quando necessário.

**RF009:** O usuário administrador deve poder remover alunos de turmas.

**RF010:** O usuário Professor deve visualizar a lista de alunos de sua turma, incluindo informações básicas.

**RF011:** O usuário Professor deve registrar a presença dos alunos, podendo marcar como "Presente", "Faltou" ou "Falta Justificada".

**RF012:** O usuário Professor deve visualizar o histórico de presença de cada aluno.

**RF013:** O usuário Professor deve registrar notas de avaliações e atividades de cada aluno.

**RF014:** O usuário Professor deve poder visualizar as notas registradas de seus alunos e calcular médias.


## Requisitos Não Funcionais

**RNF001:** O sistema deve processar registros de presença e notas rapidamente. (dentro de 24 horas, em dias úteis)

**RNF002:** O sistema deve suportar a adição de novos professores e turmas sem impacto significativo na performance.

**RNF003:** As senhas devem ser criptografadas e as sessões de usuário devem expirar após um período de inatividade.

**RNF004:** O sistema deve ter uma interface intuitiva, testada com usuários para facilitar a navegação.

**RNF005:** O sistema deve realizar backups automáticos diários dos dados e ter um plano de recuperação.

**RNF006:** O sistema deve ser acessível em navegadores modernos (Chrome, Firefox, Safari, Edge).

**RNF007:** O sistema deve atender às diretrizes de acessibilidade para garantir que todos os usuários possam utilizá-lo.

**RNF008:** O sistema deve manter logs de atividades dos usuários para auditoria e rastreamento de erros.

**RNF009:** O sistema deve passar por testes de carga para garantir que suporte o número esperado de usuários simultâneos.
