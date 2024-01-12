##encoding: UTF-8
##language: pt

Funcionalidade: Visualizar Detalhes do Produtos
    Como um usuario do sistema SWAGLABS
    "User" realiza o login no sistema
    Para que possa visualizar detalhes de cada produto disponivel

Contexto:  
    Dado que "User" possui uma conta no sistema e esteja logado

Cenario: Visualizar detalhes dos produtos
    E ele faz "login" no sistema
    Quando ele aciona a opção "All Items"
    E seleciona um produto
    Então é exibida a tela de detalhes do produto exibindo nome, descrição e preço
    E ele pode adicionar um produto ao carrinho
    E ele pode remover um produto adicionado ao carrinho
    E ele pode voltar para a tela de produtos
