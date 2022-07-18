describe("Testira elemente", () => {
  
    it("Pretražuje stranicu i testira elemente", () => {
        cy.visit("https://en.wikipedia.org/wiki/Software_testing");
        cy.get('.toclevel-2').should("have.length.gte", 10);
        cy.get('.toclevel-3').should("have.length.lte", 5);
        //kliknuti na svaki od prvih elemenata
        cy.get('.toclevel-1').click({ multiple: true });
        
         })
})

