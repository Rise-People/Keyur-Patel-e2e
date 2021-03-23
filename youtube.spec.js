import 'cypress-wait-until';
describe('Youtube', () => 
{
    it('Finds an element', () => 
    {
      //Step 1: Visit youtube.com
      cy.visit('https://www.youtube.com')   // Visit the url
      cy.title().should('eq', 'YouTube')    //Verify the Title of the page 

      //Step 2: Search for “The whole working-from-home thing — Apple” and click on video
      cy.get('#search[name=search_query]').type("The whole working-from-home thing — Apple")    //type serach query in the serch input box
      cy.get('#search-icon-legacy').click()   //Click on search button 
      cy.waitUntil(()=> cy.title('the whole work from home thing - apple - YouTube'))   //use of wait plugin to wait until the page is loaded
      cy.contains('The whole working-from-home thing — Apple').click()    //Click on video 
      cy.url().should('include', 'watch?v=6_pru8U2RmM')   // Verify the video through URL
    })
  })
