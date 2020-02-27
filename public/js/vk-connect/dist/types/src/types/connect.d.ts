import { RequestPropsMap, ReceiveDataMap } from './data';
/**
 * Name of a method that can be sent.
 */
export declare type RequestMethodName = keyof RequestPropsMap;
/**
 * Name of a method that can be received.
 */
export declare type ReceiveMethodName = keyof ReceiveDataMap;
/**
 * Name of a method that can be only sent.
 */
export declare type RequestOnlyMethodName = Exclude<RequestMethodName, ReceiveMethodName>;
/**
 * Name of a method that can be only received.
 */
export declare type ReceiveOnlyMethodName = Exclude<ReceiveMethodName, RequestMethodName>;
/**
 * Name of a method which contains properties
 */
export declare type RequestMethodNameWithProps = {
    [K in keyof RequestPropsMap]: keyof RequestPropsMap[K] extends never ? never : K;
}[keyof RequestPropsMap];
/**
 * Name of a method which doesn't contain properties
 */
export declare type RequestMethodNameWithoutProps = Exclude<RequestMethodName, RequestMethodNameWithProps>;
/**
 * Type of any method name.
 */
export declare type MethodName = RequestMethodName | ReceiveMethodName;
/**
 * The name of the method that can be both sent and received.
 */
export declare type IOMethodName = RequestMethodName & ReceiveMethodName;
/**
 * Getter of request properties of a method.
 */
export declare type RequestProps<M extends RequestMethodName = RequestMethodName> = RequestPropsMap[M];
/**
 * Getter of response data of a method.
 */
export declare type ReceiveData<M extends ReceiveMethodName = ReceiveMethodName> = ReceiveDataMap[M];
/**
 * Property for matching sent request and received message.
 */
export declare type RequestIdProp = {
    request_id?: number | string;
};
/**
 * Client error data.
 */
export declare type ErrorDataClientError = {
    error_code: number;
    error_reason: string;
    error_description?: string;
};
/**
 * API error data.
 */
export declare type ErrorDataAPIError = {
    error_code: number;
    error_msg: string;
    request_params: string[];
};
/**
 * Auth error data.
 */
export declare type ErrorDataAuthError = {
    error_code: number;
    error_reason: string;
    error_description?: string[];
};
/**
 * Type of error data
 */
export declare type ErrorData = {
    error_type: 'client_error';
    error_data: ErrorDataClientError;
    request_id?: number | string;
} | {
    error_type: 'api_error';
    error_data: ErrorDataAPIError;
    request_id?: number | string;
} | {
    error_type: 'auth_error';
    error_data: ErrorDataAuthError;
    request_id?: number | string;
};
/**
 * Type of error event data
 */
export declare type VKConnectErrorEvent = {
    detail: {
        type: string;
        data: ErrorData;
    };
};
/**
 * Type of success event data
 */
export declare type VKConnectSuccessEvent<T extends ReceiveMethodName> = {
    detail: {
        type: string;
        data: ReceiveData<T> & RequestIdProp;
    };
};
/**
 * VK Connect event.
 */
export declare type VKConnectEvent<T extends ReceiveMethodName> = VKConnectErrorEvent | VKConnectSuccessEvent<T>;
/**
 * Type of function that will be subscribed to VK Connect events.
 */
export declare type VKConnectSubscribeHandler = (event: VKConnectEvent<ReceiveMethodName>) => void;
/**
 * Type of send function for methods that have props.
 *
 * @param method The method (event) name to send.
 * @param props Method properties.
 * @returns The Promise object with response data.
 */
export declare type VKConnectSend = <K extends RequestMethodName>(method: K, props?: RequestProps<K> & RequestIdProp) => Promise<K extends ReceiveMethodName ? ReceiveData<K> : void>;
/**
 * VK Connect interface.
 */
export interface VKConnect {
    /**
     * Sends an event to the runtime env and returns the Promise object with
     * response data. In the case of Android/iOS application env is the
     * application itself. In the case of the browser, the parent frame in which
     * the event handlers is located.
     *
     * @param method The method (event) name to send.
     * @param [props] Method properties.
     * @returns The Promise object with response data.
     */
    send: VKConnectSend;
    /**
     * @alias send
     * @deprecated
     */
    sendPromise: VKConnectSend;
    /**
     * Adds an event listener. It will be called any time a data is received.
     *
     * @param listener A callback to be invoked on every event receive.
     */
    subscribe: (listener: VKConnectSubscribeHandler) => void;
    /**
     * Removes an event listener which has been subscribed for event listening.
     *
     * @param listener A callback to unsubscribe.
     */
    unsubscribe: (listener: VKConnectSubscribeHandler) => void;
    /**
     * Checks if a method is supported on runtime platform.
     *
     * @param method Method (event) name to check.
     * @returns Result of checking.
     */
    supports: (method: string) => boolean;
    /**
     * Checks whether the runtime is a WebView.
     *
     * @returns Result of checking.
     */
    isWebView: () => boolean;
}
