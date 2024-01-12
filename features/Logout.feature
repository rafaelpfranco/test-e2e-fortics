##encoding: UTF-8
##language: pt

Funcionalidade: Logout no sistema
    Como um usuario do sistema SWAGLABS
    "User" esteja logado no sistema
    E deseja sair do sistema

Contexto:  
    Dado que "User" possui uma conta no sistema e esteja logado

Cenario: Logout - Happy Day
    Quando ele aciona o ícone de menu
    E seleciona a opção de logout
    Então ele é redirecionado para a tela de login