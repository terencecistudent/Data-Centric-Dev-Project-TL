# Animal Adventures

## Description
In the website, users are able to search and view a range of animals.  Users are able to create new animals with
specific fields required.  Users can also edit any animal of their liking and delete them from the website.  

I have started this project by creating mockups and wireframes to help give me an idea of how I was going to 
design the website across all platforms considered, laptops, iPads and mobile devices.  Below is attached my
mocks and wireframes:


## Wireframes
[Click to open mockups and wireframes.](https://github.com/terencecistudent/Data-Centric-Dev-Project-TL/blob/master/mockups/Mockups.pdf)


## UX
### User Stories
- As a user, I would like to create an account as then it would feel more personal.
- As a user, I would like to save my favourite animals in a separate section called Favourites.
- As a user, I would like to see some statistic or graphs relating to the data in the website.
- As a user, I would like to search for animal or key word which will bring up the animal(s).
#

## Framework
I have chosen to use Bootstrap 4 for the design and layout of my website.  Bootstrap is simple, 
effective and very efficient to use.

I have also used the Flask framework including jinja templates to also help me create this website.

For the font used, I have used Roboto from Google Fonts.  I have used this font as it is clear and 
can be easily read by users.


## Requirements
- Access to desktop, laptop, table or mobile devices.
- Internet connection.
#


## Database Schema
For this project I have selected to work with [MongoDB](https://www.mongodb.com/) which is a non-relational 
database.  This worked well for me as each document can contain a great deal of information for each animal.

I have used three collections within my database **animals**, **diets** and **types**.

In the animals collection, it contained several fields of data which were displayed on the website.

This is an example of one of the records in this animals collection:

![image](https://user-images.githubusercontent.com/48124466/76363701-81baef00-631b-11ea-93fd-285b1dceb5c3.png)
#


## Deployment:
Live link: [Animal Adventures](https://data-centric-dev-proj-tl.herokuapp.com/)

This application was deployed using Heroku which can be viewed from above.


#


## Installing
Software used to complete this game: **GitPod**

First go to GitHub: https://github.com/
1. Sign In or Sign Up to GitHub.
2. Once signed in, go to the left side of the screen and you will see:

![image](https://user-images.githubusercontent.com/48124466/68049737-89b6b280-fcdb-11e9-9e41-e02d4dc6fa9a.png)

3. Click **New**.
4. Fill out new repository details.
5. Click **Create Repository** at the bottom.
6. At the top right click GitPod (if installed) or enter URL Prefix.
7. Follow instructions below.

**How to install GitPod:**
- URL Prefix:
- Browser Extension
- GitHub App

Here is the link for instructions: https://www.gitpod.io/

URL Prefix:
Browser Extension
GitHub App
Here is the link for instructions: https://www.gitpod.io/
#


## Testing
### Jasmine Tests:
I have conducted tests using Jasmine Testing Framework [click here](https://github.com/terencecistudent/Data-Centric-Dev-Project-TL/tree/master/testing), 
such tests involve:

1. Selecting the animal types should return the matching animals:

![image](https://user-images.githubusercontent.com/48124466/76366166-1bd16600-6321-11ea-858a-6594ffe99194.png)

2. When the Edit button is clicked, users should be brought to the Edit Animal page:

![image](https://user-images.githubusercontent.com/48124466/76366224-54713f80-6321-11ea-969f-7eeb84647d74.png)

3. When a user enters an animal which is in the database, those searched animals will appear:

![image](https://user-images.githubusercontent.com/48124466/76366353-aade7e00-6321-11ea-848e-1e52e3622a99.png)

4. When user enters an animal which is **not** in the database, all animals should show:

![image](https://user-images.githubusercontent.com/48124466/76366460-f6912780-6321-11ea-9277-afd84f054fe9.png)

5. When the user clicked the Delete button, the selected animal will be deleted from the database:

![image](https://user-images.githubusercontent.com/48124466/76366541-335d1e80-6322-11ea-990c-2fa717343d2b.png)


### Manual Tests:
I have also carried out manual tests which show the CRUD operations in use.

[Manual Tests](https://github.com/terencecistudent/Data-Centric-Dev-Project-TL/blob/master/testing/Manual%20Tests.pdf)


### Running Responsive Designs on Google Chrome:
Here is a link how to run the application on a live server by configuring and exposing ports with GitPod:
https://www.gitpod.io/docs/43_config_ports/

**To view responsive applications:**
1. Right click then go to **Inspect Element**
2. Click on the **Toggle Device Toolbar** (Icons showing two devices):

![image](https://user-images.githubusercontent.com/48124466/68051275-f2ebf500-fcde-11e9-8b3a-adc7abc16c5f.png)

3. Click on any device, for example, iPhone 5/SE selected:

![image](https://user-images.githubusercontent.com/48124466/68051467-5aa24000-fcdf-11e9-8666-d29f1afa8955.png)


### Code Validation Checks
HTML: https://validator.w3.org/
- Only errors relate to Flask framework.

CSS: https://jigsaw.w3.org/css-validator/
- style.css: No errors.

JavaScript : https://codebeautify.org/jsvalidate
- main.js: Warnings.


### Responsive Design Testing and Visuals
I have tested the responsiveness of this application using Google Chrome.  I have tested it over different 
phones (Portrait and Landscape), iPad and iPad Pro (Portrait and Landscape) and on the laptop view.

[Reponsive Platform Tests Here](https://github.com/terencecistudent/Data-Centric-Dev-Project-TL/blob/master/testing/Responsiveness%20On%20Different%20Devices.pdf)
#

## Technologies Used
- HTML5
- CSS3
- JavaScript
- jQuery
- Markdown
    - Used for the README.md file
- Bootstrap v4.3.1
    - This framework used in this appplication for:
        - Navbar
        - Styling
        - Responsive Layouts
        - Buttons
- MongoDB
    - A document-orientated database which was used for the project.
- Google Fonts
    - Help with the visibility of the text for users to see clearly.
- Git 
    - Version control to the GitHub repositories.
    - Ran the code to expose a live port.
-GitHub
    - Remote repository.
- Google Chrome Developer Tools 
    - Helped with small changes.
#


## RoadMap
In the future, I would like to implement:
- A register and login form for users.
- SVG graphs containing information regarding the database.
#


## Cloning and Pushing To The Respository
### Cloning 
- Here is a link how to clone a repository: 
https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
#


### Pushing To The Respository
- To add, commit and push files to the repository, e.g. index.html, open a New Terminal and type:
1. git add index.html
2. git commit -m "Leave a message here"
3. git push origin master - (which is for the master branch).

- To create a new branch within your current application, open a New Terminal:
1. Create a branch: git checkout -b new-branch-name
2. Edit, add to your application and commit the files.
3. Push the branch to the remote repository: git push origin new-branch-name.

## Support
To contact GitHub, follow this link: https://support.github.com/
#


## Credits
### Media 
- I got the background image from a free open sourced website: https://www.pexels.com/.
- For the uploaded images in my database, I used Wikipedia Commons: https://commons.wikimedia.org/wiki/Main_Page

### Animal Information 
- Animals facts were researched from [National Geographic - Animals](https://www.nationalgeographic.com/animals/)

### Authors and Acknowledgment
- **Autor**: Terence Logue
- **Acknowledgment**: Code Institute Slack, Code Institute Tutor Support, Assigned Mentor: Maranatha Ilesanmi
