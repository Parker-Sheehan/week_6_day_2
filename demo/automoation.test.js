const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome.apply()).build()
const {search} = require('./automation')

beforeAll(async ()=> {
    await (await driver).get('http://google.com')
})

afterAll(async ()=>{
    await (await driver).quit()
})

test('google seach a specified term', async()=> {
    await search(driver, 'cats')
})