import LoginPage from "./LoginPage";

class VisitorHomePage {

   visit() {
      cy.visit("/")
   }

   goToLoginPage(){
      cy.get("a[data-context=login]").invoke("show").click({ force: true })
      return new LoginPage()
   }
}

export default VisitorHomePage;
