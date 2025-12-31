# Cypress AI Test Cases

## Test Case 5
**Test Case ID:** TC-TB-05  
**Title:** Successful submission of Text Box form with valid data (Cypress)

**Preconditions:**
- User has access to the internet
- User opens the Text Box page: https://demoqa.com/text-box

**Steps:**
1. Enter a valid Full Name
2. Enter a valid Email
3. Enter a valid Current Address
4. Enter a valid Permanent Address
5. Click the Submit button

**Expected Result:**
- The form is submitted successfully
- Submitted data is displayed below the form
- Displayed data matches the entered values

---

## Test Case 6
**Test Case ID:** TC-TB-06  
**Title:** Form submission blocked when Email field is empty

**Preconditions:**
- User has access to the internet
- User opens the Text Box page: https://demoqa.com/text-box

**Steps:**
1. Enter a valid Full Name
2. Leave Email field empty
3. Enter a valid Current Address
4. Enter a valid Permanent Address
5. Click the Submit button

**Expected Result:**
- The form is not submitted
- Email field is highlighted as invalid
- No submitted data is displayed below the form