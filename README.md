# Organograma em TypeScript React
O Organo é aplicação desenvolvida no curso <a href="https://cursos.alura.com.br/course/react-desenvolvendo-javascript" target="_blank">React: desenvolvendo com JavaScript</a>. 
Este projeto em questão é a migração do sistema para typescript, finalizando uma formação React.

## Linguagens, técnicas, módulos e componentes
- React (create-react-app)
- Typescript
- CSS puro
- React Hooks

## 🛠️ Abrir e rodar o projeto
Para abrir e rodar o projeto, execute `npm i` para instalar as dependências e `npm start` para inicar o projeto.

Depois, acesse <a href="http://localhost:3000/">http://localhost:3000/</a> no seu navegador.


## Aprendizados e anotações
### Migrar para typescript
1. Clonar o projeto, rodar `npm i` e depois testar usando o `npm start` (pois o projeto foi criado usando o comando _npx create-react-app_).
2. Se estiver tudo funcionando ok, agora é instalar o typescript através do comando abaixo:

    `npm i --save typescript @types/node @types/react @types/react-dom @types/jest`

    Em que o:
    - _--save_ faz salvar na árvore de dependências do projeto (packages.json)
    - _typescript_ é o que vamos baixar, que é basicamente sobre tipos

    Os outros parâmetros são para que, ao começarmos a adaptar o projeto, já tenhamos alguns tipos, classes, interfaces que nos auxiliem a construção, explicando que isso é um _hook_ etc.
    - _@types/node_ traz todos os tipos utilizados no módulo node
    - _@types/react_ traz a tipagem do react
    - _@types/react-dom_ funciona com o react pra manipular o dom
    - _@types/jest_ tipos do jest, que é sobre testes

3. Cria-se o arquivo de configuração que vai mostrar como o arquivo typescript vai se comportar no projeto. Ele especifica opções do compilador necessárias para compilar o projeto.

    `npx tsc --init`

    - _npx_ roda o comando remoto para não ter que ficar baixando bibliotecas que não são usados com tanta frequência.
    - _tsc_ nome do script que quero rodar
    - _--init_ de inicialização

4. Roda a aplicação, veja no console, se estiver ok, não quebrou nada, tudo funcionando.

### Elementos
- ReactElement é um objeto com um tipo e props.
- ReactNode é um ReactElement, um ReactFragment, uma string, um number ou uma lista de ReactNodes, ou null, undefined ou boolean.
- JSX.Element é um ReactElement com o tipo genérico para props e type sendo any. Ele existe para permitir que outras bibliotecas implementem o JSX de seu próprio jeito customizado.

### Diretório _shared_

Diz respeito aos objetos que serão compartilhados em toda a aplicação. A interface _IColaborador_ refere-se ao domínio todo do sistema, não ao componente visual.


### Inferência de tipo ou generics

Hooks tendem a inferir os tipos, por exemplo no código abaixo, o useState infere que é string, porque está inicializando com uma string.

`const [a, setA] = useState('')`

Porém, quando o hook não consegue inferir, como no caso abaixo, é um array de que? Então aparece um erro do tipo _tal coisa not assignable to type 'never'_ ou _tal coisa does not exist on type 'never'_.

`const [colaboradores, setColaboradores] = useState([])`

Neste caso, em que a inferência não foi possível, deve-se informar o tipo, através do generics. Ficando assim.

`const [colaboradores, setColaboradores] = useState<IColaborador[]>([])`


### tsconfig e o "nunca será nulo"

Ao reclamar que pode retornar algo nulo, você pode forçar para garantir que nunca será nulo, através da !, como no caso abaixo. Lembrando que as configurações (no caso desta seria o _strictNullChecks_) podem ser ajustadas dentro do arquivo **tsconfig.json** para ligar ou desligar as regras de compilação do TypeScript. https://www.typescriptlang.org/tsconfig/

`document.getElementById('root')!`


### JSDoc
O typescript pode forçar a utilização da tipagem, em nível de declaração, para que os erros sejam capturados ainda em nível de compilação.

Paralelamente o javascript pode ser documentado através do [JSDoc](https://jsdoc.app/tags-type) para trazer um efeito semelhante, qual seja, esclarecer aquele que está contribuindo no projeto dos tipos de dados está sendo esperado.

Em Javascript com JSDoc

```
/** @type {string} */
const nome;
```

em type script

`const nome: string`
