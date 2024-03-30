# BuscaCep  



Projeto para Consulta de CEP utilizando a API ViaCEP.

Este projeto consiste em um backend desenvolvido em JavaScrpti  que se conecta à API ViaCEP para realizar consultas de CEP e fornecer informações detalhadas sobre endereços no Brasil. Ele oferece uma maneira simples e eficiente de obter dados de endereço utilizando a infraestrutura robusta fornecida pela API ViaCEP.




https://viacep.com.br/.




## Autores

- [@Felipe200304](https://github.com/Felipe200304)


## Documentação da API

#### Retorna todos os itens

```http
  GET /enderecos
```

#### Salva um item

```http
  POST /enderecos/salvar

```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `body`      | `json` | **Obrigatório**


#Funcionalidades
- Consulta de CEP: O backend permite a consulta de informações de endereço através da inserção de um CEP válido;
- persiste dados em um banco Mysql através do botão 'salvar';
- Exibe histórico de pesquisas feitas pelo usuário.
