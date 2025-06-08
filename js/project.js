const projects = {
    techpulse: {
        title: "Techpulse",
        description: "On this website you are able to search, filter and share articles.\n" +
            "As a logged-in user you are also able to create, edit and delete articles\n" +
            "with API requests. Login details are provided on the login page, feel free\n" +
            "to test out the page.",
        tech: "Technology used: HTML, CSS, JavaScript and Figma",
        image: "assets/images/techpulse.png",
        live: "https://techpulse-blogproject.vercel.app/",
        repo: "https://github.com/TomChrister/blog-project",
    },

    holidaze: {
        title: "Holidaze",
        description: "This project is a fully functional accommodation booking application built with React,\n" +
            "                    TypeScript, and Tailwind CSS, using the Holidaze API by Noroff.\n" +
            "                    It includes pages and features for browsing venues, booking stays,\n" +
            "                    and managing listings and bookings as a venue manager.",
        tech: "Technology used: React, TypeScript and Tailwind",
        image: "assets/images/holidaze.png",
        live: "https://holidaze-eta.vercel.app/",
        repo: "https://github.com/TomChrister/holidaze",
    },
    ministore: {
        title: "miniStore",
        description: "This project is a fully functional eCommerce store built with React, using the API provided by Noroff.\n" +
            "                    The app includes various pages and features such as product listing, product details, shopping cart,\n" +
            "                    checkout, and a contact form.",
        tech:"Technology used: React, Tailwind and Zuztand",
        image: "assets/images/ministore.png",
        live: "https://minishop-react.vercel.app/",
        repo: "https://github.com/TomChrister/react-eCom",
    },
    bidwise: {
        title: "Bidwise",
        description: "The auction website allows users to list items, bid on others' listings, and manage credits. New\n" +
            "                    users start with 1000 credits, which increase through sales and decrease with purchases. Registered\n" +
            "                    users can create and view listings.",
        tech:"Technology used: HTML, Tailwind, Javascript and Figma",
        image: "assets/images/Bidwise.png",
        live: "https://auction-bidwise.vercel.app/",
        repo: "https://github.com/TomChrister/auction-website",
    },
    connectly: {
        title: "Connectly",
        description: "A visually polished social media app prototype\n" +
            "                    built with Tailwind CSS, featuring a feed page, \n" +
            "                    profile page, and create post page. While non-functional, \n" +
            "                    it demonstrates clean design and responsive UI.",
        tech: "Technology used: HTML, JavaScript and Tailwind",
        image: "assets/images/connectly.png",
        live: "https://connectly-app.vercel.app/",
        repo: "https://github.com/TomChrister/tailwind-app",
    },
};


const id = new URLSearchParams(window.location.search).get("id");


const data = projects[id];

if (data) {
    document.querySelector("#title").textContent = data.title;
    document.querySelector("#description").textContent = data.description;
    document.querySelector("#tech").textContent = data.tech;
    document.querySelector("#image").src = data.image;
    document.querySelector("#live-link").href = data.live;
    document.querySelector("#repo-link").href = data.repo;
} else {
    document.body.innerHTML = `
      <div style="text-align: center; padding: 2rem; font-family: sans-serif;">
        <h1>Prosjekt ikke funnet</h1>
        <p>Lenken du fulgte er ugyldig eller prosjektet finnes ikke.</p>
        <a href='../index.html'>← Tilbake til forsiden</a>
      </div>
    `;
}

