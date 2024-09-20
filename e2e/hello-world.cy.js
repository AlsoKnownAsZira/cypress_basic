describe('User Can Open Login Page', () => {
  it('User can open login page', () => {
    cy.visit('http://localhost:8000/') //mengunjungi pagenya
    cy.get('h4').should('contain', 'Login') //mencari elemen h4 yang berisi tulisan login, gunakan selection tools pada cypress studio
  })
})