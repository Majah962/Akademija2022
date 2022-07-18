describe("Testira  broj elemenata", () => {
  
    it("Pretražuje stranicu i testira", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.xpath("//input[@id='searchInput']").type("Software testing{enter}");
        cy.url().should("contain", "Software_testing");
        cy.xpath("//*[text()='Software testing']").should("exist");
        cy.xpath("//*[text()='Hamburger']").should("not.exist");
        cy.xpath("//h1").should("have.length", 1);
        cy.xpath("//h2").should("have.length.gte", 1);
        cy.xpath("//h4").should("have.length.lte", 5);


       
    })
})

