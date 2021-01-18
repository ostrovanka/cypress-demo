import testUtils from "../../common/testUtils";
import Configuration from "../../common/Configuration";
import LoginPage from "../../elements/pages/LoginPage";
import VisitorHomePage from "../../elements/pages/VisitorHomePage";

describe('Login Tests', () => {
   Configuration.locales.forEach((locale) => {
      it(`${locale.name} Login with invalid creds`, function () {
         testUtils.baseUrl(locale);
         cy.log("BASE: "+locale.baseUrl(Configuration.server))
         const vhp = new VisitorHomePage()
         vhp.visit()
         const loginPage = vhp.goToLoginPage()
         loginPage.login("test@mail.com", "12345")
         loginPage.verifyErrorDisplayed()
      })
   })
})


