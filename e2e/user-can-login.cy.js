describe('User can login into system', () => {
  it('user can login with valid username and password', () => {
    cy.visit('http://localhost:8000/')
    //Positive test case
    //ambil element html yang ingin digunakan, misal input username dan action yang akan dilakukan
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com') //mengambil elemen input username dan mengetikkan user 
    cy.get(':nth-child(3) > .form-control').type('password') 
    cy.get('.btn').click() //mengambil elemen button dan melakukan klik
    cy.get('.nav-link > .d-sm-none').should('have.text', 'Hi, SuperAdmin')
    
  });
  it('user error on email but correct password', () => {
    cy.visit('http://localhost:8000/')
    cy.get(':nth-child(2) > .form-control').type('emailsalah@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('password') 
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')

  });
  it('user correct on email but invalid password', () => {
    cy.visit('http://localhost:8000/')
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('password-salahhhhh') 
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')

  });
  it('user correct on email but empty password', () => {
    cy.visit('http://localhost:8000/')
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text', 'The password field is required.')

  });
  it('user correct on password but empty email', () => {
    cy.visit('http://localhost:8000/')
    cy.get(':nth-child(3) > .form-control').type('password') 
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text', 'The email field is required.')

  });
  it('no information filled', () => {
    cy.visit('http://localhost:8000/')
    cy.get('.btn').click()
    cy.get(':nth-child(2) > .invalid-feedback').should('have.text', 'The email field is required.')
    cy.get(':nth-child(3) > .invalid-feedback').should('have.text', 'The password field is required.')
   

  });
})