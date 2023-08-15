WEB103 Prework - Creatorverse
Submitted by: Zakariya Ahmed

About this web app: Creatorverse is a web application designed to empower users to feature their favored creators. Users are enabled to include creators, along with their names, descriptions, at minimum one social media link, and an optional image. Additionally, users possess the capability to modify or remove creators as required. Each creator possesses an exclusive profile link, and the main page seamlessly displays all creators as cohesive cards. The application's backend is supported by Supabase, while the frontend aesthetics are crafted through the utilization of Picocss.

Time spent: **👉🏿 72** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

 List anything else that you added to improve the site's functionality!
The following additional features are implemented:

- [x] Dynamic Light and Dark Themes utilizing Pico.css variables, managed with React's state management. Gif of dynamic theme toggle
 Form validation with intuitive UI feedback to ensure that only valid data is submitted to the database, promoting data integrity and user experience. The form checks whether the user has submitted the required information (name, description, and at least one social media link), provides feedback with error syntax and highlighting, and won't allow submission until valid inputs are entered.
- [x] Responsive Web Design. My project features a fixed Navbar positioned at the top. To achieve this layout, I utilized React's useRef() hook to dynamically calculate the Navbar's height, which varies based on Pico.css's responsiveness. This calculation allowed me to offset the body content, ensuring it appears directly beneath the Navbar, providing a visually harmonious and user-friendly browsing experience.
- [x] Refresh creators every render of homepage to fetch most recent changes. The first fetch to View All Content Creators occurs in App.js, which renders only once per refresh. However, to achieve real-time data updates, I positioned a component slightly further down the component tree to handle data refreshes, enabling the continuous fetching of new data and seamless display of up-to-date content to the users.
- [x] Implemented React's ContextAPI to effectively manage the data fetched from Supabase. Using ContextAPI, I established a streamlined flow of data throughout the component tree structure, promoting a cleaner and more organized data management approach. This not only facilitates better data accessibility but also mitigates redundant API calls, preventing unnecessary rerenders.
- [x] Loading pages during API calls. Users are presented with visual feedback, a loading spinner, while waiting for data to be fetched from the API. Additionally, I integrated error pages to gracefully handle scenarios where API requests fail or no data is available. For example, when the user tries to visit the url "/view/x" where x is the ID of a creator that does not exist.
- [x] Modal to confirm the deletion of a creator. When a user initiates the deletion action, the Modal dialog appears, prompting them to confirm their decision.
 React Icons Library for icon assets. I leveraged the library to incorporate a wide range of visually appealing and scalable icons.
 Added a larger variety of social media links. Users can add a creator's Twitch, Instagram, YouTube, Tiktok, and Twitter links.
Video Walkthrough
Here's a walkthrough of implemented required features:

Gif walkthrough of website
![WalkthroughGif](https://github.com/Zakariya-1221/Creatorverse/assets/78823493/b910347b-ccc3-4e13-885e-3f9c651b675b)


GIF created with ScreenToGif

License
Copyright 2023 Zakariya Ahmed

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

