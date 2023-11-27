// validation.js
const validation = (user) => {
	const userNameRegex = /^[a-zA-Z0-9]{6,25}$/;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const passwordRegex = /^[a-zA-Z0-9]{6,25}$/;
	const phoneRegex = /^[0-9]{4,14}$/;

	const errors = {};

	if (!userNameRegex.test(user.username)) {
		errors.username =
			'The username must be between 6 and 25 alphanumeric characters';
	}

	if (!userNameRegex.test(user.lastName)) {
		errors.lastName =
			'The last name must be between 6 and 25 alphanumeric characters';
	}

	if (!emailRegex.test(user.email)) {
		errors.email = 'Invalid email address';
	}

	if (!passwordRegex.test(user.password)) {
		errors.password =
			'The password must be between 6 and 25 alphanumeric characters';
	}

	if (!phoneRegex.test(user.phone)) {
		errors.phone = 'The phone must be between 5 and 15 numbers';
	}

	if (!userNameRegex.test(user.country)) {
		errors.country =
			'The country must be between 6 and 25 alphanumeric characters';
	}

	if (!userNameRegex.test(user.profile.profileName)) {
		errors.profileName =
			'The profile name must be between 6 and 25 alphanumeric characters';
	}

	if (!userNameRegex.test(user.profile.profile_type)) {
		errors.profile_type =
			'The profile type must be between 6 and 25 alphanumeric characters';
	}

	return errors;
};

export default validation;
