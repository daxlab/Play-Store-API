/**
 * Created by daxlab on 17/3/16.
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
    res.send('A play store scrapper written by daxlab');
});

app.get('/api', function(req, res) {
    var scrapeUrl = 'https://play.google.com/store/apps/details?id=';
    debug('Incoming request ',req.body);
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
                rating1: ''
            };

            page('.document-title').filter(function() {
                var data = page(this);
                appData.name = data.children().first().text();
            });
            page('.document-subtitle.category').filter(function() {
               var data = page(this);
               appData.category = data.children().first().text();
            });
            page('.score').filter(function() {
               var data = page(this);
                appData.overallRating = data.text();
            });
            page('.reviews-stats').filter(function() {
                var data = page(this);
                appData.overallRatingCount = data.children().last().text();
                appData.overallRatingCount = appData.overallRatingCount.replace(/,/g,'');
            });
            page('.rating-bar-container.five').filter(function() {
                var data = page(this);
                appData.rating5 = data.children().last().text();
                appData.rating5 = appData.rating5.replace(/,/g,'');
            });
            page('.rating-bar-container.four').filter(function() {
                var data = page(this);
                appData.rating4 = data.children().last().text();
                appData.rating4 = appData.rating4.replace(/,/g,'');
            });
            page('.rating-bar-container.three').filter(function() {
                var data = page(this);
                appData.rating3 = data.children().last().text();
                appData.rating3 = appData.rating3.replace(/,/g,'');
            });
            page('.rating-bar-container.two').filter(function() {
                var data = page(this);
                appData.rating2 = data.children().last().text();
                appData.rating2 = appData.rating2.replace(/,/g,'');
            });
            page('.rating-bar-container.one').filter(function() {
                var data = page(this);
                appData.rating1 = data.children().last().text();
                appData.rating1 = appData.rating1.replace(/,/g,'');
            });
            page('.details-wrapper.apps').filter(function() {
                var data = page(this);
                appData.packageName = data.data('docid');
            });
            page('.show-more-content.text-body').filter(function() {
                var data = page(this);
                appData.description = data.children().text();
            });
            page('.details-section.metadata').filter(function() {
                var data = page(this);
                appData.downloads = data.find("[itemprop=numDownloads]").text();
                appData.downloads = appData.downloads.replace(/,/g, '').trim();
            });
            debug(appData);
            res.send(appData);

        }
    });
});

var port = process.env.PORT || 3000;
app.listen(port);

