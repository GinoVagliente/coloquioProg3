export const environment = {
  production: true,
  apiUrl: process.env['API_URL'] || 'https://github.com',  // Usar corchetes
  apiKey: process.env['API_KEY'] || 'https://api.github.com'  // Usar corchetes
};
