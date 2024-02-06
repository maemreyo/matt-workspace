# DigitalHQ

- **Application**: ...
- **Tech stacks**: React, TypeScript, ChatGPT and AWS Amplify

## Planning

### What are we building?

- We will be building an application that allows users
  - Create a project
  - Show a chat history with the ChatGPT
  - Show `mermaid js` syntax
  - Show `mermaid js` output (diagram)
  - Allow users to talking to to ChatGPT about any specific project, if they asked for a diagram, make sure that the ChatGPT generates the output; after that update the `mermaid` syntax and diagram.

### Application requirements

- Following the functional requirements, we plan to have such functionalities:
  - Create / Edit / Delete a project
  - Save changes to the project
  - Mermaid panel
    - An area for the input syntax
    - An area for showing the output diagram
  - Allow to create / update a `mermaid js` syntax from ChatGPT

### Technical decisions

#### Project structure

- Using a feature-based project structure that allows good feature isolation and good communication between the features.

#### Rendering strategy

- Using the Client-side rendering strategy.

#### State management

- We will using these stuffs to handle the states:
  - **Local state (a single component state)**: *Built-in React hooks*
  - **Global state (shared across multiple components)**: *Redux* or *built-in React Context API*
  - **Form state (form inputs)**: *React Hook Form*

#### Styling

- Using `Material UI` (latest version)
- Using `SCSS`

#### Testing

- Using `Unit Tests` with `Jest`

#### Folder structures

- Folder structure will be like this:
  - **components**: Contains all shared components that are used across the entire application.
  - **config**: Contains the application configuration files.
  - **features**: Contains all the features-based modules.
    - **api**: Contains the API request declarations and API hooks related to a specific feature.
    - **components**: Contains all the components that are scoped to a specific feature.
    - **types**: Contains all the TypeScript type definitions for a specific feature.
    - **index.tsx**: This is the entry point of every feature. It behaves as the public API of the feature, and it should only export things that should be public for other parts of the application
  - **stores**: Contains all global state stores that are used in the application.
  - **testing**: Contains test-related mocks, helpers, utilities and configuration.
  - **types**: Contains base TypeScript type definitions that are used across the application.
  - **utils**: Contains all shared utility functions.

<!-- "amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything -->