## Hello World Action

Esta ação imprime "Hello, World!" ou cumprimenta uma pessoa especificada.

> A cada alteração no arquivo index.js é necessário executar o comando abaixo:

```sh
ncc build index.js --license licenses.txt
```

### Inputs

- `who-to-greet`: A pessoa para cumprimentar. (Padrão: `"World"`)

### Outputs

- `greeting-message`: A mensagem de saudação gerada.

### Exemplo de Uso

```yaml
steps:
  - name: Usar Hello World Action
    uses: riosvictor/hello-world-action@v1.0.0
    with:
      who-to-greet: 'John'
