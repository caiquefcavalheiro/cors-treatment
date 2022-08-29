declare global {
  namespace Express {
    interface Request {
      query: {
        url: string;
      };
    }
  }
}
