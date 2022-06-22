# Projeto ReactCost

##  React

- Uma bibliateca JS para criação de interfaces;
- Utilizado para construir SAPs ( Single Page Apllication );
- Baseado em componentes;
- Utilza o JSX para renderizar HTML;
- E aplica o virtual DOM para realizar as alterações de DOM;
- Podemos adicionar a um projeto ou criar projetos com ele;

## Entendendo JSX
- O JSX é como um HTML, porém dentro do código JavaScript;
- É a principal maneira de escrever HTYML com o React
- Podemos interpolar variáveis, inserindo ela entre {};
- É possível também executar funções em JSF;
- Inserir valores em atributos de tags também é válido em JSV;

## Componentes
- Permite dividir a aplicação em partes;
- Os componentes renderizam JSX, assim como App.js (que é uma componente);
- Precisamos criar um arquivo de componente;
- E impotá-lo onde precisamos utilizar;
- Normalmente ficam em uma pasta chamada components;

## Props
- As props são valores passados para componentes;
- Podemos deixá-los dinâmicos;
- Ou seja, mudando a execução por causa do valor da prop;
- O valor é passado como um atributo na chamada do componente;
- E precisa ser resgatado dentro de uma propriedade/argumento chamada
props na função de definição do compoente;
- As props sõo somente de leitura!

## Adicionando CSS
- O CSS pode ser adicionado de forma global na aplicação, por meio do arquivo index.css por exemplo;
- Porém é possível estilizar a nível de componentes;
- Utilizamos o CSS modules para isso;
- Basta criar um arquivo como: Componente.module.css;
- E chamar este CSS no componete;

## Fragmentos
* Os React Fragments permite a criação de um componente sem elemento pai;
* O propósito é decomplicar os nós do DOM;
* A sintaxe é <> e </>, não há um nome para a tag;
* Criamos no próprio JSX;

## Avançando em props
- Podemos definir tipos para as props, realizando uma espécie de validação;
- Definimos em um objeto chamado propTypes no próprio componente;
- E ainda há a possibilidade de definir um valor padrão;
- Neste caso utilizamos o objeto defautProps;

## Eventos
* Os eventos de React são os mesmos eventos do DOM;
* Ou seja, temos eventos para responder a um click;
* O evento é atrelado a uma tag que irá executá-lo;
* Geralmente um método é atribuido ao evento;
* Este método deve ser criado no componente;

## useState
- O useState é um hook do React;
- Com ele conseguimos manusear o estado de um componente de forma simples;
- Este hook funciona muito bem com eventos;
- Podemos atrelar um evento a mudança de state;

## Métodos por props
* Os métodos também podem ser passados por props;
* Ou seja, um componente filho pode ativar o método do seu ancestral;
* Vamos acessar o método por meio de um evento;
* A sintaxe é a mesma de uma props de dados: props.meuEvento;

## Renderização por comdição
- Podemos atrelar a exibição de algum elemento a um if;
- Esta ação é chamada de renderização condicional;
- Envolvemos as tags em chaves{};
- Como as chaves executam JavaScript, criamos nossa condição;
- É possível usar o state para criar as condições;

## Renderização de Listas
* Para renderizar uma lista vamos primeiramente precisar de um array;
* Depois utilizamos a função map, para percorrer cada um dos itens;
* Podendo assim renderizar algo na tela;
* É possível unir operadores condicionais com a renderização de listas;

## State lift
- State lift é uma técnica utilizada para compartilhar o state;
- É normal vários componentes dependerem do mesmo estado;
- Então precisamos elevar o nível do mesmo a um componente pai;
- Então centralizamos o state no pai, e definimos quem usa e quem define (setState);

## React Router
* O React Router é um pacote para mudança de URLs da aplicação;
* Podemos assim acessar outras views, sem o page reload;
* Trocando apenas uma parte do layout da aplicação, ou seja, o que muda de view para view;
* Precisamos instalar este pacote no projeto;
* E também realizar algumas mudanças em  como o App é estruturado;

## React Icons
- O React Icons é um pacote de ícones externo;
- Precisamos adicionar ao projeto através do npm;
- Ele nos permite adicionar ícones ao projeto com uma sintaxe parecida a de componentes;
- Além disso há uma grande quantidade de ícones disponíveis;