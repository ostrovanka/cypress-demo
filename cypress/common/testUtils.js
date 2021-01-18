import Configuration from "./Configuration";

const baseUrl = (locale) => {
   Cypress.config("baseUrl", locale.baseUrl(Configuration.server))
}

export default {
   baseUrl
}


