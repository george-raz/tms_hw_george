import { Builder, By, until } from "selenium-webdriver";

describe("UI tests", () => {

  it("[Sign In] Forgot link is enabled", async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://audiojungle.net");
    await driver.wait(until.elementLocated(By.linkText("Sign In")));
    let signInBtn = driver.findElement(By.linkText("Sign In"));
    await signInBtn.click()
    await driver.wait(until.elementLocated(By.linkText("Forgot")))
    let forgotLnk = driver.findElement(By.xpath("//button[@id='sso-forms__submit']"));
    expect(await forgotLnk.isEnabled()).toBeTruthy();
    await driver.quit()
  })

  it("[Sign In] Forgot password page can be opened", async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://audiojungle.net");
    await driver.wait(until.elementLocated(By.linkText("Sign In")));
    let signInBtn = driver.findElement(By.linkText("Sign In"));
    await signInBtn.click()
    await driver.wait(until.elementLocated(By.linkText("Forgot")))
    let forgotLnk = driver.findElement(By.linkText("Forgot"));
    await forgotLnk.click();
    await driver.wait(until.urlContains("https://account.envato.com/reset_password?to=audiojungle"));
    expect((await driver.getCurrentUrl()).toString()).toMatch("https://account.envato.com/reset_password?to=audiojungle")
    await driver.quit()
  })

  it("[Forgot Password] Email validation", async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://audiojungle.net");
    await driver.wait(until.elementLocated(By.linkText("Sign In")));
    let signInBtn = driver.findElement(By.linkText("Sign In"));
    await signInBtn.click()
    await driver.wait(until.elementLocated(By.linkText("Forgot")))
    let forgotLnk = driver.findElement(By.linkText("Forgot"));
    await forgotLnk.click();
    await driver.wait(until.urlContains("https://account.envato.com/reset_password?to=audiojungle"));
    let emailInput = driver.findElement(By.id("email"))
    await emailInput.sendKeys("test");
    let forgotSbmBtn = driver.findElement(By.xpath("//button[@data-testid='submitButton']"));
    await forgotSbmBtn.click()
    expect(await driver.findElement(By.xpath("//div[@data-testid='email-error']"))).toBeTruthy()
    await driver.quit()
  })

  it("[Forgot Password] Validation errors are disappeared after refreshing the page", async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://audiojungle.net");
    await driver.wait(until.elementLocated(By.linkText("Sign In")));
    let signInBtn = driver.findElement(By.linkText("Sign In"));
    await signInBtn.click()
    await driver.wait(until.elementLocated(By.linkText("Forgot")))
    let forgotLnk = driver.findElement(By.linkText("Forgot"));
    await forgotLnk.click();
    await driver.wait(until.urlContains("https://account.envato.com/reset_password?to=audiojungle"));
    let forgotSbmBtn = driver.findElement(By.xpath("//button[@data-testid='submitButton']"));
    await forgotSbmBtn.click()
    await driver.navigate().refresh();
    try {
      await driver.findElement(By.xpath("//div[@data-testid='username-error']"))
    } catch (err: any) {
      expect(err.toString()).toMatch(/no such element/)
    }
    try {
      await driver.findElement(By.xpath("//div[@data-testid='email-error']"))
    } catch (err: any) {
      expect(err.toString()).toMatch(/no such element/)
    }
    await driver.quit()
  })

  it("[Sign In] Password is required", async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://audiojungle.net");
    await driver.wait(until.elementLocated(By.linkText("Sign In")));
    let signInBtn = driver.findElement(By.linkText("Sign In"));
    await signInBtn.click()
    await driver.wait(until.elementLocated(By.xpath("//button[@id='sso-forms__submit']")))
    let submitBtn = driver.findElement(By.xpath("//button[@id='sso-forms__submit']"));
    await submitBtn.click();
    expect(await driver.findElement(By.xpath("//div[@data-testid='password-error']"))).toBeTruthy();
    await driver.quit()
  })
})