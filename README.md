<h1>Call Me, Baby - WDI Full Stack Capstone Project - Front End Repo </h1>

## Summary
"Call me, baby" is an appointment reminder single page application that uses a Rails API that integrates with Twilio to send SMS a set interval before a user's schedule appointment. This capstone project is adapted from Twilio's appointment reminder project found [here](https://www.twilio.com/docs/tutorials/appointment-reminders-ruby-rails). I adapted it to send a custom message set by the client instead of the static message reminder as in their example that the client enters in forms on the front end.

The user creates a message on the front end, and using the Rails Active Record Callback, after_create, the Twilio SMS request is constructed and sent to Twilio.

Using an Active Jobs Queue adapter, delayed_job, we're able to call the method handle_asynchronously which allows for a delayed firing of the SMS message to a chosen time.
CMB requires users to be authenticated in order to use the site and CRUD appointments. Alas, the poor author is on a Twilio free trial account meaning messages can only be sent to the author's cell phone so it doesn't matter.

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

## ERD
![Entity Relationship Diagram](https://i.imgur.com/xp7V4Zu.png)

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
I wanted take on challenges in areas I knew I was weak in, namely reading documentation and being able to articulate my problems to troubleshoot issues. I wanted to solve my own problems as much as possible and choose a project that was somewhat outside the scope of the course, but not impossible to do. I was really ill with pneumonia and unfortunately lost a lot of time on this project so I didn't get as far as I wanted to, but I'm pretty happy with how far I got on the back-end and learned a lot about myself as a developer.

I chose this project because I wanted to use a third party API. I found this Twilio project, and wanted to break it down to really understand how it works, and see if I could make it better. I did that by adapting the project to not use the Rails view layer as suggested in the Twilio project and instead splitting the front-end as we'd learned to do in class. I added user authentication via a protected_controller that required a token for all CRUD actions on the appointments. I am also storing and sending a custom SMS message vs in Twilio's example where they have a static message for every appointment.

This project was really challenging because third party API integration is not something explicitly covered in the course, and neither were Rails Active Jobs. In class we had briefly discusses how methods could be written in the resource model, but we had never really seen what could be done. Even doing little things like figuring out how to set up the environment variables for Twilio took me a long time to do at first, not because it was difficult, but because I got lost in the vastness of Twilio's documentation for every use case.

Many of the challenges I had were figuring out how the ruby gems required for Twilio and delayed sending worked and what they needed in order to be set up correctly which required finding out what Active Jobs were, how to fire them, and other things how to access the Procfile, and find documentation to set up Time Zones in the Application.rb, which were all totally unfamiliar to me. Finding out how to start the delayed_jobs gem locally, and then in production with Heroku were the biggest time sucks even through they required me running one simple command.

Overall it was an incredible journey of self-discovery. I felt obliged to read every piece of the Twilio documentation before I had to start and do their version of CodeSchool and talk to their support representatives, and that ended up not being the best use of my time. I did learn that my instincts to start just writing code and seeing what happens is something I should nurture. I made way more progress in my understanding and in my project than from just reading.

I've also learned that I really enjoy back-end development more than front-end. The more I read about Active Record, the more it sparked my curiosity and inspired a desire to learn and experiment with Active Record callbacks to see how else they can be used.

I had pneumonia and spent most of my time working on my back end that I had neglected the front end! I really wanted to do this project in Ember, but I didn't feel confident with the framework after a week of mostly self-directed learning while I was ill on top of doing a kind of tricky third party API integration with Active Jobs so I scrapped the idea and used the browser template that GA built for us kind of as a crutch.

I identified lots of ways I want to grow in the future:
- I definitely have learned to appreciate the Agile development process to making sure I'm on time, working on the right things at the right time, and not spending too much time on the wrong things because I did everything wrong for this capstone project!
- Planning and design are not at all my strong suits and I'd like to grow in these areas very much! I don't have good intuition for how to come up with a great layout for a website that does X, Y, and Z and how to represent that data in the most inuitive, and aesthetically pleasing way, but I want to learn how to plan better and make good wireframes, and make my websites look like my wireframes!
- My commit history is a mess! I definitely worked on the master branch too often and not on a feature to development to master like I should have.

## Unsolved Problems on the Front End
- Design, accessibility, UX/UI: My website doesn't look anything like I had wireframed! I find wireframing and styling really challenging. I don't yet have a great understanding or intuition of good design or great UX/UI. CMB doesn't look very good, and I'd like to take more time to give it a real nav bar or menu and give it a better layout. My forms aren't very clear about what they do, and accessibility is definitely a problem. This is definitely an area I'd like to take time to grow in.
- Custom time: I'd really like users to be able to set a custom time to be reminded for their appointment. Right now I have 30 minutes hardcoded into the back end, but I'd really like to give users the ability to choose when they're alerted about their appointment.
- Emberify! I'd really like to redo this in ember instead of the GA Browser Template! I had soooo many helpers and still relied on getFormFields for this project. I'd really like to use a front end framework like Ember to make this project look great. My dream for a full version of the project is something like Google Calendar, which has multiple calendar views for month, week or day, which Ember would do well, and also has a location feature for an appointment's location that uses Google Maps.
