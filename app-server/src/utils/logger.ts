const pino = require("pino");

export const getLogger = () => {
  const customProps = {
    prettyPrint: {
      colorize: true,
      translateTime: true,
      crlf: true,
    },
  };
  const logger = process.env.NODE_ENV === "local" ? pino(customProps) : pino();
  return logger;
};
