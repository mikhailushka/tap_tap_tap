import connect from '../vk-connect/dist/index.es.js';

export const APP_ID = 7324963;
export const API_VERSION = '5.92';

// NB: Где то тут можно разместить функции для оплаты голосами
// NB: Логика такая: на кнопке "Поддержать разработчиков :)" будет висеть onClick(он в html встроен)
// В onClick будет висеть callback функция из этого файла, которая инициирует оплату голосами

export const initApp = () => {
    debugger;
    connect.send('VKWebAppInit', {})
        .then(res => console.log('kek', res) )
        .catch(error => console.log('lol', error))
};

export const getCurrentUserId = () => {
    connect.send("VKWebAppGetUserInfo", {})
        .then(res => console.log('kek', res) )
        .catch(error => console.log('lol', error))
  }

export const getAuthToken = (scope) => (dispatch) => {
    VKConnect.send("VKWebAppGetAuthToken", {
        "app_id": APP_ID,
        "scope": scope.join(',')
    }).then(data => {
        dispatch(setAccessToken(data.data.access_token));
    }).catch(() => {
        dispatch(setAccessToken(null));
    });
};

export const closeApp = () => {
    VKConnect.send("VKWebAppClose", {"status": "success"});
};

export const swipeBackOn = () => {
    VKConnect.send("VKWebAppEnableSwipeBack", {});
};

export const swipeBackOff = () => {
    VKConnect.send("VKWebAppDisableSwipeBack", {});
};

export const groupsGet = () => {
    return APICall('groups.get', {
        "extended": "1",
        "fields": "description",
        "count": "100"
    });
};

export const currentUserGet = () => {
    return APICall('users.get', {});
};

export const APICall = (method, params) => {
    params['access_token'] = store.getState().vkui.accessToken;
    params['v'] = params['v'] === undefined ? API_VERSION : params['v'];

    return VKConnect.send("VKWebAppCallAPIMethod", {
        "method": method,
        "params": params
    }).then(data => {
        return data.data.response;
    }).catch(error => {
        return error;
    });
};