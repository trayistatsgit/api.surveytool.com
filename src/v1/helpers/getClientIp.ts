import { Request } from 'express';
export async function getClientIp(req: Request): Promise<string> {
  try {
    let ip = (req.headers['x-forwarded-for'] as string | string[] | undefined) || req.socket.remoteAddress || null;
    // ip = ['122.161.53.187']; //This is use for local testing
    if (Array.isArray(ip)) {
      ip = ip[0];
    }
    if (ip && ip.includes('::ffff:')) {
      ip = ip.split('::ffff:')[1];
    }
    return ip || '';
  } catch (error) {
    throw new Error('Ip is not get');
  }
}