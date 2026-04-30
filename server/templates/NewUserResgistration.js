export const newUserRegistrationTemplate = (password, name) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to SMS</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f7f6;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 40px auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            }
            .header {
                text-align: center;
                padding-bottom: 20px;
                border-bottom: 2px solid #f0f2f5;
            }
            .header h1 {
                color: #2c3e50;
                font-size: 24px;
                margin: 0;
            }
            .content {
                padding: 30px 0;
                line-height: 1.8;
                color: #555555;
            }
            .content p {
                margin-bottom: 15px;
            }
            .password-box {
                background-color: #f8f9fa;
                border: 2px dashed #007bff;
                padding: 20px;
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 3px;
                color: #007bff;
                margin: 30px 0;
                border-radius: 8px;
            }
            .footer {
                text-align: center;
                font-size: 13px;
                color: #999999;
                padding-top: 20px;
                border-top: 2px solid #f0f2f5;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome to SMS</h1>
            </div>
            <div class="content">
                <p>Hello <strong>${name}</strong>,</p>
                <p>Your account has been successfully created. We are thrilled to have you on board!</p>
                <p>Please find your temporary login password below:</p>
                <div class="password-box">
                    ${password}
                </div>
                <p>For security purposes, we highly recommend changing your password immediately after your first login.</p>
                <p>Best Regards,<br><strong>SMS Team</strong></p>
            </div>
            <div class="footer">
                <p>This is an automated message. Please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};