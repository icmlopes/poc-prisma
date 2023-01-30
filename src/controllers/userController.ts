import  bcrypt  from '@prisma/client';
import { Request, Response } from "express";
import * as R from "../repositories/userRepository.js"


export async function postSignUp(req: Request, res: Response) {
    const { name, email, password } = req.body;

	const passwordHashed: string = bcrypt.hashSync(password, 10);

	try {
		// const existingEmail = await getUserByEmail(email);

		// if (existingEmail.rowCount > 0) {
		// 	return res
		// 		.status(409)
		// 		.send("Esse e-mail já está cadastrado no nosso sistema!");
		// }

		// const existingUsername = await getUserByUsername(username);

		// if (existingUsername.rowCount > 0) {
		// 	return res
		// 		.status(409)
		// 		.send("Esse nome de usuário já está cadastrado no nosso sistema!");
		// }

		const newUser = await R.addUser(
            name,
			email,
			passwordHashed,
		);

		// if (newUser === 0) {
		// 	res.sendStatus(502);
		// }
		res.sendStatus(201)
	} catch (err) {
		console.log(err);
	}
}
// }