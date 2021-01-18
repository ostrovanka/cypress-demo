class LoginPage {
   visit() {
      cy.visit("/login.jsp")
   }

   fillUserName(userName) {
      cy.get("#username").type(userName);
   }

   fillPassword(password) {
      cy.get("#password").type(password);
   }

   clickLogin(){
      cy.get('button#login-submit').click();
   }

   login(userName, password){
      this.fillUserName(userName);
      this.fillPassword(password);
      this.clickLogin();
   }

   verifyErrorDisplayed(){
      cy.get('div.accountLogin_alert-danger ').should("be.visible").should('not.be.empty');
   }
}

export default LoginPage;
