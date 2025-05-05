describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/todolist');

  })

  it('renders the ToDoList heading', () => {
    cy.contains('h1', /Todolist/i).should('exist');

  });

  it('enter in input as letters as numbers', () => {
    cy.get('input[placeholder="Enter task"]').type('Make a page 123').should('have.value', 'Make a page 123')
  });

  it('error after empty input', () => {
    cy.get('[data-testid="error-message"]').should('not.exist');
    cy.contains(/Add/i).click();
    cy.get('[data-testid="error-message"]').should('contain', 'This field can not be empty')
  })

  it('submitting text creates new element with entered text', () => {
    cy.get('input[placeholder="Enter task"]').type('Some to do')
    cy.contains(/Add/i).click();
    cy.contains('Some to do').should('exist')
});

it('should clear error onBlur if field is not empty',()=>{
  cy.contains(/Add/i).click();
  cy.get('[data-testid="error-message"]').should('exist')
  cy.get('input[placeholder="Enter task"]').type('abc').blur();
  cy.get('[data-testid="error-message"]').should('not.exist');


})
})