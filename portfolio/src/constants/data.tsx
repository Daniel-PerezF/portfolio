export const frontSkills = [
  {
    name: "JavaScript",
    logo: "./logos/js-logo.png",
  },
  {
    name: "HTML5",
    logo: "./logos/html-logo.png",
  },
  {
    name: "CSS3",
    logo: "./logos/css-logo.png",
  },
  {
    name: "React",
    logo: "./logos/react-logo.png",
  },
  {
    name: "TailWindCSS",
    logo: "./logos/tailwind-logo.png",
  },
  {
    name: "TypeScript",
    logo: "./logos/typescript-logo.png",
  },
];

export const backSkills = [
  {
    name: "Node.js",
    logo: "./logos/node-logo.png",
  },
  {
    name: "Express.js",
    logo: "./logos/express-logo.svg",
  },
  {
    name: "PostgreSQL",
    logo: "./logos/postgresql-logo.png",
  },
];

export const miscTools = [
  {
    name: "AWS",
    logo: "./logos/aws-logo.png",
  },
  {
    name: "Git",
    logo: "./logos/git-logo.png",
  },
  {
    name: "GitHub",
    logo: "./logos/github-logo.png",
  },
  {
    name: "JWT",
    logo: "./logos/jwt-logo.svg",
  },
  {
    name: "NPM",
    logo: "./logos/npm-logo.png",
  },
  {
    name: "React Router",
    logo: "./logos/react-router-logo.png",
  },
  {
    name: "Vite",
    logo: "./logos/vite-logo.png",
  },
  {
    name: "Canva",
    logo: "./logos/canva-logo.png",
  },
  {
    name: "Figma",
    logo: "./logos/figma-logo.png",
  },
  {
    name: "ESLint",
    logo: "./logos/eslint-logo.png",
  },
  {
    name: "Docker",
    logo: "./logos/docker-logo.png",
  },
  {
    name: "Visual Studio Code",
    logo: "./logos/vscode-logo.png",
  },
  {
    name: "Slack",
    logo: "./logos/slack-logo.png",
  },
];

export const projects = [
  {
    name: "Spin Trade",
    key: "spin-trade",
    mainImg: "./project-images/spin-trade-landing.png",

    imgs: [
      "./project-images/spin-trade-home.png",
      "./project-images/spin-trade-create.png",
      "./project-images/spin-trade-sign-in.png",
      "./project-images/spin-trade-all.png",
      "./project-images/spin-trade-genre.png",
      "./project-images/spin-trade-details.png",
      "./project-images/spin-trade-cart.png",
      "./project-images/spin-trade-checkout.png",
      "./project-images/spin-trade-confirmation.png",
      "./project-images/spin-trade-listing.png",
      "./project-images/spin-trade-dashboard.png",
      "./project-images/spin-trade-dashboard-details.png",
    ],
    mobileImgs: [
      "./project-images/spin-trade-home-mobile.png",
      "./project-images/spin-trade-create-mobile.png",
      "./project-images/spin-trade-sign-in-mobile.png",
      "./project-images/spin-trade-all-mobile.png",
      "./project-images/spin-trade-genre-mobile.png",
      "./project-images/spin-trade-details-mobile.png",
      "./project-images/spin-trade-details-2-mobile.png",
      "./project-images/spin-trade-cart-mobile.png",
      "./project-images/spin-trade-checkout-mobile.png",
      "./project-images/spin-trade-confirmation-mobile.png",
      "./project-images/spin-trade-listing-mobile.png",
      "./project-images/spin-trade-listing-2-mobile.png",
      "./project-images/spin-trade-seller-mobile.png",
      "./project-images/spin-trade-seller-details-mobile.png",
    ],
    features: [
      {
        ft: "User Authentication",
        desc: "Securely create an account, sign in, or explore the platform as a guest with the power of JSON Web Tokens (JWT) and argon2 for user verification.",
      },
      {
        ft: "Vinyl Marketplace",
        desc: "Users can post their vinyl records for sale, complete with image uploads to showcase their collection. The marketplace allows users to browse and purchase records from fellow collectors.",
      },

      {
        ft: "Shopping Cart Functionality",
        desc: "Enhance the shopping experience by adding and removing items from the cart, providing users with a flexible and convenient way to curate their vinyl selections.",
      },

      {
        ft: "Checkout Functionality",
        desc: "Seamlessly proceed to checkout, allowing users to purchase their desired vinyl records and navigate to a mock order confirmation page for a satisfying transaction experience.",
      },
      {
        ft: "Genre Filtering",
        desc: "Easily navigate the catalog by filtering records based on genre preferences, ensuring a personalized and efficient browsing experience.",
      },
      {
        ft: "Seller Management",
        desc: "Sellers have the autonomy to manage their listings by editing active posts or removing items they've posted, offering a dynamic and responsive selling environment.",
      },
      {
        ft: "Mobile Responsiveness",
        desc: "Enjoy Spin Trade on the go! The platform is designed to provide a seamless and optimized experience across various mobile devices, ensuring that vinyl enthusiasts can trade and celebrate their passion for music anytime, anywhere.",
      },
    ],
    live: "http://recordmarketplace-dev.us-west-1.elasticbeanstalk.com/",
    github: "https://github.com/Daniel-PerezF/RecordMarketplace",
    about:
      "A full stack web application for vinyl collectors to buy and sell records.",
    fullDesc:
      "Spin Trade is a dynamic and immersive full-stack web application tailored for vinyl enthusiasts, offering a seamless marketplace experience for buying and selling vinyl records. Crafted as my final project during my time at LearningFuze, the coding bootcamp I attended, this platform showcases my skills in utilizing cutting-edge technologies to deliver a robust and user-friendly experience.",
    tech: [
      "React.js, TypeScript, Tailwind CSS, Node.js, Express.js, PostgreSQL, AWS Elastic Beanstalk, JWT, Argon2",
    ],
  },
  {
    name: "Ghibli Wiki",
    key: "ghibli-wiki",
    mainImg: "./project-images/ghibli-wiki-mac.png",
    imgs: [
      "./project-images/ghibli-wiki-home.png",
      "./project-images/ghibli-wiki-details.png",
      "./project-images/ghibli-wiki-nav.png",
      "./project-images/ghibli-wiki-about.png",
      "./project-images/ghibli-wiki-favorites.png",
      "./project-images/ghibli-wiki-watchlist.png",
    ],
    mobileImgs: [
      "./project-images/ghibli-wiki-home-mobile.png",
      "./project-images/ghibli-wiki-details-mobile.png",
      "./project-images/ghibli-wiki-favorites-mobile.png",
      "./project-images/ghibli-wiki-details-2-mobile.png",
      "./project-images/ghibli-wiki-watchlist-mobile.png",
      "./project-images/ghibli-wiki-nav-mobile.png",
      "./project-images/ghibli-wiki-about-mobile.png",
    ],
    features: [
      {
        ft: "Film Information",
        desc: "Users can access detailed information for each film, including the original Japanese title, director, producer, release date, run time, and film description.",
      },
      {
        ft: "API Integration",
        desc: "Harnessing the power of the Fetch API, Ghibli Wiki dynamically retrieves film information by making calls to the Studio Ghibli API. Notably, the project transitioned from using AJAX to adopting the Fetch API, reflecting a commitment to staying current with modern web development practices and technologies.",
      },
      {
        ft: "Interactive Lists",
        desc: "Users can create a list of their favorite films.",
      },
      {
        ft: "List Management",
        desc: "The application supports dynamic list management, allowing users to add or remove films from both their Favorites and Watchlist, tailoring their curated collection.",
      },
      {
        ft: "Technological Evolution",
        desc: "Originally crafted with vanilla JavaScript ES6 and CSS5, the project underwent a post-graduation overhaul, leveraging the power of React.js and TypeScript. The user interface was refined using Tailwind CSS for a sleek and responsive design.",
      },
      {
        ft: "Local Storage Integration",
        desc: "To enhance user experience, local storage is utilized to persistently store and retrieve user-specific lists, ensuring that their preferences are maintained across sessions.",
      },
      {
        ft: "Mobile Responsiveness",
        desc: "Experience Ghibli Wiki on the go! The application is crafted to be fully responsive on mobile devices, providing users with an optimized and engaging experience across various screen sizes.",
      },
    ],
    live: "https://daniel-perezf.github.io/ghibli-wiki/#/",
    github: "https://github.com/Daniel-PerezF/ghibli-wiki",
    about:
      "A front end web application for Studio Ghibli fans to view information about films.",
    fullDesc:
      "Ghibli Wiki is a front-end application tailored for Studio Ghibli enthusiasts, providing a platform to explore the entire catalog of Studio Ghibli films. This project was initiated during the junior phase at LearningFuze, the coding bootcamp I attended, and has since undergone a transformation using React.js, TypeScript, and Tailwind CSS.",
    tech: ["React.js, TypeScript, Tailwind CSS, Local Storage"],
  },
];
