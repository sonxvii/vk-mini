import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  PERSIK: 'persik',
  NEWPANEL: 'newpanel',
  TASK1: 'task1'
};

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.PERSIK, `/${DEFAULT_VIEW_PANELS.PERSIK}`, []),
      createPanel(DEFAULT_VIEW_PANELS.NEWPANEL, `/${DEFAULT_VIEW_PANELS.NEWPANEL}`, []),
      createPanel(DEFAULT_VIEW_PANELS.TASK1, `/${DEFAULT_VIEW_PANELS.TASK1}`, [])
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
