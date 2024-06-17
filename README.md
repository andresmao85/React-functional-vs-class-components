# React - Functional vs Class Component Practice

This is a simple React application created as a practice for demonstrate the implementation of a simple age and name input component using both functional and class components in React. This project serves as an example of implementing the same functionality using both functional and class components in React. It can be used as a learning resource or a starting point for building more complex applications. Additionally, it demonstrates the usage of state management and event handling in both component types.

## Features

- Input field to enter the user's name
- Increment and decrement buttons to adjust the age
- Display of the entered name and age in a message

### AgeName Functional component
The AgeNameFunc component is a functional component that uses the useState hook to manage the state variables age and name. It renders an input field for the user's name and a set of buttons to increment or decrement the age. The component displays the entered name and age in a message below.

### AgeName Class component
The AgeNameClass component is a class component that achieves the same functionality as the AgeNameFunc component but uses the class-based approach. It initializes the state variables age and name in the constructor. The component renders an input field for the user's name and a set of buttons to increment or decrement the age. It also displays the entered name and age in a message below.
The class component uses class methods (handleClickAbt, handleClickSum, handleNameChange) to handle the respective events and update the state accordingly.

## Usage

To use the `AgeNameFunc` component, import it into your React application and render it like any other React component:

```jsx
import { AgeNameFunc } from './path/to/AgeNameFunc';

function App() {
  return (
    <div>
      <AgeNameFunc />
      {/* Other components */}
    </div>
  );
}

## Technologies Used

- React
- Vite (for bundling and development server)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
