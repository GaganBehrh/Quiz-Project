# European Quiz-Project

I have been living in Europe since quite long time time almost 10 years and i thought to create a quiz over this topic can be interesting.

For link to this website click [Here]  https://gaganbehrh.github.io/Quiz-Project/

Design has been focused to *Desktop, Laptop, Tablet first* and *Responsive* but this quiz is also working on mobile phones as you can see on the figure below.
![image](https://user-images.githubusercontent.com/63474017/178993475-ec7a7e99-dc7d-4fb5-946e-dc1a4a214c6c.png)
## Who is this quiz for?

This quiz contains questions which are related to Europe.Players who are interested to know more about Europe are more than welcome to play this quiz.

## UX summary

This page was created in a simple way. The information is clear and serves to help the visitors of the website.
The objective to create the project was:
* Create fun interactive quiz for people who would like to know some interesting facts about Europe
* Design the quiz aesthetically pleasing with simple and clear way
* To make the quiz responsive.

To achieve these goals I used JavaScript to create these fictional quiz. I used HTML and CSS for the content and to make a good look for it. 

## User story:
1. As a user, I want to be able to test my knowledge about different cities in Europe.
2. As a user , I want to know my score.
3. As a user, I want to know when I am on the last question.
4. As a user, I want to able to know if i lost or won the game.
5. As a user, I want to know if the selected option is correct or not
6. As a user, I would like to see if all the buttons are functional.


### Features for future implementation
* Could increase the number of questions that the player could play longer time with the quiz. The subject provide almost endless number of questions.
* Attached relevant pictures to the questions related to different countries for example with the changing question.

## Technologies

- HTML5 for basic structure of the website
- CSS3 for style the website
- Google Fonts for font family
- Git for version control
- GitHub for storage the files and steps of development of the website

## Functionality

### Start Screen

![image](https://user-images.githubusercontent.com/63474017/178934212-20a91ef0-6b92-439b-871a-b3adb8d0538f.png)

On the start screen user sees the beautiful picture of Europe on the left and an encourage/challenging message for the user to ask about his knowledge in Europe and asks him to begin the quiz


### Questions and answers
When the users begins the quiz the first question with three possible answers is generated.
The answers are each in their own button. When clicked they will change the colour.
Depending upon if the answer is correct or not user can see the true or false response depending upon the responses respectively.
## True Response Image
![image](https://user-images.githubusercontent.com/63474017/178935428-949f7157-2243-4dec-8293-27967497287d.png)
## False Response Image
![image](https://user-images.githubusercontent.com/63474017/178937435-aba47bee-97c9-4557-9b51-ae1cf0f9d968.png)

The Score depending upon the response will appear on the click of the next button along with the following question
![image](https://user-images.githubusercontent.com/63474017/178938015-134488fe-7d6f-49fb-8b69-92e8ef9d5345.png)

### End of the game

At the end of the game user can click on the finish button and a message displaying the feedback if he lost or won will appear depending upon the score
![image](https://user-images.githubusercontent.com/63474017/178938145-5b6741d8-2791-4dec-b3d3-f7fbf49c7f84.png)

## Resources

- Code Institute course materials
- Code Institute Slack Community for some helps and idea
- Code Institute Mentor meetings and support
- Code Institute tutor support
- The picture was taken from this resource (https://unsplash.com/photos/dBtWLliLt5k)

## Testing

## Validators

# HTML
The HTML was checked by W3C HTML validator and it did not reported display any errors.
You can see the result below:
index.html verification
![image](https://user-images.githubusercontent.com/63474017/178939702-d2833062-a0e3-42f8-8596-bff35a573274.png)
QuozPage.html verification
![image](https://user-images.githubusercontent.com/63474017/178940995-c8b6aaf6-e672-47d2-bacb-c3c42a6ea49f.png)

# CSS
The CSS was checked by W3C Jigsaw validator it did not display any errors.

![image](https://user-images.githubusercontent.com/63474017/178941171-6c22f423-9d9a-45ff-a7d9-f1613187fc35.png)
# JS
The JS was checked via JSHint According to the assessment some functions are available in ES6 version. It was the reason that I got some warnings in the assessment.
![image](https://user-images.githubusercontent.com/63474017/182561284-c97d6f74-d9e7-48bf-b74d-417ade3ebe02.png)


### Manual testing
## User story testing:
## User story:
1. As a user, I want to be able to test my knowledge about different cities in Europe.
    Result:PASS, there are questions found relatded to different countries of Europe which will test the player's knowledge about Europe
2. As a user , I want to know my score.
    Result:PASS, when you click on the next button the score appears depending upon the response
3. As a user, I want to know when I am on the last question.
    Result:PASS, when you reach the highest score and click on the next button a message indicaing thats almost the end of the game appears
4. As a user, I want to able to know if i lost or won the game.
    Result:PASS, when you click on the Finish button,message concerning the winning and loosing appears on the screen
5. As a user, I want to know if the selected option is correct or not
    Result:PASS, when you click on the currrent option whether its correct/incorrect is displayed by true or false message
6. As a user, I would like to see if all the buttons are functional.
    Resukt;PASS,the buttons of the website were tested locally and these worked properly.

### Local testing
![image](https://user-images.githubusercontent.com/63474017/182560936-e136035d-1a0c-45f8-abdf-28100edaec1f.png)


### Responsiveness

I used Google Chrome Dev Tools for this exercise. I tested for mobile, ipad and desktop devices.
and it was found to be responsive from the ami responsive website.

## Version control
I managed the versions with the following process:
- I created a repository in GitHub
- I opened and developed the repository in GitPod
- I created and developed the files and folders in GitPod
- I used commit messages to help the development with short notices and pushed the changes on GitHub from time to time
- I saved and pushed my works to GitHub repository:
    1. git add . - adding work to git
    2. git commit -m "Commit message" - to commit the stage of work
    3. git push - to update my work in GitHub

## Publish the quiz

The steps of the publishing on the GitHub were as follow:
    
    1. **"Settings"** on the repository
    2. **"Source"** of "GitHub Pages" selected *master for Branch* and saved it
    3. The website was published on GitHub Pages and the link was provided in the same section.
