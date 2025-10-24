import { getUsers } from './get-users';

export const getuser = async (loginToFind) => {
	const user = await getUsers();

	return users.find(({ login }) => login === loginToFind);
};
