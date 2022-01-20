# To Do-ify 

### A To Do Main done in the style of 'Kanban boards' 
An assignment from [The Odin Project](https://www.theodinproject.com/)

### Update:
##### A complete rebuild of project has been done using:
  - React (useReducer and useContext hooks)
  - Firebase:
    - Firestore Database
    - Authentication via Google Auth. provider
  - TypeScript
  - Styled Components

### Functionality:
- Create and store a list of To Do items sorted by project, then status
- Option to choose Firebase to store your data in the could or ```localStorage```
- Persistence on both storage options
- Preform CRUD operations on To Dos

### Things I learned:
- TypeScript interface shapes & TypeScript best practices
- Styled component Global styles
- React Hooks: ```useContext``` and `useReducer` to provide global state store
- Firestore integration as a backend or BaaS (Backend as a service)
- Firebase Google authentication to easily allow users access to their unique data


#### Things I learned on first iteration:
- Public field declarations for code readability
- OOP Principles
- SOLID Design
- Color Palette design 
- Deep Cloning Objects when calling them back into application from ```localStorage```
- The benefits / downsides of 'deep' vs 'shallow' cloning
- Troubleshooting ```localStorage``` array objects as they can get inverted when being written to memory
- Compartmentalization and the use of 'handler' functions to separate code functionality

#### First iteration designed to learn and practice:
- OOP Principles
- SOLID principles
- ES6 Modules
- Dynamic Updating of ```localStorage``` both read and write
