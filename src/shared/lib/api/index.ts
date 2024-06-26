/* tslint:disable */

import { ContainersApi, ImagesApi } from './apis';
import { Configuration } from './runtime';

/* eslint-disable */
export * from './runtime';
export * from './apis/index';
export * from './models/index';

const configuration = new Configuration({
  basePath: '/api/v5.0.0'
})
export const containersApi = new ContainersApi(configuration)
export const imagesApi = new ImagesApi(configuration)