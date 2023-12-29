export const projects = [
  {
    name: "Spin Trade",
    key: "spin-trade",
    imgs: [
      "./project-images/spin-trade-home.png",
      "./project-images/spin-trade-record.png",
      "./project-images/spin-trade-cart.png",
    ],
    features: [
      {
        ft: "Sign In / Sign Out",
        desc: "Users can create an account and sign in / sign out, users can also sign in as a guest.",
      },
      {
        ft: "List Items for Sale",
        desc: "Users can post their own vinyl records for sale",
      },

      {
        ft: "Add to Cart",
        desc: "Users can add items to their cart.",
      },
      {
        ft: "Remove from Cart",
        desc: "Users can remove items from their cart.",
      },
      {
        ft: "Users can Checkout",
        desc: 'Users can checkout and "purchase" items which redirects them to a mock confirmation page.',
      },
      {
        ft: "Filter by Genre",
        desc: "Users can filter available records by genre.",
      },
      {
        ft: "Delete Listing",
        desc: "Sellers can delete items they have posted for sale.",
      },
      {
        ft: "Edit Listing",
        desc: "Sellers can edit current listings they have for sale.",
      },
    ],
    live: "http://recordmarketplace-dev.us-west-1.elasticbeanstalk.com/",
    github: "https://github.com/Daniel-PerezF/RecordMarketplace",
    about:
      "A full stack web application for vinyl collectors to buy and sell records.",
    fullDesc: "",
    tech: [""],
  },
  {
    name: "Ghibli Wiki",
    key: "ghibli-wiki",
    imgs: [
      "./project-images/ghibli-wiki-home.png",
      "./project-images/ghibli-wiki-film.png",
    ],
    features: [
      {
        ft: "Film Information",
        desc: "Users can access detailed information for each film, including the original Japanese title, director, producer, release date, run time, and film description.",
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
      "A front end web application for Studio Ghibli fans to view information about films as well as create a favorites and watchlist.",
    fullDesc:
      "Ghibli Wiki is a front-end application tailored for Studio Ghibli enthusiasts, providing a platform to explore the entire catalog of Studio Ghibli films. This project was initiated during the junior phase at LearningFuze, the coding bootcamp I attended, and has since undergone a transformation using React.js, TypeScript, and Tailwind CSS.",
    tech: ["React.js, TypeScript, Tailwind CSS"],
  },
];
