//radim provjeru za "Test stavljanja u košaricu"

describe("Testira košaricu", () => {
    
    it("Test gumba ", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "index");
        // staviti proizvod u košaricu (copy paste iz prošlog)
        cy.xpath("//*[@class='product_img_link']").first().click();
        cy.xpath("//*[@class='icon-plus']").click().click();
        cy.xpath("//*[@class='icon-minus']").click(); 
        cy.xpath("//*[@id='group_1']").select(2);
        cy.xpath("//*[@id='color_13']").click();
        cy.xpath("//*[@id='add_to_cart']").click();
        //košarica
        cy.wait(3000);
        cy.xpath("//*[@class='clearfix']").should('be.visible');
        cy.wait(3000);
        cy.xpath("//*[@class='continue btn btn-default button exclusive-medium']").click();
        cy.wait(3000);
        cy.xpath("//*[@id='add_to_cart']").click();
        cy.xpath("//*[@class='clearfix']").should('be.visible');
        cy.wait(100);
        cy.xpath("//*[@class='btn btn-default button button-medium']").click({force: true});  
        //stavila sam "force:true" samo zato što mi bez njega jednom ide, onda par puta ne i tako stalno nekad ide nekad ne
    })
})
