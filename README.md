# MERN Stack Gallery

## Description

This MERN stack (MongoDB, Express.js, React, Node.js) blog application is a full-stack project consisting of both frontend and backend components. The primary goal of this project is to implement the knowledge acquired from Fazt's videos and research through documentation on the MERN stack.

### Backend

The backend of the application is built using Node.js and Express.js, with MongoDB serving as the database. The backend is responsible for storing blog post data in the MongoDB Atlas database. Each blog post includes a title, description, and an optional image. The application utilizes Cloudinary as a service to store and manage images associated with the blog posts, extracting the image's URL, which is then stored in the database. The backend provides API endpoints supporting CRUD operations (Create, Read, Update, Delete) for interacting with the blog posts.

### Frontend

The frontend is developed using React and communicates with the backend to fetch and display blog posts. The posts are presented in card format, offering a visually appealing layout. The application features routing to navigate between different sections, allowing users to create new blog posts or modify existing ones.

### Deployment

The project is deployed on the Railway platform, making it accessible at [mern-stack-gallery](https://mern-stack-gallery-production.up.railway.app).

## Features

- **Backend (Node.js, Express, MongoDB):**
  - Stores posts in a MongoDB database at MongoBD Atlas.
  - Uses Cloudinary to manage and store images associated with posts.
  - Provides an API for CRUD operations on posts.

- **Frontend (React):**
  - Displays posts in the form of cards.
  - Allows creation and modification of posts.
  - Uses routes for navigation between different sections of the application.

## API Endpoints

- **GET https://mern-stack-gallery-production.up.railway.app/posts** Retrieve all posts.
- **GET https://mern-stack-gallery-production.up.railway.app/posts/:id** Retrieve a specific post by ID.
- **POST https://mern-stack-gallery-production.up.railway.app/posts** Create a new post.
- **PUT https://mern-stack-gallery-production.up.railway.app/posts/:id** Update an existing post.
- **DELETE https://mern-stack-gallery-production.up.railway.app/posts/:id** Delete a post.

## Screenshots

![Screenshot 1](/assets/ss1.jpg)
![Screenshot 2](/assets/ss2.jpg)
![Screenshot 2](/assets/ss3.jpg)

## License

This project is under the [MIT License](LICENSE).

## Contact

If you have questions or comments, feel free to contact me at [leonel.iracheta@gmail.com](mailto:leonel.iracheta@gmail.com) or through my [GitHub profile](https://github.com/LeonelIracheta).