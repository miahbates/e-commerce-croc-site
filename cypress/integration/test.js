beforeEach(() => {
  cy.task("resetDb");
});

describe("testing for crocaholic app", () => {
  it("looking for home page", () => {
    cy.visit("/");
    cy.url().should("include", "/");
  });

  it("looking for individual croc product", () => {
    cy.visit("/");
    cy.get(".product-link").first().click();
    cy.url().should("include", "/products/1");
  });

  it("can display 404 if page not found", () => {
    cy.request({ url: "/page-not-found", failOnStatusCode: false }).should(
      (response) => {
        expect(response.status).to.eq(404);
      }
    );
  });
});
