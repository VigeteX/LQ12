describe('AI generated test', () => {
  it('Text Box happy path', () => {
    cy.prompt([
        "User opens https://demoqa.com/text-box",
        "Enter a valid Full Name",
        "Enter a valid Email",
        "Enter a valid Current Address",
        "Enter a valid Permanent Address",
        "Click the Submit button",
        "Expected Result:",
        "The form is submitted successfully",
        "Submitted data is displayed below the form",
        "Displayed data matches the entered values"
    ]);
  });
});