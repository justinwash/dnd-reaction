// We need this to read files apparently
const fs = require('fs');
const Datastore = require('nedb');

var dnDB = new Datastore({filename: './data/Datastores/dnDB.db', autoload: true});
var dataToPrint = null;

// our exported module
var dbapi = {
    // Make sure the db exisits and contains SRD data
    checkSRDComplete: function () {
        checkSRD('legal');
        checkSRD('races');
        checkSRD('beyond1st');
        checkSRD('equipment');
        checkSRD('feats');
        checkSRD('mechanics');
        checkSRD('combat');
        checkSRD('spellcasting');
        checkSRD('running');
        checkSRD('magicitems1');
        checkSRD('magicitems2');
        checkSRD('monsters');
        checkSRD('conditions');
        checkSRD('gods');
        checkSRD('planes');
        checkSRD('creatures');
        checkSRD('npcs');
    },

    printSRDSection: function (section) {
        var query = {};
        query[section] = {$exists: true};

        var docObject = null;
        dnDB.findOne(query, function (err, doc) {
            docObject = doc;
            printData(docObject)
        });
    }
};

// Main logic for the integrity check
function checkSRD(section) {
    var query = {};
    query[section] = {$exists: true};
    var sectionJson = JSON.parse(fs.readFileSync('./data/SRD/Sections/' + section + '.json'));
    // Add SRD to datastore if it doesn't already exist
    dnDB.count(query, function (err, count) {
        if (count <= 0) {
            console.log('SRD: ' + section + ' not found. installing.');
            dnDB.insert(sectionJson, function (err) {
                console.log('SRD: ' + section + ' added.');
            });
        }
        else
            console.log('SRD: ' + section + ' found');
    });
}

function printData(data) {
    console.log(data);
}

module.exports = dbapi;
