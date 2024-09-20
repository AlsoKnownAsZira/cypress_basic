describe('template spec', () => {
before(() => {
cy.log('testing started')});
after(() => {
cy.log('all testing  finished')});
afterEach(() => {
  cy.get('.nav-link > .d-sm-none').click();
   cy.get('.text-danger').click();
cy.log('testing for this test case done')});

beforeEach(() => {
  cy.visit('http://localhost:8000/');
  cy.exec('cd D:/qa-basic/demo-app-cypress-automation && php artisan migrate:fresh --seed');
  cy.get(':nth-child(2) > .form-control').clear('superadmin@gmail.com');
  cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
  cy.get(':nth-child(3) > .form-control').type('password');
  cy.get('.btn').click();
  cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
  cy.get(':nth-child(2) > .has-dropdown > span').click();
  cy.get('.active > .dropdown-menu > li > .nav-link').click();
});
  it('user successfully created new users', () => {
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('user baru');
    cy.get('#email').type('emailbaru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();
    //assertion
   cy.get('p').should('be.visible');
   cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
  })
  it('user did not fill username', () => {
    cy.get('.card-header-action > .btn-icon').click();
    // cy.get('#name').type('user baru');
    cy.get('#email').type('emailbaru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();
    //assertion
    cy.get('.card-body > form > :nth-child(2)').should('include.text', 'The name field is required.');
  })
  it('user did not fill email', () => {
 
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('user baru');
    // cy.get('#email').type('emailbaru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();

    //assertion
    cy.get('.card-body > form > :nth-child(3)').should('include.text', 'The email field is required.');
  })
  it('user did not fill password', () => {
 
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('user baru');
    cy.get('#email').type('emailbaru@gmail.com');
    // cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();
    //assertion
    cy.get('.card-body > form > :nth-child(4)').should('include.text', 'The password field is required.');
  })
})