describe('user can edit existing data', () => {
  //ARRANGE
  beforeEach(() => {
    cy.exec('cd D:/qa-basic/demo-app-cypress-automation && php artisan migrate:fresh --seed');
    cy.visit('http://localhost:8000/');
    cy.get(':nth-child(2) > .form-control').clear('superadmin@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(2) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > li > .nav-link').click();
  });
  afterEach(() => {    cy.exec('cd D:/qa-basic/demo-app-cypress-automation && php artisan migrate:fresh --seed');
  });

  //positive test case
  it('positive test case', () => {
    //ACT
   cy.get('tr td').contains('user').nextAll().contains('Edit').click();
   cy.get('#name').clear().type('user edited');
    cy.get('#email').clear().type('useredited@gmail.com');
    cy.get('.card-footer').contains('Submit').click();
    //ASSERT
    cy.get('.alert').should('be.visible').contains('User Berhasil Diupdate');
    cy.get('tr td').contains('user').should('have.text', 'user edited');
    cy.get('tr td').contains('user').next().should('have.text', 'useredited@gmail.com');
  })



  //negative test case
  it('user not filling the username', () => {
   //ACT
   cy.get('tr td').contains('user').nextAll().contains('Edit').click();
   cy.get('#name').clear();
    cy.get('#email').clear().type('useredited@gmail.com');
    cy.get('.card-footer').contains('Submit').click();
    //ASSERT
    cy.get('.invalid-feedback').should('be.visible').contains('The name field is required.');
  })

  it('user not filling the email', () => {
    //ACT
    cy.get('tr td').contains('user').nextAll().contains('Edit').click();
    cy.get('#name').clear().type('user edited');
     cy.get('#email').clear();
     cy.get('.card-footer').contains('Submit').click();
     //ASSERT
     cy.get('.invalid-feedback').should('be.visible').contains('The email field is required.');
})
it('user not filling the username and email', () => {
  //ACT
  cy.get('tr td').contains('user').nextAll().contains('Edit').click();
  cy.get('#name').clear();
   cy.get('#email').clear();
   cy.get('.card-footer').contains('Submit').click();
   //ASSERT
   cy.get('.invalid-feedback').should('be.visible').contains('The name field is required.');
   cy.get('.invalid-feedback').should('be.visible').contains('The email field is required.');
 })
 it('user enters invalid email format', () => {
  // ACT
  cy.get('tr td').contains('user').nextAll().contains('Edit').click();
  cy.get('#name').clear().type('user edited');
  cy.get('#email').clear().type('invalid-email');
  cy.get('.card-footer').contains('Submit').click();
  // ASSERT
  cy.get('.invalid-feedback').should('be.visible').contains('The email must be a valid email address.');
})
  })
