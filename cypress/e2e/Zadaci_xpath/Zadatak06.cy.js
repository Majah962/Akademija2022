describe("Testira elemente", () => {
  
    it("Pretražuje stranicu i testira elemente", () => {
        cy.visit("https://en.wikipedia.org/wiki/Software_testing");
        //kod klasa je bitno staviti contains jer inaće ne ide
        cy.xpath("//li[contains(@class, 'toclevel-2')]").should("have.length.gte", 10);
        cy.xpath("//li[contains(@class, 'toclevel-3')]").should("have.length.lte", 5);
        cy.xpath("//li[contains(@class, 'toclevel-1')]").click({ multiple: true });
        
         })
})

