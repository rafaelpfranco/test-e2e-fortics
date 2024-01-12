##encoding: UTF-8
##language: pt

Funcionalidade: Visualizar Produtos
    Como um usuario do sistema SWAGLABS
    "User" realiza o login no sistema
    Para que possa visualizar os produtos disponiveis

Contexto:  
    Dado que "User" possui uma conta no sistema e esteja logado

Cenario: Visualizar a lista de produtos - Happy Day
    E ele faz "login" no sistema
    Quando ele aciona a opção "All Items"
    Então uma lista de produtos é exibida
    E ele pode visualizar os detalhes de cada produto
    E ele pode adicionar um produto ao carrinho
    E ele pode remover um produto adicionado ao carrinho
    E o icone do carrinho é atualizado com a quantidade de produtos atuais
    E ele pode ordenar a lista de produtos por nome ou preço

