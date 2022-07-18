describe("Testira nekoliko tekstova u istoj datoteci", () => {
  
        beforeEach(()  => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");    
    })


    it("Prvi test,otvara se stranica Current events", () => {
        cy.url().should("contain", "Main_Page");
        cy.get('#n-currentevents').click();   
        cy.url().should("contain","Current_events" );
        
    })

    it("Drugi test,otvara se stranica Contents", () => {
        cy.url().should("contain", "Main_Page");
        cy.get("a[href='/wiki/Wikipedia:Contents']").click();   
        cy.url().should("contain","Wikipedia:Contents");
      
    
    })

    it("Treći test,otvara se stranica Random article", () => {
        cy.url().should("contain", "Main_Page");
        cy.get('#n-randompage').click();   
        cy.url().should("not.contain","Main_Page" );
        
    })

       


})

