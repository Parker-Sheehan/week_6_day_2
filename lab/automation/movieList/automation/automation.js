const {By} = require("selenium-webdriver")

const add = async (driver, inputTerm) => {
    await driver.findElement(By.css('input')).sendKeys(`${inputTerm}\n`)
    await driver.sleep(2000)
}

module.exports = {
    add
}