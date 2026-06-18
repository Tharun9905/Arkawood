import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple validation helper
const validateEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

const validatePhone = (phone: string) => {
  return /^\d{10}$/.test(phone.replace(/[\s-+]/g, ""));
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      city,
      propertyType,
      projectSize,
      budgetRange,
      startDate,
      message,
    } = body;

    // 1. Inputs validation
    if (!name?.trim()) {
      return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 });
    }
    if (!phone?.trim() || !validatePhone(phone)) {
      return NextResponse.json({ success: false, error: "Valid 10-digit mobile number is required" }, { status: 400 });
    }
    if (email?.trim() && !validateEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email format" }, { status: 400 });
    }

    // 2. Read SMTP environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || "arkainteriors.blr@gmail.com";
    const smtpTo = process.env.SMTP_TO || "arkainteriors.blr@gmail.com";

    console.log("Processing lead for:", name, phone);

    // 3. Compose Email Content
    const emailSubject = `New Luxury Interior Enquiry - ${name} (${propertyType})`;
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #F7F5F0; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; color: #1E120D; border: 1px solid #EFECE6;">
        <div style="text-align: center; border-bottom: 2px solid #C89B5E; padding-bottom: 15px; margin-bottom: 25px;">
          <h2 style="font-family: Georgia, serif; color: #1E120D; margin: 0; font-size: 24px; tracking: 1px;">ARKA WOODTECH INTERIORS</h2>
          <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #7A6D65; margin: 5px 0 0 0;">New Consultation Lead Log</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #7A6D65; width: 40%; font-size: 12px; text-transform: uppercase;">Client Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #7A6D65; font-size: 12px; text-transform: uppercase;">Mobile Number</td>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-size: 14px; font-weight: 600;"><a href="tel:${phone}" style="color: #C89B5E; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #7A6D65; font-size: 12px; text-transform: uppercase;">Email Address</td>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-size: 14px;">${email || "Not Provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #7A6D65; font-size: 12px; text-transform: uppercase;">Location/City</td>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-size: 14px; font-weight: 600;">${city || "Bangalore"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #7A6D65; font-size: 12px; text-transform: uppercase;">Property Type</td>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-size: 14px;">${propertyType || "Not Specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #7A6D65; font-size: 12px; text-transform: uppercase;">Project Area</td>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-size: 14px;">${projectSize ? `${projectSize} Sq.Ft.` : "Not Specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #7A6D65; font-size: 12px; text-transform: uppercase;">Estimated Budget</td>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-size: 14px; color: #C89B5E; font-weight: 600;">${budgetRange || "Not Specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-weight: bold; color: #7A6D65; font-size: 12px; text-transform: uppercase;">Expected Start</td>
            <td style="padding: 10px; border-bottom: 1px solid #EFECE6; font-size: 14px;">${startDate || "Immediate"}</td>
          </tr>
        </table>

        <div style="background-color: #FFFFFF; padding: 15px; border-radius: 6px; border: 1px solid #EFECE6;">
          <h4 style="margin: 0 0 8px 0; color: #7A6D65; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Client Requirements Note:</h4>
          <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #1E120D;">${message || "No requirement message provided."}</p>
        </div>

        <div style="text-align: center; margin-top: 25px; padding-top: 15px; border-top: 1px solid #EFECE6; font-size: 11px; color: #7A6D65;">
          <p style="margin: 0;">Lead generated from Arka WoodTech Interiors Platform.</p>
          <p style="margin: 5px 0 0 0;"><a href="https://wa.me/${phone.replace(/[\s-+]/g, "")}" style="color: #C89B5E; font-weight: bold; text-decoration: none;">Launch Client WhatsApp Chat</a></p>
        </div>
      </div>
    `;

    // 4. Send email if configuration exists
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: smtpTo,
        subject: emailSubject,
        html: emailHtml,
      });

      return NextResponse.json({ success: true, message: "Enquiry logged and notification email dispatched." });
    } else {
      // SMTP configuration is missing, simulate sending and log for validation
      console.warn("TODO(security): SMTP configuration environment variables are missing. Simulating mail send.");
      console.log("Simulated Email Sent To:", smtpTo);
      console.log("Subject:", emailSubject);
      
      return NextResponse.json({
        success: true,
        message: "Enquiry logged successfully (SMTP simulation active).",
        simulation: true
      });
    }
  } catch (err) {
    console.error("Error processing contact api:", err);
    // Return generic error message to user, keeping trace secure
    return NextResponse.json({ success: false, error: "Failed to submit enquiry. Please try again." }, { status: 500 });
  }
}
