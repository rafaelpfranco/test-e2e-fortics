##encoding: UTF-8
##language: pt

Funcionalidade: Login
    Como um usuario do sistema SWAGLABS
    "User" quer fazer Login
    Para que ele tenha acesso às funcionalidades de usuario logado

Contexto:  
    Dado que "User" possui uma conta no sistema

Cenario: Login Valido
    E ele acessa a pagina de Login
    E ele preenche suas credenciais válidas
    Quando ele aciona a opção para logar
    Então ele deve ser redirecionado para a pagina de produtos

Cenario: Login com usuário bloqueado
    E ele acessa a pagina de Login
    E ele preenche suas credenciais válidas
    Quando ele aciona a opção para logar
    Então uma mensagem de aviso que o usuário está bloqueado deve ser exibida

Cenário: Login com senha incorreta
    E ele acessa a pagina de Login
    E ele preenche suas credenciais com senha incorreta
    Quando ele aciona a opção para logar
    Então uma mensagem de aviso de usuário ou senha incorreta deve ser exibida

Cenario: Login com campos vazios
    E ele acessa a pagina de Login
    Quando ele aciona a opção para logar
    Então uma mensagem de aviso de campos vazios deve ser exibida

Cenario: Login com username incorreto
    E ele acessa a pagina de Login
    E ele preenche suas credenciais com CPF não cadastrado
    Quando ele aciona a opção para logar
    Então uma mensagem de aviso de usuário ou senha incorreta deve ser exibida
