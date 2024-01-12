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
 - **fixtures** *(json com os dados utilizados)*
 - **integration** *(scripts de teste)*
 - **pageObjects** *(Ações de interação com a pagina web)*
