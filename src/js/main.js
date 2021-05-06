// let temps = prompt("Comment fait-il aujourd'hui la famille ?")

// switch (temps) {
//     case "soleil":
//         alert("Y a du soleil et des nanas lalalalala !")
//         break;
//     case "pluie":
//         alert("Encore de la pluie quel pays de merde !");
//         break;
//     case "nuages":
//         alert("Je sens que ça va pisser :/");
//         break;
//     case "orages":
//         alert("Ewaaaaaaaaaa c'est pas fini ce temps de chien ?");
//         break;
//     case "neige":
//         alert("De la neige en mai, va te faire foutre temmps de con !!!");
//         break;
//     default:
//         alert("J'espère qu'il fera meilleur demain inshallah")
//         break;
// }

let nb1 = parseInt(prompt("Entrez un chiffre/nombre"));
let operateur = prompt("Entrez +, -, * ou /");
let nb2 = parseInt(prompt("Entrez un deuxieme chiffre/nombre"));


switch (operateur) {
    case ("+"):
        alert(nb1 + nb2);
        break;
    case ("-"):
        alert(nb1 - nb2)
        break;
    case ("*"):
        alert(nb1 * nb2)
        break;
    case ("/"):
        alert(nb1 / nb2)
        break;
    default:
        alert("Sois correct ") 
        break;
}