import express from 'express';
import storage from './memory_storage.js';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors());


//početna
app.get('/', (req, res) => {
    res.json('Welcome to TourMeIn');
});

app.get('/users', (reg, res) => {
    res.json({});
});

app.post('/users', (reg, res) => {
    res.json({});
});

app.get('/notifications/currentuser', (reg, res) => {
    res.json({});
});

app.post('/notifications/currentuser', (reg, res) => {
    res.json({});
});

app.get('/messages/currentuser', (reg, res) => {
    res.json({});
});

app.post('/messages/currentuser', (reg, res) => {
    res.json({});
});

app.get('/events', (reg, res) => {
    res.json({});
});

app.post('/events', (reg, res) => {
    res.json({});
});

app.get('/previousTours', (reg, res) => {
    res.json({});
});

app.get('/previousGuides', (reg, res) => {
    res.json({});
});

app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));
