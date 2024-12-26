import AdminJS from "adminjs";
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { MockUp, Order, Product, Supplier, User } from '../models'
import bcrypt from 'bcrypt'
import { locale } from './locale'
import { dashboardOption } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./resources/authetication";

AdminJS.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  dashboard: dashboardOption,
  locale: locale,
  branding: brandingOptions,
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, authenticationOptions, null, {
	resave: false,
	saveUninitialized: false
})