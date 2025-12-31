import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pageObjects/TextBoxPage';

/**
 * Test Case ID: TC-TB-01
 * Title: Successful submission of Text Box form with valid data
 * 
 * Preconditions:
 * - User has access to the internet
 * - User opens the Text Box page: https://demoqa.com/text-box
 * 
 * Steps:
 * 1. Enter a valid Full Name
 * 2. Enter a valid Email
 * 3. Enter a valid Current Address
 * 4. Enter a valid Permanent Address
 * 5. Click the Submit button
 * 
 * Expected Result:
 * - The form is submitted successfully
 * - The entered data is displayed below the form
 * - Displayed data matches the input values
 */
test.describe('TC-TB-01: Successful submission of Text Box form with valid data', () => {
  test('should submit form successfully and display entered data', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    
    // Precondition: Navigate to Text Box page
    await textBoxPage.goto();

    // Test data
    const testData = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      currentAddress: '123 Main Street, City, State 12345',
      permanentAddress: '456 Oak Avenue, City, State 67890'
    };

    // Step 1: Enter a valid Full Name
    await textBoxPage.fillFullName(testData.fullName);

    // Step 2: Enter a valid Email
    await textBoxPage.fillEmail(testData.email);

    // Step 3: Enter a valid Current Address
    await textBoxPage.fillCurrentAddress(testData.currentAddress);

    // Step 4: Enter a valid Permanent Address
    await textBoxPage.fillPermanentAddress(testData.permanentAddress);

    // Step 5: Click the Submit button
    await textBoxPage.submit();

    // Expected Result: The form is submitted successfully
    // Expected Result: The entered data is displayed below the form
    await expect(textBoxPage.outputDiv).toBeVisible();

    // Expected Result: Displayed data matches the input values
    const outputText = await textBoxPage.getOutputText();
    
    expect(outputText).toContain(`Name:${testData.fullName}`);
    expect(outputText).toContain(`Email:${testData.email}`);
    expect(outputText).toContain(`Current Address :${testData.currentAddress}`);
    expect(outputText).toContain(`Permananet Address :${testData.permanentAddress}`);
  });
});

