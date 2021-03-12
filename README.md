# PROJECT CATWALK

### INDEX

**1. Summary**
**2. Installation**
**3. Getting Started**
**4. Module descriptions**
**5. Running the Tests**
**6. Authors**
**7. License**
**8. Acknowledgments**


## Summary
  Project Catwalk is an ecommerce, retail-centric website application. It updates our companies outdated, retail portal with a modernized, React-based client running on a lean express server. The application organizes and serves information regarding product details, related products, user looks, product question and anwers, and product reviews, as well as a product search feature.

### Installation
###### Pre-Installation Requirements
    Node v14.15.1
    NPM v6.14.11
###### Instructions
  - After cloning this repo, open your CLI within the root directory of this project and run 'npm install'.
  - Acquire a github personal access token for access to our API. Create a file in the root project directory named 'authorization.config.js'.
  Copy and paste the following code into the newly created file:
    module.exports = {
      token: <YOUR_TOKEN>
    };
  - Run 'npm react-dev' to bundle webpack. Webpack will watch for code changes automatically.

### Getting Started
  To run the server locally on your machine, run 'npm start' within the root directory.
  The server runs on PORT 3000 by default. Navigate to http://localhost:3000 to view the client.

## Module Descriptions

### Product Details
In this component, a user can view a product, select through different assortments, and view different accessories. Features include:
- Right and left arrows to change primary product photo
- Scrolling sidebars to view everything the search option has to offer
- An optional full screen version of the primary product photo on click of full screen button
- On click of a photo renders a 1.5x bigger view
- Selections of different colors by click of a button.
- Ratings functionality with stars.
- On click of button to choose a size
- The product details and slogan
- A Checkout button


### Related Products and User Looks
  Related Products Provides a list of scrollable cards that we think a user would be interested in. The component includes:
  - A table for comparing a related product to the current primary product. The table lists characterstics shared and unique to both products and is availble within a model on click.
  - A carousel of cards that move left and right on arrow clicks. Cards will scroll the exact width of a product card. Arrows will not display if not needed
  - A gallery of all product styles images available on hover of a card. These thumbnails will update the larger product card image on click.

  User Looks Prodives a Space for a user to save items to a carousel list of cards that persists through their session. Features include:
  - A card that adds a currently viewed product to the carousel on click
  - A delete card icon that removes a card from looks and the session on click
  - On page refresh, a user's looks will persists until the tab or window is closed.

### Product Questions and Answers
The QA component allows a user to read and add questions and answers from other users for the selected product. Features include:
- Submitting a question/answer
- Containment of answers to question to scrollable div
- Ability to search for questions
- Mark answers/questions helpful
- Report inappropriate questions/answers

### Product Reviews

## Running The Tests
  To run jest tests that cover the entire project, run 'npm test' in the root dir.

## Authors
  * Connie Tsai - Question and Answers, Scrum Master
  * Michael Smith - Related Products and User Looks
  * Daniel Kosykh - Product Reviews
  * Liem Nguyen - Product Details

## License
  This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgements
  We'd like to express our deepest gratitude to Rob Lopez and Maia Ling for their feedback on this project.

  Additional Thanks To:


