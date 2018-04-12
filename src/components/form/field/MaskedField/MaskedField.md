# MaskedField

A prop 'mask' é um array de strings ou expressões regulares, sendo as strings os caracteres fixos da máscara e as expressões regulares a expressão que pode ser digitada pelo usuário nesta posição.

No caso do telefone, por exemplo:

```
mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
```

Componente construído a partir de https://github.com/text-mask/text-mask.
