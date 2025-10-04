"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWorkers = getAllWorkers;
const models_1 = require("./models");
function getAllWorkers() {
    const workers = [
        { id: 1, name: "Danylo", surname: "Romanovych", available: false, salary: 1000, category: models_1.Category.BusinessAnalyst },
        { id: 2, name: "Pavlo", surname: "Skoropadskyi", available: true, salary: 1500, category: models_1.Category.Developer },
        { id: 3, name: "Mykola", surname: "Mikhnovskyi", available: false, salary: 1600, category: models_1.Category.QA },
        { id: 4, name: "Yarema", surname: "Vyshnevetskyi", available: true, salary: 1300, category: models_1.Category.ScrumMaster }
    ];
    return workers;
}
