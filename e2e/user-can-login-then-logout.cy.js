describe('user can login then logout', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/')
    /* ==== Generated with Cypress Studio ==== */
  //MASIH BELUM MENGGUNAKAN ID ATAU CLASSNAME YANG DIREKOMENDASIKAN SELECTOR
    // cy.get(':nth-child(2) > .form-control').clear('superadmin@gmail.com');
    // cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    // cy.get(':nth-child(3) > .form-control').clear('pa');
    // cy.get(':nth-child(3) > .form-control').type('password');
    // cy.get('.btn').click();
    // cy.get('.nav-link > .d-sm-none').click();
    // cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
    cy.get('[data-id="email"]').type('superadmin@gmail.com')
    cy.get('[data-id="password"]').type('password')
    cy.get('[data-id="login"]').click()
    cy.get('[data-id="dropdown"]').click()
    cy.get('[data-id="logout"]').click()

  })
})