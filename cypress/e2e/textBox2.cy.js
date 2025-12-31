describe('AI generated test', () => {
  it('Form submission blocked when Email field is empty', () => {
    cy.prompt([
        "User opens https://demoqa.com/text-box",
        "Enter a valid Full Name",
        "Leave Email field empty",
        "Enter a valid Current Address",
        "Enter a valid Permanent Address",
        "Click the Submit button",
        "Expected Result:",
        "The form is not submitted",
        "Email field is highlighted as invalid",
        "No submitted data is displayed below the form"
    ]);
  });
});