describe("Testira response time/funkcionalnosti web shop stranice", () => {
    
    it("Otvara stranicu", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "automationpractice.com");
        cy.xpath("//a[text()='Evening Dresses']").first().click({force: true});
        cy.url().should("contain", "id_category=10");
    })

    it("Primjenjuje filtere", () => {
        cy.xpath("//select[@id='selectProductSort']").select("price:asc");
        cy.xpath("//input[@id='layered_id_attribute_group_2']").check();
        cy.xpath("//input[@id='layered_id_attribute_group_24']").click();
    })

    it("Kupuje proizvod", () => {
        //moramo malo usporiti vrijeme
        cy.wait(3000);
        cy.xpath("//a[@title='Add to cart']").click();
        cy.xpath("//div[@id='layer_cart']").should("exist");
        cy.xpath("//span[@title='Continue shopping']").click();
        cy.xpath("//span[@class='ajax_cart_quantity']").should("not.contain.text", "0");
    })
})