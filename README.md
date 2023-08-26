# Premier LEague Quizzers

[Live webpage]()

![Mockup image](/assets/testing/)

## Project Overview

Premier League Quizzers is a quiz website that challenges users on their knowledge of the English Football Premier League. They are asked questions relating to wiiners, records, relegations etc since the Premier leagues inception.

The user is required to enter a username before they can begin quiz, after which they will be asked five questions. They won't know their "full time score" until the answer the last question. Afeter the last question is answered, the user will have their result displayed showing their username and their "score out of five."

The option of a "rematch" using a reset button, will reset the quiz allowing a new user to play.

## Wireframe

Using Balsamiiq Wireframe I was able to design my website before building it. It allowed me to draw up an basic layout of each page I wanted to include.

#### Main Page

![Mockup image](/assets/images/readme-images/)

#### Contact Page

![Mockup image](/assets/images/readme-images/)

#### Sign Up Page

![Mockup image](/assets/images/readme-images/)

## Features

- Username entry.
- "One-page" website.
- Question section appear dynamically after username validation passes.
- Questions appear dynamically once previous answer submitted.
- Once all questions answered. Results page appears dynamically.
- Results page displays score against the user's selected username.
- REset button to rest quiz and allow new user to play.

The navigation bar includes four clickable links, including the logo acting as a "return to homepage" link. This allows the user to easily access the three pages on the site.

To help with user experience, the header which holds the links, is fixed meaning that it will remain at the top as the user scrolls throughout the page.

Each page is styled in a clean, pleasing to the eye contrast using colours associated with natural living, calmness and nature - the idea behind behind Aloe Vera itself.

#### Main Page

![Mockup image](/assets/testing/)

#### Contact Page

![Mockup image](/assets/testing/)

#### Sign Up Page

![Mockup image](/assets/testing/)

## Technologies Used

### Languages

- HTML

- CSS3

- JavaScript

### Frameworks, Libraries & Other Resources

1. [Google Fonts:](https://fonts.google.com/)
    - Google Fonts was used to import fonts into the style.css file.

1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome provideds small graphics to complement the logo and various headers.

1. [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

1. [GitHub:](https://github.com/)
    - GitHub used to store the code whoch was pushed from Git.

1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to design the wireframes

1. [Chrome DevTools:](https://developer.chrome.com/docs/devtools/)
    - Chrome DevTools used to check the site in terms of responsivity, amending code and trying various styles. The Lighthouse feature was used to test performance.

1. [Am I Repsonsive:](https://ui.dev/amiresponsive)
    - Am I repsonive used to check responsivity across all devices.


## Validator Testing

[W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to HTML code.
    - [Homepage](/assets/testing/testing-html-homepage.pdf)
    - [Contact](/assets/testing/testing-html-contact.pdf)
    - [Sign Up](/assets/testing/testing-html-signup.pdf)

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to validate CSS code.

    - [CSS](/assets/testing/testing-css.pdf)

[WAVE Testing](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) was used to test accessibility of website. No errors were found.

## Performance

Using Google Lighthouse within Google Chrome Developer Tools I was able to test the performance, accessibility, best practice and SEO. Overall performance could be improved which I will look at in future updates.

The results shown below:

![Mockup image](/assets/testing/)

## Bugs

When screen size reduces to approximately tablet size and below, the Footer blends with body. Working with "sticky footer" coding I have attempted to fix the footer below each section, howvever my attempts have not worked. To resolve this, I will have to style the body in a differnet way.

I overcame this by targeting page-content with overflow-y auto. I know there is perhaps a more efficent/best practice way to make the code more appealing - this will be revisisted in a later update.

Issue regarding the links when screen size reduces. It forces content outside the viewport. I tried to implement the "hamburger" method but was unsuccessful. This will be revisisted in a later update - code will need be rewritten to allow a more positive visual experience as well as general user experience.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - [Live webpage]()

## Credits

### Content

Code from social media links was taken from CI Love Running project.

Code from hero image zoom was taken from CI Love Running project.

[CSS Tricks](https://css-tricks.com/) Information and code from articles in CSS Tricks regarding media queries and a fixed header.

[W3Schools](https://www.w3schools.com/)

[Stack Overflow](https://stackoverflow.com/) Assisted with flexbox styling.

Deployment section of README.md provided by CI's template.

Information for the questions based on the PRemier League history came from various sources, mainly the official Premier League website.

### Media

Tab icon provided by [favicon.cc](https://www.favicon.cc/?action=search&keywords=football/)

## Acknowledgements

The Slack commnity for asking questions that I didn't know I needed to ask and providing valuable help throughout.

Tutors and Student support from Code Institute - very helpful and understanding throughout the course.
