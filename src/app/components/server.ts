// src/server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/create-email', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Email data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
