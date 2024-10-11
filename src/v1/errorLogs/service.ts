//import { message } from '../utils/message';
import { ClientErrorLogger, ErrorLog } from './model';

export const errorLogger = async (queryData: any) => {
  // eslint-disable-next-line no-useless-catch
//   try {
//     if (environment !== 'development') {
//       await ErrorLog.create({ query: 'CodeError', data: `${environment}Error`, error: queryData, createdAt: new Date() });
//     }
//   } catch (error) {
//     throw error;
//   }
};

export const ClientErrorLoggerService: any = async (queryData: any) => {
  const { errorSource, error, errorInfo, userId } = queryData;
  await ClientErrorLogger.create({ errorSource, error, errorInfo, userId });
  return {
    status: 200,
    data: {},
    //message: message.CREATED,
  };
};
