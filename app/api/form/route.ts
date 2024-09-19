import { NextResponse } from "next/server"
import { Resend } from "resend";

export const POST = async (req: Request) => {
  try{
    const { formData } = await req.json()
    const { firstname, lastname, message, email, contact, service } = formData
    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: `Website Contact Us <reg@regtables.com>`,
      to: ['info@corporatewellness.co.za'],
      subject: `New Website Contact Us Message from ${firstname} ${lastname}`,
      html: `<p>Hello Amanda,</p>
      <p>You recieved a new message from ${firstname} ${lastname}:</p>
      <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">${message}</p>
      <p>Their contact details are:</p>
      <p><strong>Email:&nbsp;</strong>${email}</p>
      <p><strong>Phone Number:</strong> ${contact}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p>Best wishes</p>`
    });
    return NextResponse.json({ }, { status: 200 })
  } catch (error){
    console.log(error)
    return NextResponse.json({ error }, { status: 500 })
  }
}