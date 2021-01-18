import Locale from "./Locale";


const allLocales = require('../fixtures/locales.json');
const server = Cypress.env('server');
const locales = Cypress.env('locales').replace(" ", "").split(",").map(loc => {
   return new Locale(loc, allLocales[loc].domain)
})


export default {
   locales, server
}
