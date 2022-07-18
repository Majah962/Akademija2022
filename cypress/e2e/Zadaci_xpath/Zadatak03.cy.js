describe("Testira se  'search' funkcija ", () => {
  
    it("Pretražuje stranicu i testira", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        //input id=searchinput sa tipom koji je traži u zadatku (Quality assurance)
        cy.xpath("//input[@id='searchInput']").type("Quality assurance{enter}");
        cy.url().should("contain", "Quality_assurance");
        //input id=searchinput sa tipom koji je traži u zadatku,ali bez klika (Software development)
        cy.xpath("//input[@id='searchInput']").type("software development{enter}");
        cy.url().should("contain", "Software_development");
        //varijabla sa vrijednosti
        var wikiSearch = "test automation";
        //Koristiti prošlu varijablu, opet uzeti id searchinput
        cy.xpath("//input[@id='searchInput']").type(wikiSearch + "{enter}");
        cy.url().should("contain", "Test_automation");
        var currentURL = cy.url();

    })
})


