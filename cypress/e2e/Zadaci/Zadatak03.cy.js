describe("Testira search funkciju", () => {
  
    it("Pretražuje stranicu", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.get("#searchInput").type("Quality assurance");
        cy.get("#searchButton").click();
        cy.url().should("contain", "Quality_assurance");
        cy.get("#searchInput").type("Software development{enter}");
        cy.url().should("contain", "Software_development");

        var wikiSearch = "Test automation";
        cy.get("#searchInput").type(wikiSearch + " {enter}");
        cy.url().should("contain", "Test_automation");

        var currentURL = cy.url();
    })
})