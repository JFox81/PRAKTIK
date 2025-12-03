export const getusers = (loginToFind) =>
	fetch('http://localhost:3005/user').then((loadeUsers) => loadeUsers.json());
