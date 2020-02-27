import './custom-event';
declare const connect: import("./types/connect").VKConnect;
export * from './types/data';
export * from './types/connect';
export * from './types/middleware';
export { applyMiddleware } from './applyMiddleware';
export default connect;
