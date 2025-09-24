const getEnvValue = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return value;
};

export const env = {
  apiUrl: getEnvValue("API_URL"),
  timeout: Number(getEnvValue("TIME_OUT")),
  secretKey: getEnvValue("SECRET_KEY"),
  environment: getEnvValue("NODE_ENV"),
  isProduction: getEnvValue("NODE_ENV") === "production",
  isDevelopment: getEnvValue("NODE_ENV") === "development",
};
