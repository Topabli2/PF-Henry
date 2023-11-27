const validation = (user) => {
	const userNameRegex = /^[a-zA-Z0-9]{6,25}$/;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const passwordRegex = /^[a-zA-Z0-9]{6,15}$/;
	const phoneRegex = /^[0-9]{1,10}$/;

	if (
		!userNameRegex.test(user.userName) ||
		!userNameRegex.test(user.lastName) ||
		!userNameRegex.test(user.country) ||
		!emailRegex.test(user.email) ||
		!passwordRegex.test(user.password) ||
		!phoneRegex.test(user.phone) ||
		!userNameRegex.test(user.profileName) 
	) {
		return 'Error al crear usuario';
	}

	return '';
};

export default validation;
