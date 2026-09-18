import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", []),
    new Route("/la-carte", "La carte", "/pages/laCarte.html", []),
    new Route("/categorie", "Catégorie", "/pages/cartes/allCategory.html", ["admin"]),
    new Route("/menu", "Les Menus", "/pages/cartes/allMenu.html", ["admin"]),
    new Route("/reservations", "Réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
    new Route("/connexion", "Connexion", "/pages/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/inscription", "Inscritpion", "/pages/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/mon-compte", "Mon compte", "/pages/account.html", ["client", "admin"]),
    new Route("/modifier-password", "Mon compte", "/pages/editPassword.html", ["client", "admin"]),
];
//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Quai Antique";