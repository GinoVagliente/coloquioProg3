export const environment = {
  production: true,
  API_URL: process.env['API_URL'] || 'https://api.github.com',  // Valor predeterminado si no se encuentra la variable
  API_KEY: process.env['API_KEY'] || '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'  // Valor predeterminado si no se encuentra la variable
};
