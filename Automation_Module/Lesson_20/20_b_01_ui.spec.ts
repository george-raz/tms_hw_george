import { Builder, By, until } from "selenium-webdriver";
import PageFactory from "./20_b_01_PageFactory";
import HomePage from "./20_b_01_HomePage";
import ForgotPasswordPage from "./20_b_01_ForgotPasswordPage";

describe("UI tests", () => {
  let driver:any;
  let homePage:any;
  let fgtPassPg:any;

  beforeEach (async () => {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = PageFactory.getPage(driver, "HomePage") as HomePage;
    fgtPassPg = PageFactory.getPage(driver, "ForgotPasswordPage") as ForgotPasswordPage;
    homePage.goToUrl();
    await driver.wait(until.elementLocated(homePage.signInBtn));
    homePage.clickElem(homePage.signInBtn);
    await driver.wait(until.elementLocated(homePage.forgotLnk))
  })

  afterEach(async () => {
    await driver.quit();
});

  it("[Sign In] Forgot link is enabled", async () => {
    expect(homePage.isEnabled(homePage.forgotLnk)).toBeTruthy();
  })

  it.only("[Sign In] Forgot password page can be opened", async () => {
    homePage.clickElem(homePage.forgotLnk);
    await driver.wait(until.urlContains(fgtPassPg.url));
    expect((await fgtPassPg.getUrl()).toString()).toMatch("https://account.envato.com/reset_password?to=audiojungle")
  })

  it("[Forgot Password] Email validation", async () => {
    homePage.clickElem(homePage.forgotLnk);
    await driver.wait(until.urlContains(fgtPassPg.url));
    fgtPassPg.fillInput(fgtPassPg.inputEmail, "test");
    fgtPassPg.clickElem(fgtPassPg.forgotSbmBtn);
    await driver.sleep(200);
    expect(await driver.findElement(fgtPassPg.validationMessageEmail)).toBeTruthy()
  })

  it("[Forgot Password] Validation errors are disappeared after refreshing the page", async () => {
    homePage.clickElem(homePage.forgotLnk);
    await driver.wait(until.urlContains(fgtPassPg.url));
    fgtPassPg.clickElem(fgtPassPg.forgotSbmBtn);
    fgtPassPg.refresh();
    expect((await driver.findElements(fgtPassPg.validationMessageEmail)).length).toBe(0)
  })

  it("[Sign In] Password is required", async () => {
    homePage.clickElem(homePage.submitBtn);
    await driver.sleep(200);
    expect(await driver.findElement(homePage.validationMessagePassword)).toBeTruthy();
  })
})