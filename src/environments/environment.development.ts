export const environment = {
  production: true,
  apiUrl: process.env['API_URL'] || 'https://default-api-url.com',  // Valor predeterminado si no se encuentra la variable
  apiKey: process.env['API_KEY'] || 'default-api-key'  // Valor predeterminado si no se encuentra la variable
};
