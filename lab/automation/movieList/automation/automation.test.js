const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome.apply()).build()

const {add} = require('./automation')

beforeAll(async ()=> {
    await (await driver).get('http://127.0.0.1:5500/week_6/day_2/lab/automation/movieList/index.html')
})

afterAll(async ()=>{
    await (await driver).quit()
})

test('Can add movies to movie list', async()=> {
    await add(driver, 'yo freakin mama')
})

