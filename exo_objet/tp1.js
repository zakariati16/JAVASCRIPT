//tp1: On vous donne un tableau d'entiers et un entier K comme arguments. 
//Retournez un votreFonction([1,2,3,4], 2)
// > [3, 4]
// nouveau tableau contenant uniquement les entiers qui sont à K éléments de la fin du tableau.
// exemple : 

// function tp1 (tab, k){
//     tabFromK = [];
//     for(let i = 0 ; i < tab.length ; i++ ){
//         if(i >= (tab.length - k)){
//             tabFromK.push(tab[i])
//         }
//     }
//     return tabFromK;
// };

// Tp2 : On vous donne en argument un tableau d'entiers non négatifs. 
//Retournez le premier élément trouvé dans le tableau dont l'indice est égal à sa valeur.
//exemple: votreFonction([2, 1, 11, 12, 4])
//> 1




//const table=[5,1,3,6,4];

// function tp2 (tab){
//     let nombre;
//     for(let i=0;i<=tab.length;i++){
//         if(tab[i]===i){
//             nombre=i;
//             break;
//         }
//     }
//     return nombre;
// }

// //tp4 : On vous donne un tableau d'entiers et un entier K comme arguments. Retournez l'élément
// qui est le Kème indice à partir de la fin du tableau.


//  function tp4 (tab, k) {
//     const reverseTab = tab.reverse();
//     const numberK = reverseTab[k];
//     return numberK;
// }

/*
On vous donne un tableau d'entiers et un tableau plus court contenant une séquence d'entiers comme arguments. 
Retourner vrai si la séquence d'entiers peut être trouvée dans le premier tableau.
*/

// function includes(numbers1,numbers2) {
//     const sep =",";
//     return numbers1.join(sep).includes(numbers2.join(sep));
//   }

// Tp5/*
// On vous donne un tableau d'entiers et un entier K comme arguments. Retourner vrai si chaque entier est un multiple pair de l'entier K.
// */
// function EveryMultiplePair(numbers,k) {
//     return numbers.every(n=>n % k === 0 && n % 2 === 0 );
//   }

/*Tp6
On vous donne un tableau d'entiers et un tableau plus court contenant une séquence d'entiers comme arguments. 
Retourner vrai si la séquence d'entiers peut être trouvée dans le premier tableau.
*/

// function includes(numbers1,numbers2) {
//     const sep =",";
//     return numbers1.join(sep).includes(numbers2.join(sep));
//   }

// tp3:On vous donne une chaîne de caractères et un nombre entier K comme arguments.
// Divisez la chaîne de caractères en un tableau de chaînes de caractères, où chaque élément n'a pas plus de K caractères. 
// Retournez le tableau résultant.
// La chaîne en argument sera toujours d'au moins K caractères.

// Exigences
// Doit retourner un tableau de chaînes de caractères

// Exemple #1
// votreFonction("aabbbcccd", 3)
// > ["aab", "bbc", "ccd"]

// function slip (text,entireK)
// {
//     const k = parseInt(entireK);

//     const table = [];
    
//     for(let i = 0; i <= text.length - 1; i = i + k)
//     {
//         table.push(text.slice(i,i + k));
//     }
    
//     console.log(table);
// }




