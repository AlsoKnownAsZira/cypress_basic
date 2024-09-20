describe('template spec', () => {
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
  
  it('user can delete data', () => {
//ACT (using more efficient selector)
//  cy.get(".table td").contains('user').next().next().next().contains('Delete').click();
// cy.get('tr td').contains('user').nextAll().contains('Delete').click();
cy.get('.table td').contains('user').parent().find('button').contains('Delete').click();
//sweeet alert
cy.get('.swal-modal').find('button').contains('OK').click();
//ASSERT
cy.get('.alert').should('be.visible').contains('User Deleted Successfully');

  })
  it('user can cancel delete data', () => {
    cy.get('.table td').contains('user').parent().find('button').contains('Delete').click();
    //sweeet alert
    cy.get('.swal-modal').find('button').contains('Cancel').click();
    //ASSERT
    cy.get('.table td').contains('user')
  })
})