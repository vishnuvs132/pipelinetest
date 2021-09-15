export interface configType {
  "port": string;
  "serviceurl": string;
}
export const configData: configType = {
  port: process.env['PORT'] || '4002',
  serviceurl: `${process.env.SSL === 'true' ? 'https' : 'http'}://${process.env['NODE_ENV'] === 'production' ? 'ms.01-01' : 'localhost'}:${process.env['MS0101PORT'] || 4001}/`
}