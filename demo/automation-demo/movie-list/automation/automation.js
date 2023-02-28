const {By} = require("selenium-webdriver")

const addMovie = async (driver, movietitle) => {
    await driver.findElement(By.css('input')).sendKeys(`${movietitle}`)
    await driver.findElement(By.css('button')).click()
    await driver.sleep(5000)
}


module.exports = {
    addMovie
}