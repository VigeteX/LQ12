# Claude + Playwright MCP Test Cases

## Test Case 3
**Test Case ID:** TC-TB-03  
**Title:** Verify form submission with only required fields filled  

**Preconditions:**
- User has access to the internet
- User opens the Text Box page: https://demoqa.com/text-box

**Steps:**
1. Enter a valid Full Name
2. Enter a valid Email
3. Leave Current Address and Permanent Address empty
4. Click the Submit button

**Expected Result:**
- The form is submitted successfully
- Only Full Name and Email are displayed below the form
- Current Address and Permanent Address are empty in the output

---

## Test Case 4
**Test Case ID:** TC-TB-04  
**Title:** Verify form submission with whitespace in fields  

**Preconditions:**
- User has access to the internet
- User opens the Text Box page: https://demoqa.com/text-box

**Steps:**
1. Enter whitespace-only in Full Name
2. Enter whitespace-only in Email
3. Enter valid Current Address
4. Enter valid Permanent Address
5. Click the Submit button

**Expected Result:**
- The form is not submitted
- Validation errors appear near Full Name and Email
- Only Current Address and Permanent Address are ignored