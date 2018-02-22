// Import and configure RxDB

// our exported module
var DBController = {
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

    checkSRDSection: function (section) {
        checkSRD(section);
    },

    querySRDSection: function (section) {
        // do stuff
    }

};

// Main logic for the integrity check
function checkSRD(section) {
    var sectionJson = JSON.parse(fs.readFileSync('./data/SRD/Sections/' + section + '.json'));
    // Add SRD to datastore if it doesn't already exist
}

module.exports = DBController;