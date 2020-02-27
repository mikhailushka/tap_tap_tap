import { VKConnect } from './types/connect';
import { Middleware } from './types/middleware';
/**
 * Creates the VK Connect enhancer that applies middleware to the `send`
 * method. This is handy for a variety of task such as logging every sent
 * event.
 *
 * @param middlewares The middleware chain to be applied.
 * @returns The VK Connect enhancer applying the middleware.
 */
export declare function applyMiddleware(...middlewares: Array<Middleware | undefined | null>): (connect: VKConnect) => VKConnect;
