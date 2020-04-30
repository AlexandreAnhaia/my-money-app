const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

// Essa linha faz com que o erro de REQUIRED seja trocado para uma mensagem mais amigável como a String abaixo.
// Mas para ficar melhor coloquei uma mensagem mais amigável dentro do Schema lá no billingCycle.js no atributo valor do Dbt
// mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"

mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."