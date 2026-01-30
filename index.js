import express from 'express'

const PORT = process.env.PORT ?? 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello From The Server! level-------1 WOO');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} V1`);
});

