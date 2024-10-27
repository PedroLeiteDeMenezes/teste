import express from 'express';

const app = express();
const PORT = 3333;

app.get('/', (request:any, response:any) => {
    return response.json({ message: 'Hello World' })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    
});
