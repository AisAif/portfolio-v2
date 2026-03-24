import dikantinImg from "@/assets/images/dikantin.png";
import umkmAIImg from "@/assets/images/umkm-ai.png";
import contactsManagerImg from "@/assets/images/contacts-manager.jpg";
import sipzisImg from "@/assets/images/sipzis.png";
import classMathImg from "@/assets/images/class-math.png";
import flatpeeBotImg from "@/assets/images/flatpee-bot.jpg";
import recipeManagementImg from "@/assets/images/recipe-management.png";

const projects = [
  {
    id: 3,
    name: "DIKANTIN - PHP Native",
    short_description:
      "An application for food purchasing and canteen management",
    description:
      "DIKANTIN is a PHP-based web application that simplifies the process for students to purchase food or drinks in the canteen.",
    img: dikantinImg,
    link: "https://github.com/AisAif/dikantin-php-native",
  },
  {
    id: 4,
    name: "Contacts Manager - React Native",
    short_description: "A contact data management application",
    description:
      "Contacts Manager is a mobile application that allows managers to efficiently manage their contact data. The application can be accessed online.",
    img: contactsManagerImg,
    link: "https://github.com/AisAif/contacts-manager-react-native",
  },
  {
    id: 5,
    name: "SIPZIS - Rest API with Laravel",
    short_description:
      "An application for managing donations, alms, and zakat for institutions",
    description:
      "SIPZIS is an application designed to simplify the management of donations, alms, and zakat. Additionally, the public can easily donate to institutions through this platform.",
    img: sipzisImg,
    link: "https://sipzis-ws.netlify.app/",
  },
  {
    id: 6,
    name: "ClassMath - Rest API with Node JS",
    short_description:
      "An application offering materials and questions on mathematics",
    description:
      "ClassMath is an Android application providing educational materials and questions about mathematics. This application is accessible online.",
    img: classMathImg,
    link: "https://github.com/AisAif/classmath-restful-api",
  },
  {
    id: 7,
    name: "FlatPee WhatsApp Bot - Node JS",
    short_description: "A WhatsApp bot integrated with AI",
    description:
      "FlatPee WhatsApp Bot is a WhatsApp bot integrated with Artificial Intelligence. Users can send a message to the bot and receive an immediate response.",
    img: flatpeeBotImg,
    link: "https://github.com/AisAif/flatpee-whatsapp-bot",
  },
  {
    id: 8,
    name: "Recipe Management - Rest API with Golang",
    short_description: "A recipe management application for users",
    description:
      "Recipe Management is an application that enables users to manage and share their recipes online conveniently.",
    img: recipeManagementImg,
    link: "https://github.com/AisAif/recipe-management-rest-api",
  },
  {
    id: 9,
    name: "UMKM AI - Adonis + Rasa",
    short_description: "A Landing Page and Rasa Config Management Application",
    description:
      "UMKM AI is a landing page and Rasa config management application to manage their AI chatbot models. With UMKM AI, you can train your own AI chatbot models.",
    img: umkmAIImg,
    link: "https://github.com/AisAif/umkm-ai",
  },
];

export default projects;

