const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));
// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/////========ROUTES========////
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
app.get('/academics', (req, res) => {
    res.sendFile(__dirname + '/views/academics.html');
});
//============ TRANSPORTING SUBMISSION TO GMAIL=============//

app.post('/send', async(req, res) => {


    const output = ` 

        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
          <li>Parent Name: ${req.body.parentName}</li>
          <li>Parent Contact: ${req.body.parentContact}</li>
          <li>Email: ${req.body.email}</li>
          <li>Student Name: ${req.body.childName}</li>
          <li>Student Grade: ${req.body.class}</li>
          <li>Interview Date: ${req.body.date}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;
    console.log(output);


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false,
        port: 587,
        requireTLS: true,
        auth: {
            user: 'eddyhiuhu@gmail.com',
            pass: ''
        },
        tls: {
            rejectUnauthorized: false
        },
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: `${ req.body.email }`,
        to: 'eddyhiuhu@gmail.com',
        subject: `${req.body.parentName}`,
        text: `${req.body.message}`,
        html: output
    };

    // send mail with defined transport object
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.sendFile(__dirname + '/views/success.html');
    });
});

app.listen(5000, () => console.log('Server started...'));