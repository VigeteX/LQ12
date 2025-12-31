import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pageObjects/TextBoxPage';

/**
 * Test Case ID: TC-TB-03
 * Title: Verify form submission with only required fields filled
 * 
 * Preconditions:
 * - User has access to the internet
 * - User opens the Text Box page: https://demoqa.com/text-box
 * 
 * Steps:
 * 1. Enter a valid Full Name
 * 2. Enter a valid Email
 * 3. Leave Current Address and Permanent Address empty
 * 4. Click the Submit button
 * 
 * Expected Result:
 * - The form is submitted successfully
 * - Only Full Name and Email are displayed below the form
 * - Current Address and Permanent Address are empty in the output
 */
test.describe('TC-TB-03: Verify form submission with only required fields filled', () => {
  test('should submit form with only required fields and display only those fields', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    
    // Precondition: Navigate to Text Box page
    await textBoxPage.goto();

    // Test data - only required fields
    const testData = {
      fullName: 'Alice Johnson',
      email: 'alice.johnson@example.com'
    };

    // Step 1: Enter a valid Full Name
    await textBoxPage.fillFullName(testData.fullName);

    // Step 2: Enter a valid Email
    await textBoxPage.fillEmail(testData.email);

    // Step 3: Leave Current Address and Permanent Address empty
    // (No action needed - fields are already empty)

    // Step 4: Click the Submit button
    await textBoxPage.submit();

    // Expected Result: The form is submitted successfully
    await expect(textBoxPage.outputDiv).toBeVisible();

    // Expected Result: Only Full Name and Email are displayed below the form
    const outputText = await textBoxPage.getOutputText();
    
    expect(outputText).toContain(`Name:${testData.fullName}`);
    expect(outputText).toContain(`Email:${testData.email}`);

    // Expected Result: Current Address and Permanent Address are empty in the output
    // Verify that Current Address field is either not displayed or empty
    const hasCurrentAddress = await textBoxPage.isFieldDisplayedInOutput('Current Address');
    if (hasCurrentAddress) {
      const currentAddressValue = await textBoxPage.getOutputFieldValue('Current Address');
      expect(currentAddressValue).toBe('');
    }

    // Verify that Permanent Address field is either not displayed or empty
    const hasPermanentAddress = await textBoxPage.isFieldDisplayedInOutput('Permananet Address');
    if (hasPermanentAddress) {
      const permanentAddressValue = await textBoxPage.getOutputFieldValue('Permananet Address');
      expect(permanentAddressValue).toBe('');
    }
  });
});
