import { NextRequest, NextResponse } from "next/server";
import mail, { MailDataRequired } from "@sendgrid/mail";

const SENDGRID_KEY : string = process.env.SENDGRID_KEY!;

mail.setApiKey(SENDGRID_KEY);

const mailTo : string = "david@ip-four.co.uk";
const mailFrom : string = "david.charles@addmustard.com";
const mailSubject : string = "subject subject";

const POST : (request : NextRequest) => Promise<NextResponse> = async (request) => {
    const body = await request.json();
    const message : string = `
        Name : ${ body.name }\r\n
        Email : ${ body.email }\r\n
        Message : ${ body.message }
    `;
    const data : MailDataRequired = await {
        to : mailTo,
        from : body.email,
        subject : mailSubject,
        text : message,
        html : message.replace(/\r\n/g, "<br />")
    };

    try {
       await mail.send(data);

        return NextResponse.json(data);

    } catch(error : any) {
        console.log(error);
        
        if (error.response) {
            console.error(error.response.body)
        }
        
        return NextResponse.json({ status : "error" });

    }
};
  
export { POST };