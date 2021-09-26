export const AppRoute = {
  MAIN: '/',
  INITIATIVES: '/initiatives',
  ACTIVITIES: '/activities',
  INITIATIVES_PAGE: '/initiative/:initiative_id',
  ACTIVITY_PAGE: '/activity/:activity_id',
  INITIATIVE_FORM: '/initiative_form',
  ACTIVITY_FORM: '/activity_form',
  ACCOUNT: '/account',
  EDIT_ACTIVITY_FORM: '/edit/activity/:activity_id',
  EDIT_INITIATIVE_FORM: '/edit/initiative/:initiative_id',
  AUTH: '/authorization',
  REGISTRATION: '/registration',
}

export const ApiInformation = {
  BASE_URL: `http://1ca2-85-249-39-223.ngrok.io/api/`,
  TIMEOUT: 5000,
  WITH_CREDENTIALS: true
}

export const HttpCode = {
  UNAUTHORIZED: 401
};

export const ActionType = {
  LOAD_ACTIVITIES: `LOAD_ACTIVITIES`,
}
