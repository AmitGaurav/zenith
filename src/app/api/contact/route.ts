import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body as {
      name: string;
      email: string;
      phone: string;
      service?: string;
      budget?: string;
      message?: string;
    };

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Zenith Dwellings Website <onboarding@resend.dev>",
      to: ["18threaltypune@gmail.com", "aniketjha018@gmail.com"],
      replyTo: email,
      subject: `New Enquiry from ${name} — Zenith Dwellings`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#0F1C3F;padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:3px;">ZENITH</h1>
            <p style="margin:5px 0 0;color:#C9962C;font-size:11px;letter-spacing:3px;text-transform:uppercase;">Dwellings &amp; Properties</p>
          </td>
        </tr>

        <!-- Gold banner -->
        <tr>
          <td style="background:#C9962C;padding:13px 32px;text-align:center;">
            <p style="margin:0;color:#ffffff;font-size:13px;font-weight:700;letter-spacing:0.5px;">
              📩&nbsp; New Enquiry Received from Website
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px;color:#666;font-size:14px;line-height:1.7;">
              Hello Aniket, a new customer enquiry has been submitted via
              <strong style="color:#0F1C3F;">zenithdwellings.in</strong>.
              All details are below — click <strong>Reply to Customer</strong> to respond directly.
            </p>

            <!-- Details table -->
            <table width="100%" cellpadding="0" cellspacing="0"
              style="border:1px solid #e8ecf0;border-radius:12px;overflow:hidden;margin-bottom:20px;">
              <tr style="background:#f8fafc;">
                <td style="padding:14px 20px;font-size:12px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;width:36%;border-bottom:1px solid #f0f0f0;">
                  👤 Full Name
                </td>
                <td style="padding:14px 20px;font-size:14px;color:#0F1C3F;font-weight:700;border-bottom:1px solid #f0f0f0;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;font-size:12px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #f0f0f0;">
                  📧 Email
                </td>
                <td style="padding:14px 20px;font-size:14px;color:#0F1C3F;font-weight:700;border-bottom:1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="color:#C9962C;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr style="background:#f8fafc;">
                <td style="padding:14px 20px;font-size:12px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #f0f0f0;">
                  📞 Phone
                </td>
                <td style="padding:14px 20px;font-size:14px;color:#0F1C3F;font-weight:700;border-bottom:1px solid #f0f0f0;">
                  <a href="tel:${phone.replace(/\s/g, "")}" style="color:#C9962C;text-decoration:none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;font-size:12px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #f0f0f0;">
                  🏠 Interested In
                </td>
                <td style="padding:14px 20px;font-size:14px;color:#0F1C3F;font-weight:700;border-bottom:1px solid #f0f0f0;">
                  ${service || "<span style='color:#aaa;font-weight:400;'>Not specified</span>"}
                </td>
              </tr>
              <tr style="background:#f8fafc;">
                <td style="padding:14px 20px;font-size:12px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">
                  💰 Budget
                </td>
                <td style="padding:14px 20px;font-size:14px;color:#0F1C3F;font-weight:700;">
                  ${budget || "<span style='color:#aaa;font-weight:400;'>Not specified</span>"}
                </td>
              </tr>
            </table>

            <!-- Message block -->
            ${
              message
                ? `<div style="background:#f8fafc;border-left:4px solid #C9962C;border-radius:0 10px 10px 0;padding:18px 22px;margin-bottom:28px;">
              <p style="margin:0 0 8px;font-size:11px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                💬 Message from Customer
              </p>
              <p style="margin:0;font-size:14px;color:#1a2f5e;line-height:1.8;">${message}</p>
            </div>`
                : ""
            }

            <!-- Reply CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="mailto:${email}?subject=Re: Your property enquiry — Zenith Dwellings&body=Dear ${name},%0A%0AThank you for reaching out to Zenith Dwellings and Properties.%0A%0A"
                    style="display:inline-block;background:#0F1C3F;color:#ffffff;text-decoration:none;
                    font-size:14px;font-weight:700;padding:15px 36px;border-radius:10px;letter-spacing:0.5px;">
                    ✉️ &nbsp;Reply to ${name}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #eee;padding:22px 32px;text-align:center;">
            <p style="margin:0 0 4px;font-size:12px;color:#0F1C3F;font-weight:700;">
              Zenith Dwellings and Properties Pvt. Ltd.
            </p>
            <p style="margin:0;font-size:11px;color:#aaa;line-height:1.8;">
              Pune, Maharashtra · MahaRERA Reg. No. A52100040714<br/>
              18threaltypune@gmail.com · +91 95183 10067
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API] Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
