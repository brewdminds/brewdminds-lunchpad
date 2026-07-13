export type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #ede0d3;">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#a64b2e;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(label)}</p>
        <p style="margin:4px 0 0;font-size:15px;line-height:1.5;color:#333333;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(value)}</p>
      </td>
    </tr>`;
}

/** Renders the "new contact enquiry" notification email as a self-contained HTML string (inline styles — email clients don't support external CSS). */
export function renderContactEmailHtml(fields: ContactFormFields): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New enquiry — Brewdminds</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4eae1;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4eae1;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background-color:#c65d3a;padding:28px 32px;">
                <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
                  Brewd<span style="color:#f4eae1;">minds</span>
                </p>
                <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.85);font-family:Arial,Helvetica,sans-serif;">
                  New enquiry from your website
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", fields.name)}
                  ${row("Email", fields.email)}
                  ${row("Phone", fields.phone)}
                  ${row("Company", fields.company)}
                  ${row("Service of interest", fields.service)}
                </table>
                <p style="margin:20px 0 6px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#a64b2e;font-family:Arial,Helvetica,sans-serif;">
                  Message
                </p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#333333;white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(fields.message)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px;background-color:#f4eae1;">
                <p style="margin:0;font-size:12px;color:#7a7a7a;font-family:Arial,Helvetica,sans-serif;">
                  Sent from the contact form at brewdminds.com
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
