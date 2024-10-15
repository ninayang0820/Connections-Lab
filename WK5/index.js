// Load the express module
const express = require('express');
const app = express();

// Serve the static HTML page for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Create JSON data with 10 objects
const projects = [
    { id: 1, title: 'Project A', description: 'A web development project', year: 2022 },
    { id: 2, title: 'Project B', description: 'A mobile app project', year: 2023 },
    { id: 3, title: 'Project C', description: 'A machine learning project', year: 2024 },
    { id: 4, title: 'Project D', description: 'An AI chatbot project', year: 2023 },
    { id: 5, title: 'Project E', description: 'A game development project', year: 2022 },
    { id: 6, title: 'Project F', description: 'A data analysis project', year: 2021 },
    { id: 7, title: 'Project G', description: 'A blockchain project', year: 2023 },
    { id: 8, title: 'Project H', description: 'A cloud computing project', year: 2024 },
    { id: 9, title: 'Project I', description: 'An IoT project', year: 2023 },
    { id: 10, title: 'Project J', description: 'A cybersecurity project', year: 2022 }
];

// Serve JSON data on the /data route
app.get('/data', (req, res) => {
    res.json(projects);
});

// Serve dynamic data using a path parameter on /data/:id route
app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);  // Get the ID from the URL
    const project = projects.find(proj => proj.id === id);  // Find the project with matching ID

    if (project) {
        res.json(project);
    } else {
        res.status(404).send({ error: 'Project not found' });
    }
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
