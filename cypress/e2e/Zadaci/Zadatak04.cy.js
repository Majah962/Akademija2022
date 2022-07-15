describe("Testira  broj elemenata", () => {
  
    it("Pretražuje elemente po stranici", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.get("#searchInput").type("Software testing{enter}");
        cy.url().should("contain", "Software_testing");
        cy.contains("Software testing").should("have.length.gte", 1);
        cy.contains("Hamburger").should("not.exist");
        cy.get("h1").should("have.length", 1);
        cy.get("h2").should("have.length.gte", 1);
        cy.get("h4").should("have.length.lte", 5);

        //lte manje ili jednako
        //gte više ili jednako

        
    })
})