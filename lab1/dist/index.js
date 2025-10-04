"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
// 1.1 - запустити getAllWorkers() всередині інших функцій (getAllWorkers викликається локально)
// Log first available
console.log('--- logFirstAvailable ---');
(0, helpers_1.logFirstAvailable)();
// 1.2 - enum і фільтрація
console.log('\n--- getWorkersSurnamesByCategory() без параметра (за замовчуванням Designer) ---');
const defaultCategorySurnames = (0, helpers_1.getWorkersSurnamesByCategory)();
(0, helpers_1.logWorkersNames)(defaultCategorySurnames);
// 1.3 - стрілочні функції (Developer)
console.log('\n--- Developers (forEach + arrow) ---');
(0, helpers_1.logDevelopers)();
// 1.3 - getWorkerByID
console.log('\n--- getWorkerByID(3) ---');
console.log((0, helpers_1.getWorkerByID)(3));
// 1.4 - createCustomerID та idGenerator
console.log('\n--- createCustomerID та idGenerator ---');
const myID = (0, helpers_1.createCustomerID)('Mykola', 1);
console.log('myID:', myID);
// idGenerator типу функції createCustomerID
let idGenerator;
idGenerator = (name, id) => `${name}-${id}`;
console.log('idGenerator arrow:', idGenerator('Anna', 2));
// присвоїмо функцію createCustomerID
idGenerator = helpers_1.createCustomerID;
console.log('idGenerator assigned:', idGenerator('Olena', 3));
// 1.5 - createCustomer приклади
console.log('\n--- createCustomer examples ---');
(0, helpers_1.createCustomer)('Ivan');
(0, helpers_1.createCustomer)('Stepan', 28);
(0, helpers_1.createCustomer)('Oksana', 31, 'Lviv');
// 1.5 - checkoutWorkers
console.log('\n--- checkoutWorkers ---');
const myWorkers = (0, helpers_1.checkoutWorkers)('Mykola', 1, 3, 6, 10);
myWorkers.forEach(w => console.log('Selected worker:', w));
