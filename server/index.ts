import express from 'express';
const router = express.Router();
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jngknight@gmail.com',
    pass: 'PillowPant5',
  },
});

contactEmail.verify((error: any) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});


