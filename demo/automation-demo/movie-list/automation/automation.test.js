const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome.apply()).build()
const {addMovie} = require('./automation')

beforeAll(async ()=> {
    await (await driver).get('http://127.0.0.1:5500/week_6/day_2/demo/automation-demo/movie-list/index.html')
})

afterAll(async ()=>{
    await (await driver).quit()
})

test('add a movie to list', async () => {
    addMovie(driver, 'Tenet')
    await driver.sleep(5000)
})