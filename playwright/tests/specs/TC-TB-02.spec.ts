import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pageObjects/TextBoxPage';

/**
 * Test Case ID: TC-TB-02
 * Title: Submission fails with invalid email
 * 
 * Preconditions:
 * - User has access to the internet
 * - User opens the Text Box page: https://demoqa.com/text-box
 * 
 * Steps:
 * 1. Enter a valid Full Name
 * 2. Enter an invalid Email (e.g., "test@")
 * 3. Enter a valid Current Address
 * 4. Enter a valid Permanent Address
 * 5. Click the Submit button
 * 
 * Expected Result:
 * - The form is not submitted
 * - An error is displayed near the Email field
 * - No data is displayed below the form
 */
test.describe('TC-TB-02: Submission fails with invalid email', () => {
  test('should not submit form with invalid email and show error', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    
    // Precondition: Navigate to Text Box page
    await textBoxPage.goto();

    // Test data
    const testData = {
      fullName: 'Jane Smith',
      email: 'test@', // Invalid email
      currentAddress: '789 Pine Road, City, State 11111',
      permanentAddress: '321 Elm Street, City, State 22222'
    };

    // Step 1: Enter a valid Full Name
    await textBoxPage.fillFullName(testData.fullName);

    // Step 2: Enter an invalid Email (e.g., "test@")
    await textBoxPage.fillEmail(testData.email);

    // Step 3: Enter a valid Current Address
    await textBoxPage.fillCurrentAddress(testData.currentAddress);

    // Step 4: Enter a valid Permanent Address
    await textBoxPage.fillPermanentAddress(testData.permanentAddress);

    // Step 5: Click the Submit button
    await textBoxPage.submit();

    // Expected Result: The form is not submitted
    // Expected Result: An error is displayed near the Email field
    const isEmailValid = await textBoxPage.isEmailValid();
    expect(isEmailValid).toBe(false);

    const validationMessage = await textBoxPage.getEmailValidationMessage();
    expect(validationMessage).toBeTruthy();
    expect(validationMessage.length).toBeGreaterThan(0);

    // Expected Result: No data is displayed below the form
    // Проверяем, что блок output либо не виден, либо пуст
    const isOutputVisible = await textBoxPage.isOutputVisible();
    if (isOutputVisible) {
      const outputText = await textBoxPage.getOutputText();
      // Если output виден, он должен быть пустым или не содержать данных формы
      expect(outputText.trim()).toBe('');
    } else {
      // Если output не виден, это тоже соответствует ожидаемому результату
      expect(isOutputVisible).toBe(false);
    }
  });
});

