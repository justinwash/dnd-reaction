// We need this to read files apparently
const fs = require('fs');
// Connect to global db instance
var dnDB = global.dnDB;

// Check SRD integrity and install missing components
checkSRDComplete();

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

function checkSRDComplete() {
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
}
