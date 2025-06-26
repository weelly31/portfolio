import emailjs from '@emailjs/browser';

export async function SendEmail({ name, email, message }) {
  const serviceId = 'your_service_id';
  const templateId = 'your_template_id';
  const publicKey = 'your_public_key';

  const templateParams = {
    from_name: name,
    from_email: email,
    message,
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}
