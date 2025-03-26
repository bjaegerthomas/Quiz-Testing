describe("Quiz Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should start the quiz and display the first question", () => {});
    cy.fixture('questions').then((questions) => {
        cy.intercept('GET', '/api/questions/random', {
            statusCode: 200,
            body: fixture
        }).as('mockGetRequest');
    });
    cy.wait('@mockGetRequest').then((intercept) => {
      assert.isNotNull(intercept.response?.body, 'Response has data');
      expect(intercept.response?.body).to.have.property('question','Which is the correct answer?');
    });

  it("should answer questions and complete the quiz", () => {});
   

  it("should restart the quiz after completion", () => {});
    
});
