import { By, WebDriver } from "selenium-webdriver";

export default class BasePage {
  constructor(protected driver: WebDriver) {
    this.driver = driver;
  }
  async getUrl() {
    return await this.driver.getCurrentUrl();
  }

  async refresh() {
    await this.driver.navigate().refresh();
  }

  async close() {
    return await this.driver.quit()
  }

  async fillInput(elem:By, value:string) {
    await this.driver.findElement(elem).sendKeys(value);
  }

  async clickElem(elem:By) {
    await this.driver.findElement(elem).click();
  }

  async isEnabled(elem:By) {
    await this.driver.findElement(elem).isEnabled()
  }

}