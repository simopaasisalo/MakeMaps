let webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;
let path = require('path');
let index = 'file:///' + path.resolve('.', 'index.html');

import * as assert from 'assert';



describe('Map load test', function() {
    let driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();
    this.timeout(60000);

    beforeEach(function(done) {
        console.log('beforeEach');
        driver.get(index).then(done());
    });

    after(function() {
        console.log('after');
        driver.quit();
    });

    it('Should load the choropleth demo without issues', function(done) {
        console.log('Starting Choropleth test');
        driver.getCurrentUrl().then(function(url) {
            assert.equal(url, index, 'Initial url did not match');
            console.log('loaded' + url);
            driver.findElement(By.css('#demo0')).click();
            driver.findElement(By.css('.loadDemoButton')).click();
            driver.sleep(3000);
            console.log('slept for 3000');
            driver.getCurrentUrl().then(function(url) {
                assert.equal(url, index, 'File loaded url did not match');
                return done();
            });
        });

    });

    it('Should load the symbol demo without issues', function(done) {
        driver.getCurrentUrl().then(function(url) {
            assert.equal(url, index, 'Initial url did not match');
            driver.findElement(By.css('#demo1')).click();
            driver.findElement(By.css('.loadDemoButton')).click();
            driver.sleep(3000);
            driver.getCurrentUrl().then(function(url) {
                assert.equal(url, index, 'File loaded url did not match');
                done();
            });
        });

    });
    it('Should load the chart demo without issues', function(done) {
        driver.getCurrentUrl().then(function(url) {
            assert.equal(url, index, 'Initial url did not match');
            driver.findElement(By.css('#demo2')).click();
            driver.findElement(By.css('.loadDemoButton')).click();
            driver.sleep(3000);
            driver.getCurrentUrl().then(function(url) {
                assert.equal(url, index, 'File loaded url did not match');
                done();
            });
        });

    });

    it('Should load the heatmap demo without issues', function(done) {
        driver.getCurrentUrl().then(function(url) {
            assert.equal(url, index, 'Initial url did not match');
            driver.findElement(By.css('#demo3')).click();
            driver.findElement(By.css('.loadDemoButton')).click();
            driver.sleep(3000);
            driver.getCurrentUrl().then(function(url) {
                assert.equal(url, index, 'File loaded url did not match');
                done();
            });
        });

    });

    it('Should load the cluster demo without issues', function(done) {
        driver.getCurrentUrl().then(function(url) {
            assert.equal(url, index, 'Initial url did not match');
            driver.findElement(By.css('#demo4')).click();
            driver.findElement(By.css('.loadDemoButton')).click();
            driver.sleep(3000);
            driver.getCurrentUrl().then(function(url) {
                assert.equal(url, index, 'File loaded url did not match');
                done();
            });
        });

    });

    it('Should go through the dialogs to load a new map', function(done) {

        driver.findElement(By.id('newMapButton')).click();
        driver.sleep(1000);
        driver.findElement(By.css('.dropZone > input')).sendKeys(path.resolve('.') + '/app/test/categories.geojson');
        driver.findElement(By.css('.primaryButton')).click();
        driver.sleep(1000);
        driver.findElement(By.css('#createMapButton')).click();
        driver.sleep(1000);
        driver.getCurrentUrl().then(function(url) {
            assert.equal(url, index + '#edit', 'File loaded url did not match');
            done();
        });
    });


});
