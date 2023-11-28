import { prisma } from '@/libs/prisma';


export async function GET(req, res) {
	if (req.method === 'GET') {
	  const { username, password } =  req.body || req.params || {};
	  console.log(username, password);
	  console.log(req.query);
  
	  const user = await prisma.user.findFirst({
		where: {
		  AND: {
			username: username,
			password: password,
		  },
		},
	  });
  
	  if (user) {
		res.status(200).json({ message: 'Login successful' });
	  } else {
		res.status(401).json({ error: 'Invalid credentials' });
	  }
	} else {
	  res.status(405).json({ error: 'Method not allowed'});
  }
};