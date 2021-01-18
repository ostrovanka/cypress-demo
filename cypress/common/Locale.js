class Locale {
   constructor(name, domain) {
      this.name = name;
      this.domain = domain;
      this.productionUrl = "https://lookfantastic"
   }

   baseUrl(server) {
      return server === "production" ? this.productionUrl + "." + this.domain : ""
   }

}

export default Locale;
