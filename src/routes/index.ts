import { Router } from 'express';

import { baseRoutes } from './base.route';
import { categoriesRoutes } from './catogories.route';

export const routes = Router();

routes.use('/', baseRoutes);

routes.use('/categories', categoriesRoutes);
