var pool = require("../db/db")
var nodemailer = require('nodemailer');

module.exports = {

    sendMail (req, res) {

        //step 1 (get authenticated)
        let transporter = nodemailer.createTransport({
            service: 'yandex',
            auth: {
                user: 'test.blade@yandex.com',
                pass: '$oumitra1'
            }
        });

        var mailData = '<div style="font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;"></div><p style = "font-size: 30px;" > Dear admin,</p ><p style="font-size: 20px; margin-left:50px; margin-top:0px">someone wants to contact you from avona site\'s contact page</p><div style="margin-left: 100px;"><p style="font-size: 18px;"><u>Details are</u></p>';
        mailData += '<p style="font-size: 18px;">Name : &nbsp;&nbsp;&nbsp;' + req.body.name + ' </p>';
        mailData += '<p style="font-size: 18px;">Email : &nbsp;&nbsp;&nbsp;' + req.body.email + '</p>';
        mailData += '<p style="font-size: 18px;">Message : &nbsp;&nbsp;&nbsp;' + req.body.message + '</p>';
        mailData += '</div ><p><br></p><p style="text-align: right;">Regards , &nbsp;&nbsp;&nbsp; ';
        mailData += req.body.name + '</p></div>';

        // Step 2 (composing mail)
        let mailOptions = {
            from: 'test.blade@yandex.com', // TODO: email sender
            to: 'soumitra.kus@gmail.com', // TODO: email receiver deepak09@gmail.com
            subject: req.body.name,
            html: mailData
        };

        // Step 3 (sending mail)
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                res.send("err " + err);
            }
            else {
                res.send("Mail sent successfully");
            }
        });
    }
}