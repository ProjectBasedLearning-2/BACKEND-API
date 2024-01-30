const accountSid = "AC10395edccacdd0aa44adaee19dxxxx";
const authToken = "bec2984999f285b8e2de250507a1xxxx";

const client = require('twilio')(accountSid, authToken);
const sendSMS = async (body)=>{
    let msgOptions = {
        from: '+18644281xxx',
        to: '+918830551xxx',
        body
    }
    try{
        const message = await client.messages.create(msgOptions);
        console.log(message);
    }catch(error){
        console.log(error);
    }
}
const x = 660;
if(x<600)
{
    sendSMS("Good Morning");
}
else
{
    sendSMS("Bad Morning")
}
