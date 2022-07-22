//radim provjeru za "Test proizvoda"

describe("Testira provjeru gumba", () => {
    
    it("Test gumba ", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "index");
        cy.xpath("//input[@id='search_query_top']").type("Dresses{enter}");
        cy.xpath("//*[@class='product_img_link']").first().click();
        cy.xpath("//*[@class='icon-plus']").click().click();
        cy.xpath("//*[@class='icon-minus']").click(); //za vježbu stavljeno
        cy.xpath("//*[@id='group_1']").select(2);
        cy.xpath("//*[@id='color_13']").click();
        cy.xpath("//*[@id='add_to_cart']").click();
    })
})
