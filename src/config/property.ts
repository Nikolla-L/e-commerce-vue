export default {
	ACCESS_TOKEN_DURATION: '30m',
	JWT_SECRET: 'some_secret_key',
	
	DATABASE: {
		TYPE: process.env['DATABASE_TYPE'] || 'mysql',
		HOST: process.env['DATABASE_HOST'] || 'localhost',
		PORT: parseInt(process.env['DATABASE_PORT'] || '3306'),
		USERNAME: process.env['DATABASE_USERNAME'] || 'root',
		PASSWORD: process.env['DATABASE_PASSWORD'] || 'my-secret-password',
		NAME: process.env['DATABASE_NAME'] || 'ecom'
	}
}