import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model для страницы Text Box
 * https://demoqa.com/text-box
 */
export class TextBoxPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressTextarea: Locator;
  readonly permanentAddressTextarea: Locator;
  readonly submitButton: Locator;
  readonly outputDiv: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressTextarea = page.locator('#currentAddress');
    this.permanentAddressTextarea = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
    this.outputDiv = page.locator('#output');
  }

  /**
   * Переход на страницу Text Box
   */
  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/text-box');
  }

  /**
   * Заполнение поля Full Name
   */
  async fillFullName(name: string): Promise<void> {
    await this.fullNameInput.fill(name);
  }

  /**
   * Заполнение поля Email
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  /**
   * Заполнение поля Current Address
   */
  async fillCurrentAddress(address: string): Promise<void> {
    await this.currentAddressTextarea.fill(address);
  }

  /**
   * Заполнение поля Permanent Address
   */
  async fillPermanentAddress(address: string): Promise<void> {
    await this.permanentAddressTextarea.fill(address);
  }

  /**
   * Заполнение всей формы
   */
  async fillForm(data: {
    fullName: string;
    email: string;
    currentAddress: string;
    permanentAddress: string;
  }): Promise<void> {
    await this.fillFullName(data.fullName);
    await this.fillEmail(data.email);
    await this.fillCurrentAddress(data.currentAddress);
    await this.fillPermanentAddress(data.permanentAddress);
  }

  /**
   * Нажатие на кнопку Submit
   */
  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  /**
   * Получение текста из блока output
   */
  async getOutputText(): Promise<string> {
    return await this.outputDiv.textContent() || '';
  }

  /**
   * Проверка наличия блока output
   */
  async isOutputVisible(): Promise<boolean> {
    return await this.outputDiv.isVisible();
  }

  /**
   * Проверка валидности email поля
   */
  async isEmailValid(): Promise<boolean> {
    const emailInput = this.emailInput;
    const validity = await emailInput.evaluate((el: HTMLInputElement) => {
      return el.validity.valid;
    });
    return validity;
  }

  /**
   * Получение сообщения об ошибке email поля
   */
  async getEmailValidationMessage(): Promise<string> {
    return await this.emailInput.evaluate((el: HTMLInputElement) => {
      return el.validationMessage;
    });
  }

  /**
   * Получение конкретного значения из output блока
   */
  async getOutputFieldValue(fieldName: string): Promise<string> {
    const outputText = await this.getOutputText();
    const regex = new RegExp(`${fieldName}:([^\n]+)`, 'i');
    const match = outputText.match(regex);
    return match ? match[1].trim() : '';
  }

  /**
   * Проверка отображения конкретного поля в output
   */
  async isFieldDisplayedInOutput(fieldName: string): Promise<boolean> {
    const outputText = await this.getOutputText();
    const regex = new RegExp(`${fieldName}:`, 'i');
    return regex.test(outputText);
  }

  /**
   * Проверка, что output содержит только определенные поля
   */
  async outputContainsOnlyFields(fields: string[]): Promise<boolean> {
    const outputText = await this.getOutputText();
    
    // Проверяем, что все указанные поля присутствуют
    for (const field of fields) {
      if (!outputText.includes(`${field}:`)) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Проверка валидности Full Name поля
   */
  async isFullNameValid(): Promise<boolean> {
    const fullNameInput = this.fullNameInput;
    const validity = await fullNameInput.evaluate((el: HTMLInputElement) => {
      return el.validity.valid;
    });
    return validity;
  }

  /**
   * Получение сообщения об ошибке Full Name поля
   */
  async getFullNameValidationMessage(): Promise<string> {
    return await this.fullNameInput.evaluate((el: HTMLInputElement) => {
      return el.validationMessage;
    });
  }
}

