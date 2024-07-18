# LinkedOut Assessment

![LinkedOut](https://cdn.dribbble.com/users/4212149/screenshots/9328993/dribbble_shot-01_4x.jpg)

## 1. Introduction:

- Hello, it's Jason! As of now, I was introduced to the task of building a LinkedIn clone ala "LinkedOut" using the provided tools (NextJS 14, Tailwind CSS, Prisma, SQLite, and shadcn/ui) along with any other dependencies necessary. My goal is not to build the next social media engine but to really drill down on what it means to be a "Founding Fullstack Engineer" - from when to be "scrappy" and pushing out consistent code to underlining strategic decisions for the current MVP in a short time span.

## 2. Features Selection:

- In my process for selecting the features to build, I decided to prioritize the "Feed" and "Network" features, more specifically the user feed and chat.

    1. These features are important for users as LinkedIn as a platform highly values user interaction and engagement with a large emphasis on visual appeal and user-centric design.

    2. They align with the goals of Linkedin which not only delivers valuable content but fosters meaningful meaningful conversations and collaborations among its entire user base.

    3. Being time-sensitive and being given slightly more than a week, I wanted to prioritize these features as I felt they were essential to the existing app without having to add more bells and whistles.


## 3. What I Decided Not to Build:

- I opted not to pursue features such as "Jobs," "My Network," "Profile," and "Notifications" as implementing them would have expanded the project scope significantly. My decision was based on prioritizing the most commonly used features and focusing on the initial user experience.

## 4. Technical Decisions and Approach:

- **User-Centric Design Focus:** I specifically focused on the front-end aspects of this project as it is the first thing a user will experience. Prioritizing front-end work allows for shipping code extremely quickly in terms of immediate improvements in usability, aesthetics, and overall user satisfaction. Not only are we already targeting the major source - the first point of user interaction - we're also lending ourselves to a process leading to increased engagement and retention once we address our users and move forth. While back-end functionalities are actually equally important, I decided to step in this direction as the provided repository narrowed the scope to frontend work initially.

- **Adherence to Selected Technologies:** Throughout the development process, I adhered closely to the chosen technologies, ensuring minimal deviation from the established stack. One notable instance of this was the integration of the Prisma ORM with SQLite to seed post, chat, and recommendation data, which were initially hardcoded into the components. This strategic decision enabled the seamless incorporation of essential data into the application architecture without introducing additional complexity or dependencies. By leveraging semi-seeded data, I successfully generated posts and observed real-time updates in the feed as new content was dynamically rendered, marking a significant advancement in the project's functionality. This approach not only maintained consistency within the established technology stack but also facilitated a deeper understanding and optimization of the codebase, leading to more efficient development practices and enhanced project outcomes.

- **Utilization of Open-Source Components:** To start off, I chose to focus on connecting and rendering components most dear to the features of Linkedin. Using open-source shadcn/ui components from a ambiguously licensed project with permission, I was quickly able to create an essential and critical starting point for the take-home. Not only was this ethical and resourceful, but it can lead to lots of time, talent, and energy saved in the software development process, especially when there's already stable solutions readily available. With this implementation already finished, I was able to reduce 38 files in the original repo to 12 total UI components for shadcn/ui, reducing code complexity and debugging time. In addition, splitting the original /app components into separate directories - Aside, Chat, Feed, Header, Postcard, Sidebar - increased interoperability of these separate modules and allowed me to visualize their role in the scheme of the LinkedOut platform.
 
- **Integration of Third-Party APIs:** While the original repo had a very nice chat component, it was on me to implement chat functionality within LinkedOut on top of just building a frontend. Given that I had two more days to complete the tasks, I integrated TalkJS, a powerful messaging API which helped me to simulate real-time communication between the seeded users within my database. Not only does this addition expand LinkedOut's features beyond the provided stack, it enriches the user experience with neat 3rd-party tools that extend interactive messaging features. 

- **Emphasis on Code Modularity and Readability:** Last but not least was the modularization of my codebase. While I was not necessarily reusing my React components throughout, I made it very accessible to constantly tweak my files without fear of errors propagating into the next components. Each component in my application would stand for a single, independent piece of feasibility but it would also be combined to make one cohesive feature. Doing this is not only beneficial towards my programming workflow, but it can prove essential to working in teams in the near future. Code readability is quite essential to software development and I wanted to make that paramount to this project. Splitting components into smaller components also made it very easy to manually test the parts by themselves instead of prying over details in a lengthy file. 

## 5. What I Would Do Next: 

1. **CRUD Functionality:** In an ideal scenario, I would've loved to do CRUD database operations for feed posts which allows users to enhance their ability to share and manage information within the LinkedOut community. On top of this, allowing the users to instantly see immediate changes reflected in their feed would make for an amazing experience. 

2. **Feed Sorting and Comment Functionality:** Introducing feed sorting options, such as sorting posts by relevance, date, or engagement metrics, would enhance user engagement by presenting content in a more personalized and meaningful way. Furthermore, implementing comment functionality would facilitate richer interactions among users, allowing them to engage in discussions, provide feedback, and collaborate on ideas directly within the feed.

3. **Automated Database Testing:** Implementing automated database testing using tools like Faker.js would enhance the reliability and stability of the LinkedOut platform. By generating realistic test data and automating test scenarios, this would ensure comprehensive test coverage and early detection of potential issues. 

4. **Anything That Hasn't Come Up to the Top of My Mind:** Development is ongoing and so am I. The second I made commit messages for [feature], [fix], and [backlog], I would immediately forget the next implementation I had in mind. Being a developer means I'm continuously iterating on my previous attempts and making the product more refined and complete every step of the way. Continuous learning and lifelong commitment to the field will steer the mindset towards progress given any circumstance. 

## 6. Areas for Improvement:

**Integration Challenges:** One significant challenge I encountered during implementation was integrating the Prisma ORM with SQLite to seed post data. Initially, I faced difficulties configuring Prisma to work seamlessly with SQLite and initiating the seeding process with given commands. To overcome this challenge, I extensively researched Prisma's documentation and experimented with different configurations until I found the optimal setup. This involved adjusting Prisma's schema and migration settings to align with SQLite's requirements and writing custom seed scripts to populate the database with realistic post data.

**Addressing Asks:** Upon reflection, I recognize that while I successfully seeded all users using a for loop, I encountered a limitation where only a single chat session was created with one user. This oversight led to a lack of thoroughness in demonstrating my skills, particularly in implementing core features such as creating posts and initiating chat conversations. Despite making significant progress in integrating third-party APIs like TalkJS for chat functionality, this specific aspect of the implementation could have been further refined. Moving forward, I plan to revisit the chat functionality to address this limitation and ensure that multiple chat sessions can be initiated between users. By refining this aspect of the implementation, I aim to meet the high standards expected of a founding full-stack engineer and deliver a more comprehensive and polished user experience within the LinkedOut platform.

## 7. Credit 

In the short amount of time, I was able to receive consent from fellow open-source developer [ozgurrgul](https://github.com/ozgurrgul/) for their [LinkedIn clone repository](https://github.com/ozgurrgul/linkedin-clone) created. This shows that I can acknowledge my source of inspiration and uphold ethical standards in development practices. The additional case for using the resource was influenced by how the developer's stack had already encompassed the tools specified to code this platform to begin with (e.g. Next.js and shadcn/ui) - I had not previously seen in myriads of other similar Linkedin clones.