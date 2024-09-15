# MADRS-s depression severity questionnaire 

This is a minimal questionnaire to determine a user's depression severity via the MADRS-s scale. It is not a diagnosis, it is simply an indication.
It was created from scratch as part of a technical challenge interview process for [Flow NeuroScience](https://www.flowneuroscience.com/)

# Tech stack
Main technologies in use are
- NPM
- Vite
- React
- TypeScript
- React Router DOM
- MaterialUI
- SCSS

# To run the code locally
- Clone repo locally with HTTPS or SSH method
- Run in terminal: `npm run dev`
- Open localhost port as indicated


# Noteworthy features: user experience as primary focus
- Fully responsive from mobile to desktop. Developed mobile-first.
- Ability to navigate forward & back in quiz with previous answered being saved (per session)
- State persistance even after browser refresh, using both react state hooks & localstorage (per session)
- Animated total counter on results screen, as well as disabled exit button until score has finished counting.
- Visual smoothing of loading elements that are slow to render such as images, to prevent screen jumps of other content

# Noteworthy features: contributing developers as primary focus
- Re-usable components adhered to in modern React standards, very little duplicated code.
- Proper routing implemented using React-Router-Dom
- Structured SASS css structure adhered to.
- All features were contributed to a GIT repository to mimic a basic GitFlow strategy (feature branch -> feature PR -> develop branch -> release PR -> production branch (main))
- All releases to 'production' were tagged with semantic versioning

# Upcoming improvements
Framer motion was used to animate all navigations, with a forward swipe for forward navigation, and the opposite for backwards. With it, moving forward in the quiz caused the expected right to left swipe animation, however moving backwards caused the same animation instead of the expected left to right swipe animation - this was visually jarring & would likely be confusing to a user.
It was therefore decided to remove the animation swipes from the question answering portion of the app, but keep the PageAnimated component functional elsewhere in the app to demonstrate its ability to smooth visual navigation. 
The nested route structure is likely what made the forward/backward rendering slightly more difficult with Framer motion, but some research shows that there are some existing wrapper functions provided by framer motion that may help when this is attempted again in future.




![image](https://github.com/user-attachments/assets/87f66798-d5a0-4cfe-a93f-a1557bc6365a)
![image](https://github.com/user-attachments/assets/eaf48e09-7dd5-4401-912b-e3ac60b61c35)
![image](https://github.com/user-attachments/assets/40342d5a-4af9-4d15-ab6b-7729a986e2fa)
![image](https://github.com/user-attachments/assets/31699f9d-d2a4-4f01-8a1b-b5af690d1631)
![image](https://github.com/user-attachments/assets/92dc4234-9498-4fd2-ac16-34e6a7926e88)
![image](https://github.com/user-attachments/assets/16b5d112-568d-4525-b4a1-75c3d49c6135)




