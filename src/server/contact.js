const nodemailer = require("nodemailer")

export default function (req, res) {
    
    const contactEmail = nodemailer.createTransport(
        {
            port:465,
            service:'gmail',
            auth:{user:'niknor.upm@gmail.com',pass:'#abcd123'}
        }
        )
    console.log(req.body)
  }