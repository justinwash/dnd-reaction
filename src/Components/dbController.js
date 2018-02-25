// Get filesystem access from electron window
const fs = window.require('fs');
// Import and configure PouchDB
const PouchDB = require('pouchdb').default;
var db = new PouchDB('DnDB');

// Our exported module
class DBController {
    // Make sure the db exisits and contains SRD data
    async checkSRDComplete() {
        await this.checkSRDSection('legal info');
        await this.checkSRDSection('races');
        await this.checkSRDSection('beyond1st');
        await this.checkSRDSection('equipment');
        await this.checkSRDSection('feats');
        await this.checkSRDSection('mechanics');
        await this.checkSRDSection('combat');
        await this.checkSRDSection('spellcasting');
        await this.checkSRDSection('playing');
        await this.checkSRDSection('magicitems1');
        await this.checkSRDSection('magicitems2');
        await this.checkSRDSection('monsters');
        await this.checkSRDSection('conditions');
        await this.checkSRDSection('gods');
        await this.checkSRDSection('planes');
        await this.checkSRDSection('creatures');
        await this.checkSRDSection('npcs');
    }

    async checkSRDSection(section) {
        var sectionJson = JSON.parse(fs.readFileSync('./data/SRD/Sections/' + section + '.json'));
        sectionJson._id = "srd" + section;
        try {
            let result = await db.put(sectionJson);
            let storedSection = await db.get(result._id);
            console.log(storedSection + " not found. Added.")
        } catch (err) {
            if (err.name === 'conflict') {
                console.log(section + " found.");
            }
        }
    }

    async retrieveSRDSection(section) {
        var id = "srd" + section;
        var sectionObject = null;
        try {
            sectionObject = await db.get(id);
        } catch (err) {
            console.log("something din't do");
        }
        return sectionObject;
    }

    getSRDSectionKeys(obj) {
        var keys = [];
        for (var key in obj) {
            keys.push(key);
            if (typeof obj[key] === "object") {
                var subkeys = this.getSRDSectionKeys(obj[key]);
                keys = keys.concat(subkeys.map(function (subkey) {
                    return key + "." + subkey;
                }));
            }
        }
        console.log(keys);
        return keys;
    }

}

export default DBController;