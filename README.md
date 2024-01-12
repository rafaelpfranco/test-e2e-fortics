# Testes e2e Swag Labs

Testes automatizados e2e para sistema de Swag Labs usando Cypress


## Instalação

Instalar as depedencias do projeto usando:

```bash
  npm install 
```
## Executando os testes

Para executar os testes via terminal e gerar relatório, use esse comando:

```bash
  npx cypress run
```

Para visualizar os testes via executavel do cypress, utilize o comando:

```bash
  npx cypress open
```
  
## Padrões

 ###  Organização de pastas 
 
 - **e2e/fixtures** *(json com os dados utilizados)*
 - **2e2/integration** *(scripts de teste)*
 - **support/pageObjects** *(Ações de interação com a pagina web)*
 - **reports/mocha** *(Relatório do testes executados)*
 - **features** *(Casos de testes)*
