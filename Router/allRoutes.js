import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/la-carte", "La carte", "/pages/laCarte.html"),
    new Route("/reservations", "Réservations", "/pages/reservations/allResa.html"),
    new Route("/connexion", "Connexion", "/pages/signin.html"),
    new Route("/inscription", "Inscritpion", "/pages/signup.html"),
    new Route("/mon-compte", "Mon compte", "/pages/account.html"),
    new Route("/modifier-password", "Mon compte", "/pages/editPassword.html"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";