# Premier League Quizzers

[Live webpage]()

![Mockup image](/assets/testing/)

## Project Overview

Premier League Quizzers is a quiz website that challenges users on their knowledge of the English Football Premier League. They are asked questions relating to wiiners, records, relegations etc since the Premier leagues inception.

The user is required to enter a username before they can begin quiz, after which they will be asked five questions. They won't know their "full time score" until the answer the last question. Afeter the last question is answered, the user will have their result displayed showing their username and their "score out of five."

The option of a "rematch" using a reset button, will reset the quiz allowing a new user to play.

### User Experience (UX)

#### ***Design***

- #### Colour Palette

- The colour palette is made up of four colours: 
  - Green #28a745
  - Purple #6b006b
  - White #FFFFFF

  - The Green #28a745 was chosen as it is associated with football. The Purple #6b006b was chosen as being similar to the the color scheme used by the Premier League website itself. I had chosen a slightly lighter purple in comparison as I felt the darker purple did not contrast well with the shade of Green I chose. Both colors together with the white contrasts really well helping user experience.

- #### Typography

  - The font syles of Lisu Bosa for the main body text and "Barriecito" for the headings works well together and represents the intention of the quiz. The "Barriecito" in particular works well as it gives off a "quizicle" style.


## Wireframe

Using Balsamiiq Wireframe I was able to design my website before building it. It allowed me to draw up an basic layout of each page I wanted to include.

#### Login Page

![Mockup image](/assets/testing/wireframe-images/wireframe-username-page.png)

#### Question Page

![Mockup image](/assets/testing/wireframe-images/wireframe-question-page.png)

#### Result Page

![Mockup image](/assets/testing/wireframe-images/wireframe-score-page.png)

## Features

- Username entry.
- "One-page" website.
- Question section appears dynamically after username validation passes.
- Questions appear dynamically, once previous answer submitted.
- Once all questions answered. Results page appears dynamically.
- Results page displays score against the user's selected username.
- Reset button to reset quiz and allow new user to play.

#### Login Page

![Mockup image](/assets/testing/readme-images/login-image.png)

#### Question Page

![Mockup image](/assets/testing/readme-images/questions-image.png)

#### Result Page

![Mockup image](/assets/testing/readme-images/results-image.png)

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

## User Testing


## Performance

Using Google Lighthouse within Google Chrome Developer Tools I was able to test the performance, accessibility, best practice and SEO. Overall performance could be improved which I will look at in future updates.

The results shown below:

![Mockup image](/assets/testing/)

## Bugs

- The alert for when no username has been entered and they "Kick-Off" button is pressed does not appear. I have tested this on several browsers and re-written the code but at this time, no fix is in place. I have tested this while ensuring pop-up blockers are disabled but this has not resolved the issue.
- The question container resizes depending on length of question being asked. Code would need to be we-written to maintain constant size and for the question text to wrap within the container.

## Future Implementations

- Scoreboard where previous users and their scores are saved which would add further competitivness to the quiz.
- Investigate the usage of an API to generate a larger bucket of questions and randomise the questions on each turn
- Add animation for when user logs in and also when their final result is revealed

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
