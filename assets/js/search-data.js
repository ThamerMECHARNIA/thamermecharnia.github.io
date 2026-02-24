// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "A curated list of my scientific publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of research and development projects, including academic, collaborative, and personal initiatives.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "My GitHub profile, rank, and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-news",
              title: "News",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-bookshelf",
              title: "Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "post-performance-and-limitations-of-fine-tuned-llms-in-sparql-query-generation",
        
          title: 'Performance and Limitations of Fine-Tuned LLMs in SPARQL Query Generation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Paper published in COLING 2025",
        section: "Posts",
        handler: () => {
          
            window.open("https://aclanthology.org/2025.genaik-1.8/", "_blank");
          
        },
      },{id: "books-the-hound-of-the-baskervilles",
          title: 'The Hound of the Baskervilles',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_hound_of_the_baskervilles/";
            },},{id: "books-the-adventures-of-sherlock-holmes",
          title: 'The Adventures of Sherlock Holmes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_adventures_of_sherlock_holmes/";
            },},{id: "books-his-last-bow",
          title: 'His Last Bow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/his_last_bow/";
            },},{id: "books-the-case-book-of-sherlock-holmes",
          title: 'The Case-Book of Sherlock Holmes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_case_book_of_sherlock_holmes/";
            },},{id: "books-the-memoirs-of-sherlock-holmes",
          title: 'The Memoirs of Sherlock Holmes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_memoirs_of_sherlock_holmes/";
            },},{id: "books-the-return-of-sherlock-holmes",
          title: 'The Return of Sherlock Holmes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_return_of_sherlock_holmes/";
            },},{id: "books-a-study-in-scarlet",
          title: 'A Study in Scarlet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_study_in_scarlet/";
            },},{id: "books-the-sign-of-the-four",
          title: 'The Sign of the Four',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_sign_of_the_four/";
            },},{id: "books-the-valley-of-fear",
          title: 'The Valley of Fear',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_valley_of_fear/";
            },},{id: "books-harry-potter-and-the-philosopher-s-stone",
          title: 'Harry Potter and the Philosopher’s Stone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/harry_potter_1/";
            },},{id: "books-harry-potter-and-the-chamber-of-secrets",
          title: 'Harry Potter and the Chamber of Secrets',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/harry_potter_2/";
            },},{id: "books-harry-potter-and-the-prisoner-of-azkaban",
          title: 'Harry Potter and the Prisoner of Azkaban',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/harry_potter_3/";
            },},{id: "books-harry-potter-and-the-goblet-of-fire",
          title: 'Harry Potter and the Goblet of Fire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/harry_potter_4/";
            },},{id: "books-harry-potter-and-the-order-of-the-phoenix",
          title: 'Harry Potter and the Order of the Phoenix',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/harry_potter_5/";
            },},{id: "books-harry-potter-and-the-half-blood-prince",
          title: 'Harry Potter and the Half-Blood Prince',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/harry_potter_6/";
            },},{id: "books-harry-potter-and-the-deathly-hallows",
          title: 'Harry Potter and the Deathly Hallows',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/harry_potter_7/";
            },},{id: "news-appointment-as-assistant-professor-at-university-of-paris-8",
          title: 'Appointment as Assistant Professor at University of Paris 8',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "projects-accord",
          title: 'ACCORD',
          description: "Automated Compliance Checks for Construction, Renovation or Demolition Works",
          section: "Projects",handler: () => {
              window.location.href = "/projects/accord/";
            },},{id: "projects-origami",
          title: 'ORIGAMI',
          description: "Online Tool for the Identification and Prioritization of Asbestos-Containing Materials",
          section: "Projects",handler: () => {
              window.location.href = "/projects/origami/";
            },},{id: "projects-smart-in-my-city",
          title: 'Smart In My City',
          description: "3D Serious Game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smart_in_my_city/";
            },},{id: "projects-timo",
          title: 'TIMO',
          description: "3D enigma and adventure video game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/timo/";
            },},{id: "teachings-web-development-fundamentals",
          title: 'Web Development Fundamentals',
          description: "Introduction to front-end web development covering HTML, CSS, and JavaScript. Students learn to structure web pages, design responsive layouts, and implement basic interactivity following web standards.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/but1-web-development/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%63%68%61%72%6E%69%61@%69%75%74.%75%6E%69%76-%70%61%72%69%73%38.%66%72", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=VYO4LugAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/thamer-mecharnia", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/thamermecharnia", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://thamermecharnia.github.io/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
