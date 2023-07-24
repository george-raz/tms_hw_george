import { By, WebDriver, WebElement } from "selenium-webdriver";
import BasePage from "./20_b_01_BasePage";

export default class HomePage extends BasePage {
  public readonly url: string;
  public readonly signInBtn: By = By.linkText("Sign In");
  public readonly forgotLnk: By = By.linkText("Forgot");
  public readonly submitBtn: By = By.xpath("//button[@id='sso-forms__submit']");
  public readonly validationMessagePassword: By = By.xpath("//div[@data-testid='password-error']");

  constructor(driver: WebDriver) {
    super (driver);
    this.url = "https://audiojungle.net"
  }

  async goToUrl() {
    return await this.driver.get(this.url)
  }

}