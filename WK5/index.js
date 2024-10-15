// Load the express module
const express = require('express');
const app = express();

// Serve the static HTML page for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Create JSON data with 10 objects
const museumArtworks = [
    {
        title: "Starry Night",
        artist: "Vincent van Gogh",
        year: 1889,
        medium: "Oil on canvas",
        museum: "Museum of Modern Art, New York"
    },
    {
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: 1931,
        medium: "Oil on canvas",
        museum: "Museum of Modern Art, New York"
    },
    {
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: 1503,
        medium: "Oil on poplar panel",
        museum: "Louvre Museum, Paris"
    },
    {
        title: "The Scream",
        artist: "Edvard Munch",
        year: 1893,
        medium: "Oil on canvas",
        museum: "National Gallery, Oslo"
    },
    {
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: 1665,
        medium: "Oil on canvas",
        museum: "Mauritshuis, The Hague"
    },
    {
        title: "The Night Watch",
        artist: "Rembrandt van Rijn",
        year: 1642,
        medium: "Oil on canvas",
        museum: "Rijksmuseum, Amsterdam"
    },
    {
        title: "The Kiss",
        artist: "Gustav Klimt",
        year: 1907,
        medium: "Oil on canvas",
        museum: "Belvedere, Vienna"
    },
    {
        title: "Water Lilies",
        artist: "Claude Monet",
        year: 1919,
        medium: "Oil on canvas",
        museum: "Musée de l'Orangerie, Paris"
    },
    {
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: 1484,
        medium: "Tempera on canvas",
        museum: "Uffizi Gallery, Florence"
    },
    {
        title: "American Gothic",
        artist: "Grant Wood",
        year: 1930,
        medium: "Oil on beaver board",
        museum: "Art Institute of Chicago"
    }
];

// Serve JSON data on the /data route
app.get('/data', (req, res) => {
    res.json(museumArtworks);
});

// Serve dynamic data using a path parameter on /data/:artist route
app.get('/data/:artist', (req, res) => {
    const artist = req.params.artist;
    const museumArtwork = museumArtworks.find(art => art.artist.indexOf(artist) >= 0);
    if (museumArtwork) {
        res.json(museumArtwork);
    } else {
        res.status(404).send({ error: 'artist not found' });
    }
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
