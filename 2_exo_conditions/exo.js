
   
// Exo1:
    // let age= prompt ("ecrire votre age:");
    // if(age>=7 && age<=9){
    //     console.log();("Poussin");
    // }else if(age>=10 && age<=11){
    //     console.log("Pupille");
    // }else if(age>=12 && age<=13){
    //     console.log("Benjamin");
    // }else if(age>=14 && age<=15){
    //     console.log("Minime");
    // }else if(age>=16 && age<=17){
    //     console.log("Cadet");
    // }else{
    //     console.log("pas de catégorie d'âge");
    // }

    // exo 2:
  

         while(true) {
            let adresseMail=prompt(" saisir votre adresse Mail :");
        
            let motDePasse=prompt(" saisir votre mot De Passe :");
            
            let valeurMDP= prompt("saisir la valeur de mail");
            let valeurmail=prompt("saisir la valeur de votre MDP");


             if (valeurMDP===motDePasse && valeurmail===adresseMail ) {
             alert(` Bienvenue dans votre espace client`);
             break;
             }

            else {
                 alert(`indentifiants incorrect`);
          }

        }

     



