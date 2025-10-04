import {
    logFirstAvailable,
    getWorkersSurnamesByCategory,
    logWorkersNames,
    logDevelopers,
    getWorkerByID,
    createCustomerID,
    createCustomer,
    checkoutWorkers
} from './helpers';
import { Category } from './models';

// 1.1 - logFirstAvailable
console.log('1.1 ▶ logFirstAvailable');
logFirstAvailable();

// 1.2 - getWorkersSurnamesByCategory
console.log('\n1.2 ▶ getWorkersSurnamesByCategory() без параметра (за замовчуванням Designer)');
const defaultCategorySurnames = getWorkersSurnamesByCategory();
logWorkersNames(defaultCategorySurnames);

// 1.3 - Developers (forEach + arrow)
console.log('\n1.3 ▶ Developers (forEach + arrow)');
logDevelopers();

// 1.3 - getWorkerByID
console.log('\n1.3 ▶ getWorkerByID(3)');
console.log(getWorkerByID(3));

// 1.4 - createCustomerID та idGenerator
console.log('\n1.4 ▶ createCustomerID та idGenerator');
const myID: string = createCustomerID('Mykola', 1);
console.log('myID:', myID);

// idGenerator типу функції createCustomerID
let idGenerator: (name: string, id: number) => string;
idGenerator = (name, id) => `${name}-${id}`;
console.log('idGenerator arrow:', idGenerator('Anna', 2));

// присвоїмо функцію createCustomerID
idGenerator = createCustomerID;
console.log('idGenerator assigned:', idGenerator('Olena', 3));

// 1.5 - createCustomer приклади
console.log('\n1.5 ▶ createCustomer examples');
createCustomer('Ivan');
createCustomer('Stepan', 28);
createCustomer('Oksana', 31, 'Lviv');

// 1.5 - checkoutWorkers
console.log('\n1.5 ▶ checkoutWorkers');
const myWorkers = checkoutWorkers('Mykola', 1, 3, 6, 10);
myWorkers.forEach(w => console.log('Selected worker:', w));
