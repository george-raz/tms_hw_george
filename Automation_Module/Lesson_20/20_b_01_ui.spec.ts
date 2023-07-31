import { Builder, By, until } from "selenium-webdriver";
import PageFactory from "./20_b_01_PageFactory";
import HomePage from "./20_b_01_HomePage";
import ForgotPasswordPage from "./20_b_01_ForgotPasswordPage";

describe("UI tests", () => {
  let driver: any;
  let homePage: any;
  let fgtPassPg: any;

  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = PageFactory.getPage(driver, "HomePage") as HomePage;
    fgtPassPg = PageFactory.getPage(driver, "ForgotPasswordPage") as ForgotPasswordPage;
    await homePage.goToUrl();
    await driver.wait(until.elementLocated(homePage.signInBtn));
    await homePage.clickElem(homePage.signInBtn);
    await driver.wait(until.elementLocated(homePage.forgotLnk))
  })

  afterEach(async () => {
    await driver.quit();
  });

  it.only("[Sign In] Forgot link is enabled", async () => {
    expect(homePage.isEnabled(homePage.forgotLnk)).toBeTruthy();
  })

  it("[Sign In] Forgot password page can be opened", async () => {
    await homePage.clickElem(homePage.forgotLnk);
    await driver.wait(until.urlContains(fgtPassPg.url));
    expect((await fgtPassPg.getUrl()).toString()).toMatch("https://account.envato.com/reset_password?to=audiojungle")
  })

  it("[Forgot Password] Email validation", async () => {
    await homePage.clickElem(homePage.forgotLnk);
    await driver.wait(until.urlContains(fgtPassPg.url));
    await fgtPassPg.fillInput(fgtPassPg.inputEmail, "test");
    await fgtPassPg.clickElem(fgtPassPg.forgotSbmBtn);
    await driver.sleep(200);
    expect(await driver.findElement(fgtPassPg.validationMessageEmail)).toBeTruthy()
  })

  it("[Forgot Password] Validation errors are disappeared after refreshing the page", async () => {
    await homePage.clickElem(homePage.forgotLnk);
    await driver.wait(until.urlContains(fgtPassPg.url));
    await fgtPassPg.clickElem(fgtPassPg.forgotSbmBtn);
    await fgtPassPg.refresh();
    expect((await driver.findElements(fgtPassPg.validationMessageEmail)).length).toBe(0)
  })

  it("[Sign In] Password is required", async () => {
    await homePage.clickElem(homePage.submitBtn);
    await driver.sleep(200);
    expect(await driver.findElement(homePage.validationMessagePassword)).toBeTruthy();
  })
})