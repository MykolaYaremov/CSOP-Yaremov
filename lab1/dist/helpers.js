"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkerByID = void 0;
exports.logFirstAvailable = logFirstAvailable;
exports.getWorkersSurnamesByCategory = getWorkersSurnamesByCategory;
exports.logWorkersNames = logWorkersNames;
exports.logDevelopers = logDevelopers;
exports.createCustomerID = createCustomerID;
exports.createCustomer = createCustomer;
exports.checkoutWorkers = checkoutWorkers;
const data_1 = require("./data");
const models_1 = require("./models");
/** 1.4 / 1.1 */
function logFirstAvailable(workers = (0, data_1.getAllWorkers)()) {
    console.log(`Кількість робітників: ${workers.length}`);
    const firstAvailable = workers.find(w => w.available);
    if (firstAvailable) {
        console.log(`Перший доступний: ${firstAvailable.name} ${firstAvailable.surname}`);
    }
    else {
        console.log('Немає доступних робітників.');
    }
    // for-of для обходу колекції
    for (const w of workers) {
        console.log(`${w.name} ${w.surname}`);
    }
}
/** 1.2 */
function getWorkersSurnamesByCategory(category = models_1.Category.Designer) {
    const workers = (0, data_1.getAllWorkers)();
    return workers
        .filter(w => w.category === category)
        .map(w => w.surname);
}
/** 1.2 */
function logWorkersNames(names) {
    names.forEach(n => console.log(n));
}
/** 1.3: forEach + стрілочна функція для Developer */
function logDevelopers() {
    const devs = (0, data_1.getAllWorkers)().filter(w => w.category === models_1.Category.Developer);
    devs.forEach(w => console.log(`${w.name} ${w.surname}`));
}
/** 1.3: getWorkerByID */
const getWorkerByID = (id) => {
    if (!Number.isInteger(id) || id <= 0)
        return undefined;
    const found = (0, data_1.getAllWorkers)().find(w => w.id === id);
    if (!found)
        return undefined;
    const { name, surname, salary } = found;
    return { name, surname, salary };
};
exports.getWorkerByID = getWorkerByID;
/** 1.4: createCustomerID */
function createCustomerID(name, id) {
    return `${name}-${id}`;
}
/** 1.5: createCustomer with optional params */
function createCustomer(name, age, city) {
    console.log(`Customer name: ${name}`);
    if (typeof age !== 'undefined') {
        console.log(`Age: ${age}`);
    }
    if (typeof city !== 'undefined') {
        console.log(`City: ${city}`);
    }
}
/** 1.5: checkoutWorkers — rest параметр */
function checkoutWorkers(customer, ...workerIDs) {
    console.log(`Customer: ${customer}`);
    const availableWorkers = [];
    for (const id of workerIDs) {
        const worker = (0, data_1.getAllWorkers)().find(w => w.id === id);
        if (!worker) {
            // ігноруємо неіснуючі id, можна логувати помилку
            console.warn(`Worker with id=${id} not found.`);
            continue;
        }
        if (worker.available) {
            availableWorkers.push(`${worker.name} ${worker.surname}`);
        }
    }
    return availableWorkers;
}
