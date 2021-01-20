# Select Component

## Usage

```
yarn install
yarn storybook
```

## Technologies Used

- React Typescript
- Hooks
- Storybook
- Styled-Components
- ESLint / Prettier
  
## Functionalities

- Render a list of the currently selected spices in-line with the cursor for adding new spices
- Each currently selected spice can be removed from the list by clicking the 'x'
- As a user types into the input, display a list of suggested spices
- The component must have at least the following props:
  - value: an array of strings representing the currently selected spices
  - onChange: a function which will fire any time 'value' changes
- If the user presses 'enter' while typing:
  - If there are any suggested spices, add the first one fo the list of selected spices
    - Otherwise, add a new selected spice whose value is the entire string that the user typed (allow users to add spices which are not on the list)
  - Clear out the typed text

- If the user clicks on one of the suggestions, add it to the list of selected spices and clear out the typed text
- If a user hits 'backspace':
  - If the input is not selected, don't do anything
  - If there is text that was typed by the user, backspace should behave normally (deleting any selected text, or the character immediately to the left of the cursor)
  - If there is no text that was typed by the user, remove the most recently added selected spice from the list of selected spices
  - If there are no selected spices, do nothing

### Note:

- If a user hits 'ESC', it removes typed text from the input.
- debounced keyword input event to improve search performance (should query the API in the real world)
- Optimized All components using hooks and memo.

### Possible Improvements
- Write unit test/e2e test using jest/RTL and Cypress
