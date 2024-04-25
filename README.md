# Project Name

## Overview

This project is built using Node.js version 16.14.0 and npm version 8.3.1. It follows a structured folder organization for better maintainability and scalability.

### Folder Structure

src/
|-- assets/
|-- components/
| |-- base/
| |-- [Other component directories]
|-- constants/
|-- router/
|-- services/
| |-- [Service directories]
|-- utils/
|-- views/

- **Assets:** Contains static assets used in the application.
- **Components:** Reusable UI components, with a specific directory for base components, forming the foundation of a design system.
- **Constants:** Stores constant values used throughout the application.
- **Router:** Manages routing within the application.
- **Services:** Separate services with each service having its own directory and hooks. For example, the `tvShow` service includes hooks like `useGetTvShow.ts`, `useGetTvShows.ts`, and `useSearchShow.ts`.
- **Utils:** Contains utility functions used across the application.
- **Views:** Stores view components for different pages or sections of the application.

### Running the Application

To run the application:

1. Ensure you have Node.js version 16.14.0 and npm version 8.3.1 installed.
2. Run `npm install` to install dependencies.
3. Execute `npm run serve` to start the application.

### Planned Enhancements (Out of the time)

Although time limitations prevented the full implementation of these architectural decisions, the following plans were documented for future improvements:

- Writing unit tests to ensure the application displays/calls the right elements and functions as expected, validating the correctness of data processing.
- Implementing types for API responses and storing them in a 'types' folder within the 'src' directory to enhance the application's type safety.
- Improving error handling mechanisms for general errors and request errors to provide a more robust and user-friendly experience.
- Refactoring the folder structure and import paths to improve organization and readability.
- Implementing skeleton loading for images to provide a better user experience during loading times.
- Ensuring all photos are fully loaded before displaying the images to prevent partial rendering and enhance user experience.
- Planning to integrate Husky to enforce code quality standards and run tests before pushing changes, ensuring that all files adhere to the correct format and pass tests before being committed.

Given more time, these enhancements would contribute to the overall quality and reliability of the application.
