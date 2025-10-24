import { getusers } from './get-users';
import { addUser } from './add-user';
import { createSession } from './create-session';

export const server = {
	async authorize(authLogin, authPassword) {
		const users = await getusers();

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Пароль не введен',
				res: null,
			};
		}
		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
	async registor(regLogin, regPassword) {
		const users = await getUsers(regLogin);

		if (user) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}

		(await addUser(regLogin, regPassword);

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
