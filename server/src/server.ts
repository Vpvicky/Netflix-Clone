import express, { Request, Response } from 'express';

import mongoose from 'mongoose';
const uri = "mongodb+srv://vicky:vicky1997@cluster0.lt47s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
const PORT = 3003;

// Middleware to parse JSON
app.use(express.json());

// DB Connection
mongoose.connect(uri, {

}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});