describe("Testira response time/funkcionalnosti web shop stranice", () => {
    
    it("Otvara stranicu", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "automationpractice.com");
        cy.get("a[title='Evening Dresses']").first().click({force: true});
        cy.url().should("contain", "id_category=10");
    })

    it("Primjenjuje filtere", () => {
        cy.get("#selectProductSort").select("price:asc");
        cy.get("#layered_id_attribute_group_2").check();
        cy.get("#layered_id_attribute_group_24").click();
    })

    it("Kupuje proizvod", () => {
        //mora se usporiti
        cy.wait(3000);
        cy.get("a[title='Add to cart']").first().click();
        cy.get("#layer_cart").should("exist");
        cy.contains("Continue shopping").click();
        cy.get(".ajax_cart_quantity").should("not.contain.text", "0");
    })
})