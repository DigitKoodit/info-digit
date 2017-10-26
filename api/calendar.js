
var google = require('googleapis');

module.exports = function (app) {


    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var CALENDAR_ID = "51n4vtv46paes63es2ddea3vgg@group.calendar.google.com";
    // var API_KEY = require('./client_secret.js');

    app.get('/calendar/getEvents', function (req, res) {

        console.log("----------------------------------------------");
        console.info('server got a request');


        var urlshortener = google.urlshortener('v1');

        var params = {
            shortUrl: 'http://goo.gl/xKbRu3'
        };

        // get the long url of a shortened url
        urlshortener.url.get(params, function (err, response) {
            if (err) {
                console.log('Encountered error', err);
            } else {
                console.log('Long url is', response.longUrl);
            }
        });

        var calendar = google.calendar('v3');

        calendar.events.list({
            apiKey: API_KEY,
            calendarId: '51n4vtv46paes63es2ddea3vgg@group.calendar.google.com', // Digit event calendar id
            timeMin: (new Date()).toISOString(),
            maxResults: 4,
            singleEvents: true,
            orderBy: 'startTime'
        },
            (err, response) => {
                if (err) {
                    console.log('The API returned an error: ' + err);
                    return;
                } else {
                    var events = response.items;
                    var eventsSimple = { events: [] };
                    if (events.length == 0) {
                        eventsSimple = { result: 'No upcoming events found.' };
                    } else {
                        for (var i = 0; i < events.length; i++) {
                            var event = events[i];
                            var start = event.start.dateTime || event.start.date;
                            eventsSimple.events.push({
                                name: event.summary,
                                start: start
                            });
                        }
                    }
                    res.status(200).send(eventsSimple);
                }
            });

        console.info('this line is after the data query');

    })

}
