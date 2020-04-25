const HashMap = require('./Hashmap')

HashMap.MAX_LOAD_RATIO = 0.5
HashMap.SIZE_RATIO = 3

main = () => {
    let lotr = new HashMap
    lotr.set('Hobbit', 'Bilbo')
    lotr.set('Hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandalf')
    lotr.set('Human', 'Aragorn')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')
    return lotr
    //  lotr.get('Hobbit'), lotr.get('Maiar')

}

// console.log(main())

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    // console.log(map1.get(str1));
    // console.log(map2.get(str3));
    // return ''
}

// Returns 20 & 10. Making a collision.

// console.log(WhatDoesThisDo())

// #3 part 1: [10,22,31,4,15,28,17,88,59]?


// #4 

removeDuplicates = (str) => {
    const mapover = new Map()
    let newStr = ''
    str.split('').forEach(letter => {
       if (!mapover.has(letter)) {
           mapover.set(letter, '');
           newStr += letter;
       }
    });
    return newStr;
    }


console.log(removeDuplicates('google'))
console.log(removeDuplicates('google all that you think can think of'))

// const palindrome = (string) => {
//     const palindromeMap = new Map()
//     let odd = 0
//     for (let i = 0; i < string.length; i++) {
//       if (palindromeMap.get(string[i]) === undefined) {
//         palindromeMap.set(string[i], 1)
//       }
//       else {
//         let char = palindromeMap.get(string[i])
//         palindromeMap.set(string[i], char+=1)
//       }
//     }
//     for (let i = 0; i < palindromeMap.size; i++) {
//       if(palindromeMap.get(string[i]) % 2 !==0) {
//         odd++
//       }
//       if(odd > 1) {
//         return false
//       }
//     }
//     return true
//   }
//   console.log(palindrome('dad'))


