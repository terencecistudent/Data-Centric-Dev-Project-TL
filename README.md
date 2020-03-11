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
### User Stories:
#### Implemented:
1. As a user, I would like to search for animal or key word which will bring up the animal(s).
    - **End User Goal**: User's animal result will be shown correctly.
    - **End Business Goal**: Website search result is working properly showing appropriate animal(s).
    - **Acceptance Criteria**: When an animal is searched, correct animal to search word is shown.
    - **Measurement Of Success**: Check Manual Tests document.

2. As a user, I would like to be able to view all of the animals on a page when I click **View Animals**.
    - **End User Goal**: User selects View Animals in navbar resulting in all of the animals showing.
    - **End Business Goal**: Navbar **View Animals** link working and all of animals being displayed for user.
    - **Acceptance Criteria**: When View Animals is clicked, all the animals in the database are displayed.
    - **Measurement Of Success**: Check Responsiveness On Different Devices document and test with Heroku live link.

3. As a user, I would like to select an animal type e.g. Mammals, which will show all of the Mammals, as 
it would be easier to study what animals are mammals.
    - **End User Goal**: User selects animal type on View Animals page, e.g. Mammals.
    - **End Business Goal**: Animals with selected animal type are displayed properly.
    - **Acceptance Criteria**: Animals with selected animal type are displayed properly.
    - **Measurement Of Success**: Check Manual Tests document and test on live Heroku link.

4. As a user, I would like to click on Edit which will direct me to a page where I can update an animal,
as I would like to change the information of that animal.
    - **End User Goal**: User selects the **Edit** button on an animal which will bring then to an edit animal page.
    - **End Business Goal**: When Edit button is selected, the page is redirected to the edit animal page.
    - **Acceptance Criteria**: Edit button works and user directed to edit animal page.
    - **Measurement Of Success**: Check Manual Tests document and test on live Heroku link.

5. As a user, I would like to click on the Delete button which will delete that animal from the website.
    - **End User Goal**: User selects the **Delete** button on an animal which will then delete that animal from the website.
    - **End Business Goal**: When Delete button is selected, that particular animal is deleted from database and website.
    - **Acceptance Criteria**: Delete button works and animal is deleted from database and website.
    - **Measurement Of Success**: Check Manual Tests document and test on live Heroku link.

6. As a user, I would like to click on any of the social media icons and be directed to their page as I 
would like to see more content from this website.
    - **End User Goal**: User click on any of the social media icons which directs them to their homepage.
    - **End Business Goal**: When social media links are clicked on, links are working and directing user to social media 
                            homepage.
    - **Acceptance Criteria**: Social media icons hoverable and linked to their website homepage.
    - **Measurement Of Success**: Check **footer** element in the base.html file and test on live Heroku link.
#


## Framework
I have chosen to use Bootstrap 4 for the design and layout of my website.  Bootstrap is simple, 
effective and very efficient to use.

I have also used the Flask framework including jinja templates to also help me create this website.

For the font used, I have used Roboto from Google Fonts.  I have used this font as it is clear and 
can be easily read by users.
#

## Requirements
- Access to desktop, laptop, table or mobile devices.
- Internet connection.
#


## Features
There are a few features included for this application to work:
- **Text Search**: Used for users to text search for an animal.
- **View Animals**: Shows all animals including their information displayed in a presentable fashion.
- **Add Animal**: Allows user to add an animal to the database and website.
- **Edit Animal**: Allows user to make changes to an animal in the database and website.
- **Delete Animal**: Allows users to delete an animal from the database and wesbite
- **List Group Animal Types**: Allows users to filter between different animal types on showing animals
with that animal type.
#

## Database Schema
For this project I have selected to work with [MongoDB](https://www.mongodb.com/) which is a non-relational 
database.  This worked well for me as each document can contain a great deal of information for each animal.

I have used three collections within my database **animals**, **diets** and **types**.

In the animals collection, it contained several fields of data which were displayed on the website.

This is an example of one of the records in this animals collection:

![image](https://user-images.githubusercontent.com/48124466/76363701-81baef00-631b-11ea-93fd-285b1dceb5c3.png)
#


## Setting Up MongoDB 
### Setting Up An Account And Database in [MongoDB](https://www.mongodb.com/):
1. Sign In Or Sign Up.
2. Click on **Build a New Cluster**.

### Creating A Database:
1. Click on **+ Create Database**:

![image](https://user-images.githubusercontent.com/48124466/76410257-8917e200-6387-11ea-9258-a12a882a5540.png)

![image](https://user-images.githubusercontent.com/48124466/76410338-a8167400-6387-11ea-89bb-f30369a5a406.png)

2. Click **CREATE COLLECTION** to add a collection: 

![image](https://user-images.githubusercontent.com/48124466/76410495-ea3fb580-6387-11ea-9030-73ae4003b472.png)

![image](https://user-images.githubusercontent.com/48124466/76410562-03486680-6388-11ea-8472-80d0c6371bf3.png)

3. Click **INSERT DOCUMENT**:

![image](https://user-images.githubusercontent.com/48124466/76410641-30951480-6388-11ea-878f-ca2c714b7497.png)

![image](https://user-images.githubusercontent.com/48124466/76410718-50c4d380-6388-11ea-9620-273659e8089a.png)


### Connecting MongoDB to GitPod:
#### Mongo Shell
1. Overview > CONNECT:

![image](https://user-images.githubusercontent.com/48124466/76410910-a26d5e00-6388-11ea-88a9-d545f7a1be05.png)

2. Click on the option with **Mongo Shell**:

![image](https://user-images.githubusercontent.com/48124466/76411017-d3e62980-6388-11ea-949f-444862105c7f.png)

- Copy number 3 into GitPod's command line.

#### Connection String
1. Overview > CONNECT:

![image](https://user-images.githubusercontent.com/48124466/76410910-a26d5e00-6388-11ea-88a9-d545f7a1be05.png)

2. Click **Connect your application**

![image](https://user-images.githubusercontent.com/48124466/76456366-c81d5600-63ce-11ea-8453-9dabd0fdeb45.png)

3. In GitPod, create a file called **env.py**, inside that file:
- 'import os'

![image](https://user-images.githubusercontent.com/48124466/76456589-1d596780-63cf-11ea-851a-ea24c1d8c0fd.png)

4. In app.py:

![image](https://user-images.githubusercontent.com/48124466/76456665-3d892680-63cf-11ea-897a-9d8446e56b78.png)
#


## Deployment
This application was deployed using Heroku which can be viewed from here: 
[Animal Adventures](https://data-centric-dev-proj-tl.herokuapp.com/)

I have used GitPod to build this application and close to the end of finishing up.  This was pushed
to Heroku through the command line by linking the master git from my remote GitHub repository to a 
new app created in Heroku.

There are no differences between the website's development version and the deployed version to Heroku.

### Deploying to Heroku:
1. Go to the Heroku website [here](https://id.heroku.com/login).
2. Sign Up or Sign In which will direct you to the dashboard.
3. Click on **New > Create new app**.
4. Enter app name and choose region then press **Create App**.
5. Go to **Settings > Reveal Config Vars**:
    - Enter Keys and their values, example keys below:

    ![image](https://user-images.githubusercontent.com/48124466/76408488-eeb69f00-6384-11ea-8672-d0261d3156f5.png)
6. In the CLI, login into Heroku by **heroku login -i**, where you will be asked to your enter email address and
    password.
7. If you have already created your Heroku app, you can remote to your local repository with the heroku git:remote command.
8. Set debug=False for deployment.
9. To deploy your app to Heroku, use the git push command to push the code from your local repository’s master branch to 
    your heroku remote:

    ![image](https://user-images.githubusercontent.com/48124466/76408974-ae0b5580-6385-11ea-9cf1-8d67c4f0dff5.png)
10. When the build is complete, on the Heroku website, in the app click **Open App**.

[Deploying with Git](https://devcenter.heroku.com/articles/git)
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
I have also carried out manual tests which show the CRUD operations in use and filtering animal types.

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


### Code Validation Checks:
HTML: https://validator.w3.org/
- Only errors relate to Flask framework.

CSS: https://jigsaw.w3.org/css-validator/
- style.css: No errors.

JavaScript : https://codebeautify.org/jsvalidate
- main.js: Warnings.


### Responsive Design Testing and Visuals:
I have tested the responsiveness of this application using **Google Chrome**.  I have tested it over different 
phones (Portrait and Landscape), iPad and iPad Pro (Portrait and Landscape) and on the laptop view.

Click below to see tests:

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
    - Helped with the visibility of the text for users to see clearly.
- Git 
    - Version control to the GitHub repositories.
    - Ran the code to expose a live port.
- GitHub
    - Remote repository.
- Google Chrome Developer Tools 
    - Helped with small changes.
#


## RoadMap
In the future, I would like to implement:
- A register and login form for users.
- SVG graphs containing information regarding the database.
- More fields to be filtered for users, e.g. filtering between animal diets.
#


## Cloning and Pushing To The Respository
### Cloning:
- Here is a link how to clone a repository: 
https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
#

### Pushing To The Respository:
- To add, commit and push files to the repository, e.g. index.html, open a New Terminal and type:
1. git add index.html
2. git commit -m "Leave a message here"
3. git push origin master - (which is for the master branch).

- To create a new branch within your current application, open a New Terminal:
1. Create a branch: git checkout -b new-branch-name
2. Edit, add to your application and commit the files.
3. Push the branch to the remote repository: git push origin new-branch-name.
#


## Support
To contact GitHub, follow this link: https://support.github.com/
#


## Credits
### Media:
- I got the background image from a free open sourced website: https://www.pexels.com/.
- For the uploaded images in my database, I used Wikipedia Commons: https://commons.wikimedia.org/wiki/Main_Page

### Animal Information:
- Animal facts were researched from [National Geographic - Animals](https://www.nationalgeographic.com/animals/)

### Authors and Acknowledgment:
- **Autor**: Terence Logue
- **Acknowledgment**: Code Institute Slack, Code Institute Tutor Support, Assigned Mentor: Maranatha Ilesanmi
