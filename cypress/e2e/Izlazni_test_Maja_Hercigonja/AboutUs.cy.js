//radim provjeru za "Klik na gumbe za društvene mreže"

describe("Testira gumb za društvene mreže", () => {
    
    it("Test gumbe ", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "index");
        cy.contains("About us").first().click();
        cy.get("a[href='https://www.facebook.com/groups/525066904174158/']").click();
        cy.get("a[href='https://twitter.com/seleniumfrmwrk']").click();
        cy.get("a[href='https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA']").click();
        cy.get("a[href='https://plus.google.com/111979135243110831526/posts']").click();
        cy.reload();
    })
})

