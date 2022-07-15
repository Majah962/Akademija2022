describe("Provjerava URL statuse", () => {
  
    it("Otvara i provjerava URL", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.url().should("contain", "Main_Page");
        cy.contains("About Wikipedia").first().click();        
        cy.url("contain", "Wikipedia:About");
        cy.url().should("not.contain", "Main_Page");
    })
})