const { sequelize, Category, Specialty, Artisan } = require("../models");

const artisans = [
  {
    name: "Boucherie Dumont",
    specialty: "Boucher",
    note: 4.5,
    city: "Lyon",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "boucherie.dumond@gmail.com",
    website: null,
    category: "Alimentation",
    isTop: false,
  },
  {
    name: "Au pain chaud",
    specialty: "Boulanger",
    note: 4.8,
    city: "Montélimar",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "aupainchaud@hotmail.com",
    website: null,
    category: "Alimentation",
    isTop: true,
  },
  {
    name: "Chocolaterie Labbé",
    specialty: "Chocolatier",
    note: 4.9,
    city: "Lyon",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "chocolaterie-labbe@gmail.com",
    website: "https://chocolaterie-labbe.fr",
    category: "Alimentation",
    isTop: true,
  },
  {
    name: "Traiteur Truchon",
    specialty: "Traiteur",
    note: 4.1,
    city: "Lyon",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "contact@truchon-traiteur.fr",
    website: "https://truchon-traiteur.fr",
    category: "Alimentation",
    isTop: false,
  },
  {
    name: "Orville Salmons",
    specialty: "Chauffagiste",
    note: 5,
    city: "Evian",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "o-salmons@live.com",
    website: null,
    category: "Bâtiment",
    isTop: true,
  },
  {
    name: "Mont Blanc Eléctricité",
    specialty: "Electricien",
    note: 4.5,
    city: "Chamonix",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "contact@mont-blanc-electricite.com",
    website: "https://mont-blanc-electricite.com",
    category: "Bâtiment",
    isTop: false,
  },
  {
    name: "Boutot & fils",
    specialty: "Menuisier",
    note: 4.7,
    city: "Bourg-en-bresse",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "boutot-menuiserie@gmail.com",
    website: "https://boutot-menuiserie.com",
    category: "Bâtiment",
    isTop: false,
  },
  {
    name: "Vallis Bellemare",
    specialty: "Plombier",
    note: 4,
    city: "Vienne",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "v.bellemare@gmail.com",
    website: "https://plomberie-bellemare.com",
    category: "Bâtiment",
    isTop: false,
  },
  {
    name: "Claude Quinn",
    specialty: "Bijoutier",
    note: 4.2,
    city: "Aix-les-bains",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "claude.quinn@gmail.com",
    website: null,
    category: "Fabrication",
    isTop: false,
  },
  {
    name: "Amitee Lécuyer",
    specialty: "Couturier",
    note: 4.5,
    city: "Annecy",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "a.amitee@hotmail.com",
    website: "https://lecuyer-couture.com",
    category: "Fabrication",
    isTop: false,
  },
  {
    name: "Ernest Carignan",
    specialty: "Ferronier",
    note: 5,
    city: "Le Puy-en-Velay",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "e-carigan@hotmail.com",
    website: null,
    category: "Fabrication",
    isTop: false,
  },
  {
    name: "Royden Charbonneau",
    specialty: "Coiffeur",
    note: 3.8,
    city: "Saint-Priest",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "r.charbonneau@gmail.com",
    website: null,
    category: "Services",
    isTop: false,
  },
  {
    name: "Leala Dennis",
    specialty: "Coiffeur",
    note: 3.8,
    city: "Chambéry",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "l.dennos@hotmail.fr",
    website: "https://coiffure-leala-chambery.fr",
    category: "Services",
    isTop: false,
  },
  {
    name: "C'est sup'hair",
    specialty: "Coiffeur",
    note: 4.1,
    city: "Romans-sur-Isère",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "sup-hair@gmail.com",
    website: "https://sup-hair.fr",
    category: "Services",
    isTop: false,
  },
  {
    name: "Le monde des fleurs",
    specialty: "Fleuriste",
    note: 4.6,
    city: "Annonay",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "contact@le-monde-des-fleurs-annonay.fr",
    website: "https://le-monde-des-fleurs-annonay.fr",
    category: "Services",
    isTop: false,
  },
  {
    name: "Valérie Laderoute",
    specialty: "Toiletteur",
    note: 4.5,
    city: "Valence",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "v-laredoute@gmail.com",
    website: null,
    category: "Services",
    isTop: false,
  },
  {
    name: "CM Graphisme",
    specialty: "Webdesign",
    note: 4.4,
    city: "Valence",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
    email: "contact@cm-graphisme.com",
    website: "https://cm-graphisme.com",
    category: "Services",
    isTop: false,
  },
];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    for (const item of artisans) {
      const [category] = await Category.findOrCreate({
        where: { name: item.category },
      });

      const [specialty] = await Specialty.findOrCreate({
        where: {
          name: item.specialty,
          categoryId: category.id,
        },
      });

      await Artisan.create({
        name: item.name,
        note: item.note,
        city: item.city,
        about: item.about,
        email: item.email,
        website: item.website,
        isTop: item.isTop,
        image: "/images/default-artisan.jpg",
        specialtyId: specialty.id,
      });
    }

    console.log("Données importées avec succès");
    process.exit();
  } catch (error) {
    console.error("Erreur pendant l'import :", error);
    process.exit(1);
  }
};

seedDatabase();