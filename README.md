# My Website

Welcome to my personal website project! This repository contains the code for a simple web application that displays blogs, allows adding new blogs, and deleting them. Built with React and powered by a local JSON server, it showcases fundamental concepts like state management, fetching data, and routing.

## Features

- **Display Blogs:** View a list of all blogs with their titles, content, and authors.
- **Add Blogs:** Submit a new blog with a title, body, and author selection.
- **Delete Blogs:** Remove an existing blog from the list.
- **Blog Details:** View detailed content for each blog.
- **Custom Hooks:** Fetch data using a custom React hook (`useFetch`).

## Technologies Used

- **React** - Frontend UI Library
- **React Router** - For routing between pages
- **JSON Server** - Backend for data storage
- **CSS** - Styling the components

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chonghow97/my-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Starting the Application

1. Run the React application:
   ```bash
   npm start
   ```

The app should now be running at `http://localhost:3000`.

## Project Structure

- `src/` - Contains the main React components and custom hooks.
- `data/` - Contains the local JSON file for storing blog data.

## Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request. Contributions and improvements are always welcome.

## License

This project is licensed under the ISC License - see the [LICENSE](./LICENSE) file for details.
