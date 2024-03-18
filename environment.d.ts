declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FB_API_KEY: string;
      FB_AUTH_DOMAIN: string;
      FB_PROJECT_ID: string;
      FB_STORAGE_BUCKET: string;
      FB_MESSAGING_SENDER_ID: string;
      FB_APP_ID: string;
      FB_MEASUREMENT_ID: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
    }
  }
}

export {};