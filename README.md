<h1>Call Me, Baby - WDI Full Stack Capstone Project - Front End Repo </h1>

## Summary
"Call me, baby" is an appointment reminder single page application that uses a Rails API that integrates with Twilio to send SMS a set interval before a user's schedule appointment. This capstone project is adapted from Twilio's appointment reminder project found here: ((https://www.twilio.com/docs/tutorials/appointment-reminders-ruby-rails)). I adapted it to send a custom message set by the client instead of the static message reminder as in their example that the client enters in forms on the front end.

## Back End Repository
https://github.com/jennywy/capstone

## Back End Deployed
https://tranquil-caverns-61326.herokuapp.com/appointments

## Front End Repository
https://github.com/jennywy/callmebby

## Front End Deployed
https://jennywy.github.io/callmebby/

## Wireframe
![Wireframe](https://i.imgur.com/aJX5mSK.png)

## Project
![Call Me Baby](https://i.imgur.com/o6aMh3r.png)

## User Stories
- As a user I want to set an appointment with an appointment name so I know what appointments I have
- As a user I want to set an appointment with an appointment time so I can make my appointment on time
- As a user I want to enter a phone number so I can receive SMS alerts to be reminded about my appointment
- As a user I want to be sent an SMS to my phone number to be reminded about my appointment 30 minutes before my appointments
- As a user I want to set a custom SMS to be reminded with specific details about my appointment

## Technologies Used
- Javascript
- Handlebars
- jQuery
- AJAX
- Bootstrap
- CSS

## Project Planning Process
I had pneumonia and spent most of my time working on my back end that I had neglected the front end! I really wanted to do this project in Ember, but I didn't feel confident with the framework after a week of mostly self-directed learning while I was ill on top of doing a kind of tricky third party API integration with Active Jobs so I scrapped the idea and used the browser template that GA built for us kind of as a crutch. 

I identified lots of ways I want to grow in the future:
- I definitely have learned to appreciate the Agile development process to making sure I'm on time, working on the right things at the right time, and not spending too much time on the wrong things because I did everything wrong for this capstone project!
- Planning and design are not at all my strong suits and I'd like to grow in these areas very much! I don't have good intuition for how to come up with a great layout for a website that does X, Y, and Z and how to represent that data in the most inuitive, and aesthetically pleasing way, but I want to learn how to plan better and make good wireframes, and make my websites look like my wireframes!
- My commit history is a mess! I definitely worked on the master branch too often and not on a feature to development to master like I should have.

## Unsolved Problems on the Front End
- Design, accessibility, UX/UI: My website doesn't look anything like I had wireframed! I find wireframing and styling really challenging. I don't yet have a great understanding or intuition of good design or great UX/UI. CMB doesn't look very good, and I'd like to take more time to give it a real nav bar or menu and give it a better layout. My forms aren't very clear about what they do, and accessibility is definitely a problem. This is definitely an area I'd like to take time to grow in.
- Custom time: I'd really like users to be able to set a custom time to be reminded for their appointment. Right now I have 30 minutes hardcoded into the back end, but I'd really like to give users the ability to choose when they're alerted about their appointment.
- Emberify! I'd really like to redo this in ember instead of the GA Browser Template! I had soooo many helpers and still relied on getFormFields for this project. I'd really like to use a front end framework like Ember to make this project look great. My dream for a full version of the project is something like Google Calendar, which has multiple calendar views for month, week or day, which Ember would do well, and also has a location feature for an appointment's location that uses Google Maps.
