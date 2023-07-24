/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'",
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Strict-Transport-Security',

						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'Permissions-Policy',
						value: 'geolocation=none, microphone=none, camera=none',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
