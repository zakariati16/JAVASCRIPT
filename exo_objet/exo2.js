
const users = [
  {
    id: 1,
    sexe: 'M',
    nom: 'Lisangola',
    prenom: 'Bondjali',
    nationalite: 'Allemande'
  },
  {
    id: 2,
    sexe: 'M',
    nom: 'Alain',
    prenom: 'Stanislas',
    nationalite: 'Bresilienne'
  },
  { id: 3, sexe: 'M', nom: 'Kavov', prenom: 'Joseph', nationalite: 'Russe' },
  {
    id: 4,
    sexe: 'M',
    nom: 'Jean',
    prenom: 'Jonathan',
    nationalite: 'Francaise'
  },
  {
    id: 5,
    sexe: 'F',
    nom: 'Lisangola',
    prenom: 'Alain',
    nationalite: 'Italienne'
  },
  {
    id: 6,
    sexe: 'F',
    nom: 'Sakura',
    prenom: 'Josephine',
    nationalite: 'Bresilienne'
  },
  { id: 7, sexe: 'M', nom: 'Le Blanc', prenom: 'Axel', nationalite: 'Italienne' },
  {
    id: 8,
    sexe: 'M',
    nom: 'Alison',
    prenom: 'Murdoch',
    nationalite: 'Somalienne'
  },
  { id: 9, sexe: 'F', nom: 'Zarosky', prenom: 'Semia', nationalite: 'Russe' },
  {
    id: 10,
    sexe: 'F',
    nom: 'Ali',
    prenom: 'Laurene',
    nationalite: 'Algerienne'
  }
];
 
//Q1: Trouver le nombre des Algeriens dans notre collection

// const nationality=users.find(function(user4) {
//   return user4.nationalite.startsWith("Algerienne");
// })

//Q2: Trouver toutes les personnes dont les prenoms se terminent par a

// const termineA= users.find(function(user5){
//   return user5.prenom.endsWith("a");
// })

//Q3: Avoir la liste tous les noms

// const nameZ=users.map(function(user6){
//   return {
//     nom: `${user6.nom} `,
//   };
// });

// Q4: La liste de tous les hommes russes

// const nationality=users.find(function(user7) {
//     return user7.nationalite.startsWith("Russe")  && user7.sexe.startsWith("M");
//    })

//Q5: La liste de toutes les personnes dont les noms commencent par K et qui sont des femmes

// const femmesK=users.find(function(user8){
//   return user8.nom.startsWith("K") && user8.sexe.startsWith("F");
// })

//Q6: La liste de tous les hommes dont les noms commencent par M

// const hommesM=users.find(function(user9){
//     return user9.nom.startsWith("M") && user9.sexe.startsWith("M");
//    })