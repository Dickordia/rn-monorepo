import { UserState, user } from './user'
import { AppState, app } from './app'

export const reducers = {
  app: app.reducer,
  user: user.reducer
}

export const actions = {
  app: app.actions,
  user: user.actions
}

export { app, user }