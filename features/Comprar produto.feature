##encoding: UTF-8
##language: pt

Funcionalidade: Comprar produtos
    Como um usuario do sistema SWAGLABS
    "User" realiza o login no sistema
    Para que possa Comprar produtos disponiveis

Contexto:  
    Dado que "User" possui uma conta no sistema e esteja logado

Cenario: Comprar produtos - Happy Day
    Quando ele aciona a opção "All Items"
    Então uma lista de produtos é exibida
    E ele adiciona um ou mais produtos ao carrinho
    E o icone do carrinho é atualizado com a quantidade de produtos atuais
    Quando ele aciona a opção "Checkout"
    Então o sistema exibe a tela pedindo informações do comprador
    E ele preenche as informações do comprador corretamente
    Quando ele aciona a opção "Continue"
    Então o sistema exibe a tela de confirmação do pedido
    E ele confirma o pedido
    Então o sistema exibe a tela de agradecimento pela compra

Cenario: Comprar produtos sem inserir itens no carrinho
    Quando ele aciona a opção "All Items"
    Então uma lista de produtos é exibida
    E ele adiciona um ou mais produtos ao carrinho
    E o icone do carrinho é atualizado com a quantidade de produtos atuais
    Quando ele aciona a opção "Checkout"
    Então o sistema deve exibir uma mensagem de erro informando que não há itens no carrinho
     

Cenario: Comprar produtos sem inserir nome
    Quando ele aciona a opção "All Items"
    Então uma lista de produtos é exibida
    E ele adiciona um ou mais produtos ao carrinho
    E o icone do carrinho é atualizado com a quantidade de produtos atuais
    Quando ele aciona a opção "Checkout"
    Então o sistema exibe a tela pedindo informações do comprador
    E ele preenche as informações do comprador corretamente, com excessão do nome
    Então o sistema deve exibir uma mensagem de erro informando que o nome é obrigatório

Cenario: Comprar produtos sem inserir sobrenome
    Quando ele aciona a opção "All Items"
    Então uma lista de produtos é exibida
    E ele adiciona um ou mais produtos ao carrinho
    E o icone do carrinho é atualizado com a quantidade de produtos atuais
    Quando ele aciona a opção "Checkout"
    Então o sistema exibe a tela pedindo informações do comprador
    E ele preenche as informações do comprador corretamente, com excessão do sobrenome
    Então o sistema deve exibir uma mensagem de erro informando que o sobrenome é obrigatório

Cenario: Comprar produtos sem inserir zip code
    Quando ele aciona a opção "All Items"
    Então uma lista de produtos é exibida
    E ele adiciona um ou mais produtos ao carrinho
    E o icone do carrinho é atualizado com a quantidade de produtos atuais
    Quando ele aciona a opção "Checkout"
    Então o sistema exibe a tela pedindo informações do comprador
    E ele preenche as informações do comprador corretamente, com excessão do zip code
    Então o sistema deve exibir uma mensagem de erro informando que o zip code é obrigatório

Cenario: Comprar produtos com zip code invalido
    Quando ele aciona a opção "All Items"
    Então uma lista de produtos é exibida
    E ele adiciona um ou mais produtos ao carrinho
    E o icone do carrinho é atualizado com a quantidade de produtos atuais
    Quando ele aciona a opção "Checkout"
    Então o sistema exibe a tela pedindo informações do comprador
    E ele preenche as informações do comprador corretamente, com excessão do zip code que é invalido
    Então o sistema deve exibir uma mensagem de erro informando que o zip code é invalido