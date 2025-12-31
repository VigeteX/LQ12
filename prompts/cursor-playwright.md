# Cursor + Playwright MCP Test Cases

## Test Case 1
**Test Case ID:** TC-TB-01  
**Title:** Successful submission of Text Box form with valid data  

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
- The entered data is displayed below the form
- Displayed data matches the input values

---

## Test Case 2
**Test Case ID:** TC-TB-02  
**Title:** Submission fails with invalid email  

**Preconditions:**
- User has access to the internet
- User opens the Text Box page: https://demoqa.com/text-box

**Steps:**
1. Enter a valid Full Name
2. Enter an invalid Email (e.g., "test@")
3. Enter a valid Current Address
4. Enter a valid Permanent Address
5. Click the Submit button

**Expected Result:**
- The form is not submitted
- An error is displayed near the Email field
- No data is displayed below the form