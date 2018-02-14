// We need this to read files apparently
const fs = require('fs');

// our exported module
var SRDDataManager = {
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
        // Connect to global db instance
        var dnDB = global.dnDB;
        // Build a ndDB query to get section if it exists in the local db
        var query = {};
        query[section] = {$exists: true};
        // Print SRDSection. Just to test this out.

        dnDB.find(query, function (err, docs) {
            console.log(docs);
        });
    }
};

// Main logic for the integrity check
function checkSRD(section) {
    // Connect to global db instance
    var dnDB = global.dnDB;
    // Build a ndDB query to check if the section exists in the local db
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

module.exports = SRDDataManager;
