const sizeInput = () => cy.get('select[name="size"]');
const submitBtn = () => cy.get('button[type="submit"]');

const tCB = () => cy.get('input[type="checkbox"]');
const special = () => cy.get('input[name="specialInstructions"]');
const quantity = () => cy.get('select[name="specialInstructions"]');
it("can select a pizza size", () => {
  sizeInput().select("medium");
  submitBtn().should("not.be.disabled"); //fix the button to be disabled
  sizeInput().select("medium");
  submitBtn().should("not.be.disabled");
});
it("can select a sauce", () => {
  sauceChoice().click("Red Sauce");
  submitBtn().should("not.be.disabled");
  sauceChoice().should("have.value", "redSauce");
});
it("can select multiple toppings", () => {
  tCB().check("pepperoni");
  tCB().should("have.value", "pepperoni");
  tCB().check("sausage");
  tCB().should("have.value", "sausage");
  tCB().check("bacon");
  tCB().should("have.value", "bacon");
  tCB().check("cheese");
  tCB().should("have.value", "cheese");
});
