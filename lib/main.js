/**
 * Created by daxlab on 19/3/16.
 */

'use strict';
var express = require('express');
var request = require('request');
var app = express();
var fs = require('fs');
var cheerio = require('cheerio');
var debug = require('debug')('api');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('A google play store scrapper written by daxlab');
});

var PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=';

app.get('/api', function(req, res) {
    var scrapeUrl = PLAY_STORE_URL;
    debug('Incoming request ',req.query.package);
    scrapeUrl = scrapeUrl + req.query.package;
    request(scrapeUrl, function(err, response, html) {
        if(err) {
            debug('Error in request ', scrapeUrl);
        }
        else {
            var page = cheerio.load(html);
            var appData = {
                name: '',
                category: '',
                packageName: '',
                downloads: '',
                description: '',
                overallRating: '',
                overallRatingCount: '',
                rating5: '',
                rating4: '',
                rating3: '',
                rating2: '',
                rating1: '',
                price: '',
                icon: '',
                author: '',
                authorUrl: '',
                appSize: '',
                supportedDevices: '',
                version: ''
            };
            var wrapper = page('.details-wrapper ');
            appData.name = wrapper.find(".document-title[itemprop=name]").text().trim();
            appData.description = wrapper.find("[itemprop=description]").text().trim();
            appData.icon = wrapper.find(".cover-image").attr("src").trim();
            appData.author = wrapper.find("[itemprop=author] [itemprop=name]").text().trim();
            appData.authorUrl = wrapper.find(".meta-info .dev-link").attr("href").trim();
            appData.appSize = wrapper.find("[itemprop=fileSize]").text().trim();
            appData.supportedDevices = wrapper.find("[itemprop=operatingSystems]").text().trim();
            appData.version = wrapper.find("[itemprop=softwareVersion]").text().trim();
            appData.category = wrapper.find("[itemprop=genre]").text().trim();
            appData.downloads = wrapper.find("[itemprop=numDownloads]").text();
            appData.downloads = appData.downloads.replace(/,/g, '').trim();
            appData.price = wrapper.find(".details-actions button.price").text().trim();

            /* Clean app price here only */
            var price = appData.price;
            if (price.indexOf('Install') > -1) {
                price = '0.0';
            }
            else {
                price = price.replace(' Buy', '');
            }
            appData.price = price;

            page('.score').filter(function () {
                var data = page(this);
                appData.overallRating = data.text();
            });
            page('.reviews-stats').filter(function () {
                var data = page(this);
                appData.overallRatingCount = data.children().last().text();
                appData.overallRatingCount = appData.overallRatingCount.replace(/,/g, '');
            });
            page('.rating-bar-container.five').filter(function () {
                var data = page(this);
                appData.rating5 = data.children().last().text();
                appData.rating5 = appData.rating5.replace(/,/g, '');
            });
            page('.rating-bar-container.four').filter(function () {
                var data = page(this);
                appData.rating4 = data.children().last().text();
                appData.rating4 = appData.rating4.replace(/,/g, '');
            });
            page('.rating-bar-container.three').filter(function () {
                var data = page(this);
                appData.rating3 = data.children().last().text();
                appData.rating3 = appData.rating3.replace(/,/g, '');
            });
            page('.rating-bar-container.two').filter(function () {
                var data = page(this);
                appData.rating2 = data.children().last().text();
                appData.rating2 = appData.rating2.replace(/,/g, '');
            });
            page('.rating-bar-container.one').filter(function () {
                var data = page(this);
                appData.rating1 = data.children().last().text();
                appData.rating1 = appData.rating1.replace(/,/g, '');
            });
            page('.details-wrapper.apps').filter(function () {
                var data = page(this);
                appData.packageName = data.data('docid');
            });
            debug(appData);
            res.send(appData);

        }
    });
});

var port = process.env.PORT || 8000;
app.listen(port);