## Inspiration 💡
When was the last time you *donated to charity*? How much did you donate? Was it *£25*? *£4*? Or a few pence? With an increasing amount of local stores and chain conglomerates adapting a round-up policy, at checkout, sometimes an option to round up to the nearest dollar is offered so that the extra change can be forwarded to charitable campaigns. With the pandemic, we can no longer contribute to live fundraisers and local stores that usually ask customers to round up, a proven way to garner more contributions, can no longer promote this practice. So, in this digital era with emerging challenges, we seek to keep one thing constant: the flow of donations. 

We believe with creative thinking and a proper approach we can innovate novel methods that’ll help us tackle the same in an intuitive manner. Thus, we build, **Shakespare** ✨

![main-logo](https://i.postimg.cc/QCg5HxDj/logo-page.png)

## What it does 🤔
**Shakespare** makes it easier for us to *donate spare change from our bills* . With the snap of the camera, those spare receipts can be automatically rounded up in the comfort of home without ten impatient shoppers glaring at you from behind. The few cents that awkwardly follow your grocery bill or food delivery can transform into a catalyst that sustains global ecosystems. *Squeezing out the potential in the smallest of change, we provide you with the ability to maximize your gift to those most in need, in true-Shakespearean fashion.*

We are targetting **(ESG) - Environmental/Social/Governments - Environmental/Social** events through our project!

## How we built it ⚙️

First and foremost, it is Crafted with 💙. 
For the front-end, we’ve used **React.js** & **Tailwind** as a CSS framework. The Authentication (OAuth) is done through Firebase. The ML model that analysis the receipts image is made in javascript.

![machine-learning](https://i.postimg.cc/Prpysq49/ml-model.png)

- For the backend we have used **Stripe** for payment gateways :-
![stripe](https://i.postimg.cc/Y9KhYKb0/stripe.png)

- **Tech Stack** :-
![techstack](https://i.postimg.cc/QxYM58Z8/Group-20.png)

---

## Design 🎨

We were heavily inspired by the revised version of **Iterative** design process, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution & then finally deploy it.

![Double-Diamond](https://i.postimg.cc/bvQV3jHt/doublediamonddesignprocess.png)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

This time went for the minimalist **Material UI** design. We utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

![figma](https://i.postimg.cc/Pr4YHxK4/Figmamockup.png)

---

# Research 📚
Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are a few of the resources that were helpful to us —

- https://bit.ly/3qTtuDo

Through a series of lab experiments and one large field study, we find that consumers respond more favorably to a roundup than to a flat donation request, even when the requested amount is identical. We find evidence that the effect arises because a roundup request reduces consumers’ perceived pain of donating.

- https://bit.ly/3GWMFld
- Online Charity Contributions are growing - up 20% in 2020 : https://bit.ly/3GUUKHj

**CREDITS**
- **Design Resources** : Freepik
- **Icons** : Icons8, fontawesome
- **Font** : Roboto / Raleway / Jost 

---

## Challenges we ran into 😤
We face some challenges during the hackathon. One of the major challenges was the time difference. All of us are in different time zones which creates some communication challenges.

- **Authentication Issue**: We faced issues while enabling Google SSO.
- **Image to text OCR**: It became a challenge when the quality of the image was poor. The algorithm was not able to read such images of bills.
- **React components**: Transforming highly dynamic ideas created in Figma into React Components and Layouts.
- **Integration of Modules** - Connecting the Various APIs, SDK’s and JSON data with front-end UI Components was challenging!

## Accomplishments that we're proud of ✨
We are proud of finishing the project on time which seemed like a tough task as we started working on it quite late due to other commitments and were also able to add most of the features that we envisioned for the app during ideation. Moreover, we learned a lot about new web technologies and libraries that we could incorporate into our project to meet our unique needs. And as always, working overnight was pretty fun! :)

This project was especially an achievement for us because this time the experience was very different than what we have while building typical hackathon projects, which also includes heavy brainstorming, extensive research, and yes, hitting the final pin on the board.

## What we learned 🙌
**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon :)

## What's next for Shakespare 🚀
We want to modify **Stripe’s API** call so that every time the user hits the target amount they’ve set, a transaction automatically goes through. We were not sure if implementing this would be a good idea in our **MVP** since we believe we need to talk to potential users before we add such a feature.
 
**Note ⚠️ — API credentials have been revoked. If you want to run the same on your local, use your own credentials.**
