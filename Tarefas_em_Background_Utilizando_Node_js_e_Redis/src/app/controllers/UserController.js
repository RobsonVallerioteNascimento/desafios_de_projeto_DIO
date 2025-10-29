import passwordGenerator from 'password-generator';
//import Mail from "../lig/Mail";
import Queue from '../lib/Queue';

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false),
    };

    //await Mail.sendMail({
    //  from: "DIO <contato@dio.com.com.br>",
    //  to: `${name} <${email}>`,
    //  subject: "Cadastro de usuário",
    //  html: `Olá, ${name}, bem-vindo!`
    //})

    await Queue.add('RegistrationMail', { user });

    return res.json(user);
  }
};
