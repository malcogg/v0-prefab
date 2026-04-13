/**
 * Minimal responsive-friendly wrapper (tables + inline styles for clients).
 * Brand green matches site themeColor #0F6E56.
 */
export function emailLayout(options: { title: string; innerHtml: string; preheader?: string }) {
  const preheader = options.preheader
    ? `<span style="display:none;font-size:1px;color:#f4f4f4;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${options.preheader}</span>`
    : ""

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>${options.title}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Georgia,'Times New Roman',serif;">
  ${preheader}
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f4;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background-color:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e5e5;">
          <tr>
            <td style="background-color:#0F6E56;padding:20px 24px;">
              <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;letter-spacing:0.02em;">PreFabricated.co</p>
              <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:0.12em;">Tiny homes &amp; ADUs · Florida</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px 32px;color:#1a1a1a;font-size:15px;line-height:1.55;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
              ${options.innerHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background-color:#fafafa;border-top:1px solid #eee;font-size:12px;line-height:1.5;color:#666;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
              <p style="margin:0;">Serving Florida · Based in Orlando</p>
              <p style="margin:8px 0 0;">
                <a href="mailto:prefabflorida@gmail.com" style="color:#0F6E56;">prefabflorida@gmail.com</a>
                &nbsp;·&nbsp;
                <a href="tel:+13217473778" style="color:#0F6E56;">(321) 747-3778</a>
              </p>
              <p style="margin:12px 0 0;font-size:11px;color:#999;">You received this email because you submitted a form on prefabricated.co.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
