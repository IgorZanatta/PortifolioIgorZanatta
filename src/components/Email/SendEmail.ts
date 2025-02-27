import emailjs from 'emailjs-com';

export const sendEmail = async (name: string, email: string, message: string): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      'service_gkt8c3s', // Substitua pelo seu Service ID
      'template_2los3ts', // Substitua pelo seu Template ID
      {
        user_name: name,
        user_email: email,
        message,
      },
      'BzLgEKNb4yBkVzi9x' // Substitua pelo seu User ID
    );
    return response.status === 200;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return false;
  }
};
