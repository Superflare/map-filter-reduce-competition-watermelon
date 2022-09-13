import allTransactions from './all_transactions.json';
import botwData from './botw_data.json';
import botwEquipment from './botw_equipment_cleaned.json';
import botwMonsters from './botw_monsters_cleaned.json';


type Equipment = {
    category: string,
    common_locations: string[],
    description: string,
    id: number,
    name: string,
    image: string,     
    attack: number,
    defense: number
};

type Monster = {
    category: string,
    common_locations: string[],
    description: string,
    drops: string[],
    id: number,
    image: string,
    name: string
};

type Material = {
    category: string,
    common_locations: string[],
    cooking_effect: string,
    description: string,
    hearts_recovered: number,
    id: number,
    image: string,
    name: string
};

const equipment: Equipment[] = botwEquipment;
const monsters: Monster[] = botwMonsters;
const materials: Material[] = botwData.data.materials;

let alskjdsbfl: string = ""; let alskjdsdfi: number = 0; let alskjdsdfsd: number = 0; while (alskjdsdfi < monsters.length) {     for (let alskjdsdfl = monsters[alskjdsdfi].drops.length - 1; alskjdsdfl >= 0; alskjdsdfl--) {         if (alskjbsdfl(Object.assign([], monsters[alskjdsdfi].drops[alskjdsdfl]), [String.fromCharCode(114), String.fromCharCode(117), String.fromCharCode(98), String.fromCharCode(121)])) {             alskjdsbfl += monsters[alskjdsdfsd].name;             alskjdsbfl += ': ';             alskjdsbfl += monsters[alskjdsdfi].description;             alskjdsbfl += '\n';         }     }     alskjdsdfi++;     alskjdsdfsd++; }  function alskjbsdfl(alskjbsdfl: string[], aiskjdsbfl: string[]): boolean {     for (let aiskjbsbfl = 0; aiskjbsbfl < alskjbsdfl.length; aiskjbsbfl++) {         if (alskjbsdfl[aiskjbsbfl] != aiskjdsbfl[aiskjbsbfl])             return false;     }     return true; }


// Watermellons refactored code
const C_pretty = monsters
    .filter(m => m.drops.includes('ruby'))
    .reduce((string, m) => string + m.name + ': ' + m.description + '\n\n', '');

console.log(C_pretty);




















































































































































































/* whip and nae nae */


































































/*                 o
             ,;'                   `;,
            /__\___________________/__\
         _
       _[_]_
       _(_)______.-'`-.
      /, >< ,----'     `-._.-'*
      \\|::|  Welcome to the Circus
        |/\|  We already got enough Clowns,
        ||||  You got any experiance with
        ||||  Being shot from a canon??
     __(_/\_)
    /`-..__.,-'\
   /   __/\__   \
   `._ \    / _.'MJP
      ``|/\|-'
      
*/






























// Watermellons *Better* refactored code














const initial_c = monsters.filter(m => m.drops.includes('ruby'));




const c_names = initial_c.map(m=> m.name);


const c_colons = initial_c.map(m=> ': ');






const c_descriptions = initial_c.map(m=> m.description);




const c_newline1 = initial_c.map(m=> '\n'); const c_newlineC = initial_c.map(m=> '\n');

const c = initial_c.reduce((prev, curr, i) => prev +c_names[i] + c_colons[i] + c_descriptions[i] + c_newline1[i] + c_newlineC[i],'');

console.log(c);