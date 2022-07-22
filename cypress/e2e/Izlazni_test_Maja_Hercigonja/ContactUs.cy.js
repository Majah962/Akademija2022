//radim provjeru za "Test gumba za povratak na main page"

describe("Testira gumb za povataka na main page", () => {
    
    it("Test gumb ", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "index");
        cy.get("a[title='Contact Us']").first().click();
        cy.get("a[title='Return to Home']").first().click();
        //dodatno
        cy.reload();
        cy.get("a[href='mailto:%73%75%70%70%6f%72%74@%73%65%6c%65%6e%69%75%6d%66%72%61%6d%65%77%6f%72%6b.%63%6f%6d']").click();
    })
})
