// Get filesystem access from electron window
import isObject from "isobject/index";
import React from 'react';

const fs = window.require('fs');
// Import and configure PouchDB
const PouchDB = require('pouchdb').default;
var db = new PouchDB('DnDB');

// Our exported module
class DBController {
    // Make sure the db exisits and contains SRD data
    async checkSRDComplete() {
        await this.checkSRDSection('beyond1st');
        await this.checkSRDSection('classes');
        await this.checkSRDSection('combat');
        await this.checkSRDSection('conditions');
        await this.checkSRDSection('creatures');
        await this.checkSRDSection('equipment');
        await this.checkSRDSection('feats');
        await this.checkSRDSection('gods');
        await this.checkSRDSection('magicitems1');
        await this.checkSRDSection('magicitems2');
        await this.checkSRDSection('mechanics');
        await this.checkSRDSection('monsters');
        await this.checkSRDSection('npcs');
        await this.checkSRDSection('planes');
        await this.checkSRDSection('playing');
        await this.checkSRDSection('races');
        await this.checkSRDSection('spellcasting');
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

    // JWASH THIS IS AWFUL FIX IT
    getAllSectionContent(obj) {
        var contentJSX = Object.values(obj).map(function (groupItem, key) {
            if (!isObject(groupItem)) {
                return (<p>
                    <div> {groupItem.toString()} </div>
                </p>);
            }
            else {
                return (
                    Object.values(groupItem).map(function (item) {
                        if (!isObject(item)) {
                            return (<p>
                                <div> {item.toString()} </div>
                            </p>);
                        }
                        else {
                            return (
                                Object.values(item).map(function (subitem) {
                                    if (!isObject(subitem)) {
                                        return (<p>
                                            <div> {subitem.toString()} </div>
                                        </p>);
                                    }
                                    else {
                                        return (
                                            Object.values(subitem).map(function (subsubitem) {
                                                return (<p>
                                                    <div> {subsubitem.name} </div>
                                                </p>);
                                            })
                                        )
                                    }
                                })
                            );
                        }
                    })
                );
            }
        });

        return contentJSX;
    }
}

export default DBController;