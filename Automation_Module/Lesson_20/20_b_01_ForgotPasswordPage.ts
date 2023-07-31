import { By, WebDriver } from "selenium-webdriver";
import BasePage from "./20_b_01_BasePage";

export default class ForgotPasswordPage extends BasePage {
  public readonly url: string = "https://account.envato.com/reset_password?to=audiojungle";
  public readonly inputEmail: By = By.id("email");
  public readonly forgotSbmBtn: By = By.xpath("//button[@data-testid='submitButton']");
  public readonly validationMessageEmail: By = By.xpath("//div[@data-testid='email-error']");
  public readonly validationMessageUser: By = By.xpath("//div[@data-testid='username-error']");
  constructor(driver: WebDriver) {
    super (driver);
    this.url = "https://account.envato.com/reset_password?to=audiojungle"
  }

  async goToUrl() {
    return await this.driver.get(this.url)
  }
}