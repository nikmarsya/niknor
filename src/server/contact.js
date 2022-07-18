
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "niknor.upm@gmail.com",
      pass: "mquvxewjdhlipupb"
    }
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    const mail = {
        from: name,
        to: "niknor.upm@gmail.com",
        subject: "Contact Form Submission",
        html: ` <p> ${message} </p>`,
      };
      contactEmail.sendMail(mail, (error) => {
        if (error) {
          res.json({ status: "ERROR" });
        } else {
          res.json({ status: "Message Sent" });
        }
      });
res.status(200)

    
