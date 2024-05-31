class LoginPage {
  visit() {
    cy.visit('/');
  }

  // Define additional methods as needed
}

export default LoginPage;
export const login = new LoginPage();
