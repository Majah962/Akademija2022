
describe("Testira search funkciju,", () => {
  
    it("Pretražuje stranicu", () => {
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
     //1.način
        cy.xpath("//a[@href='/wiki/Wikipedia:Contents']").click();
        
        //2. način, po tekstu
        cy.xpath("//span[text()='Contents']").click();


        //3. način kada nema hrefa...onda preko ID-a, nađemo child....
        cy.xpath("//li[@id='n-contents']/a").click();

        //4.način kada imamo više child-eva
        cy.xpath("//li[@id='n-contents']/a[@href='/wiki/Wikipedia:Contents']").click();


        // nalazenje desc., ne direktni child, nalazimo po tekstu, tip "a"
        cy.xpath("//div[@class='contentsPage__section']//a[text()='Technology' and @href='/wiki/Wikipedia:Contents/Technology_and_applied_sciences']").click();


         //nešto što je prvo, 1.način (have.text)
        cy.xpath("//*[text()='Software']").first().click();


    //nešto što je prvo, 2.način  (have.text)
        cy.xpath("(//*[text()='Software'])[0]").click();

    //3-način (cy.contains)
        cy.xpath("//*[contains(text(), 'Software'])]").first().click();



        cy.go(-1);
        cy.reload();
        cy.go(1);
        cy.go(-2);



    })
})  
