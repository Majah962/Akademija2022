describe("Testira elemente", () => {
  
    it("Pretražuje stranicu i testira elemente", () => {
        cy.visit("https://en.wikipedia.org/wiki/Software_testing");
        cy.get('.toclevel-1').should("have.length", 16);
        //text baš provjerava dio koji se traži,običan contain provjerava i ostalo unutar toga
        cy.get('.toclevel-1').first().should("contain.text", "Overview");
        cy.get('.toclevel-1').last().should("contain.text", "External links");
        //parent primjer
        cy.get("#firstHeading").parent().should("have.id", "content").should("not.have.class", "mw-indicators");

        
         })
})




