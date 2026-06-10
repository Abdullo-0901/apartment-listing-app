export const AppConfig = {
  get url() {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not defined");
    }
    return process.env.NEXT_PUBLIC_API_URL;
  },
};
