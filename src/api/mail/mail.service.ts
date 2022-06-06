import { Injectable, Logger } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { ConfigService } from '@nestjs/config';


export type MAIL_TEMPLATE = 'base' | 'resetPassword' | 'welcome' | 'OTP';

@Injectable()
export class MailService {
  constructor(private readonly config: ConfigService) { }

  private transport() {
    return createTransport({
      host: 'smtp.mailtrap.io',
      port: '2525',
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'b983567c74696a', // generated ethereal user
        pass: '4e8aee8b38072a', // generated ethereal password
      },
    });
  }

  async sendMail(
    to: string,
    subject: string,
    template,
    params: any,
  ) {
    const info = await this.transport().sendMail({
      from: '"Fred Foo 👻" <hpm.noreply@gmail.com>', // sender address
      to,
      subject,
      html: template,
    });

    Logger.log('Message sent: ' + info.messageId, 'MailService/sendMail');
  }
}
