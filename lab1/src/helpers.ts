import { getAllWorkers } from './data';
import { Worker, Category, WorkerInfo } from './models';

/** 1.4 / 1.1 */
export function logFirstAvailable(workers: Worker[] = getAllWorkers()): void {
    console.log(`Кількість робітників: ${workers.length}`);
    const firstAvailable = workers.find(w => w.available);
    if (firstAvailable) {
        console.log(`Перший доступний: ${firstAvailable.name} ${firstAvailable.surname}`);
    } else {
        console.log('Немає доступних робітників.');
    }

    // for-of для обходу колекції
    for (const w of workers) {
        console.log(`${w.name} ${w.surname}`);
    }
}

/** 1.2 */
export function getWorkersSurnamesByCategory(category: Category = Category.Designer): Array<string> {
    const workers = getAllWorkers();
    return workers
        .filter(w => w.category === category)
        .map(w => w.surname);
}

/** 1.2 */
export function logWorkersNames(names: string[]): void {
    names.forEach(n => console.log(n));
}

/** 1.3: forEach + стрілочна функція для Developer */
export function logDevelopers(): void {
    const devs = getAllWorkers().filter(w => w.category === Category.Developer);
    devs.forEach(w => console.log(`${w.name} ${w.surname}`));
}

/** 1.3: getWorkerByID */
export const getWorkerByID = (id: number): WorkerInfo | undefined => {
    if (!Number.isInteger(id) || id <= 0) return undefined;
    const found = getAllWorkers().find(w => w.id === id);
    if (!found) return undefined;
    const { name, surname, salary } = found;
    return { name, surname, salary };
};

/** 1.4: createCustomerID */
export function createCustomerID(name: string, id: number): string {
    return `${name}-${id}`;
}

/** 1.5: createCustomer with optional params */
export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (typeof age !== 'undefined') {
        console.log(`Age: ${age}`);
    }
    if (typeof city !== 'undefined') {
        console.log(`City: ${city}`);
    }
}

/** 1.5: checkoutWorkers — rest параметр */
export function checkoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);
    const availableWorkers: string[] = [];

    for (const id of workerIDs) {
        const worker = getAllWorkers().find(w => w.id === id);
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
