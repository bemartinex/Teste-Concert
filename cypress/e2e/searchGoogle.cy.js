describe('Home page online', () => {
  beforeEach('Site de busca deve estar online', () => {
    cy.visit('https://www.google.com.br/') // verificando conexão com a URL.
    cy.get('img[class = "lnXdpd"]').should('be.visible') // get localiza uma imagem e should confirma se está visivel.
  })


  it('Buscando por G1 no site Google', () => {
    cy.get('input[class="gLFyf"]').type('G1').type('{enter}'); // get localiza um elemento input(caixa de texto), type inseri o valor descrito e type {enter} é um comando cypress pressionando a tela enter do teclado.
    cy.get('cite[class="iUh30 tjvcx"]').should('be.visible')// get localiza um elemento cite e should confirma se está visivel.

  })




  
})