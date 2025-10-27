const nodemailer = require('nodemailer');

const sendmail = async(to,sub,msg) =>{
  try {
    let transport = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:"rohitnishad123467@gmail.com",
        pass:"uskumlvpoybkgdwn"
      }
    });
    await transport.sendMail({
      from:"HealthNexus",
      to,
      sub,
      text:msg
    });
    console.log("Mail send Success")
  } catch (error) {
    console.log("Error during Send Mail",error)
  }
}

module.exports = sendmail