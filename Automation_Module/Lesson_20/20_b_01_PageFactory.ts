import { WebDriver } from "selenium-webdriver";
import HomePage from "./20_b_01_HomePage";
import ForgotPasswordPage from "./20_b_01_ForgotPasswordPage";

export default class PageFactory {
  static getPage(driver: WebDriver, pageName:string) {
    switch (pageName) {
      case "HomePage":
        return new HomePage(driver);
      case "ForgotPasswordPage":
        return new ForgotPasswordPage(driver);
    }
  }
}