## Hello World Action

Esta ação imprime "Hello, World!" ou cumprimenta uma pessoa especificada.

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
