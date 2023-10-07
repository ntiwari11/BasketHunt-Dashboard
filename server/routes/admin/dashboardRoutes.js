import express from "express";
const router = express.Router();
import {
  authorizeRolesAdmin,
  isAuthenticatedUsers,
} from "../../middleware/authMiddleware";
import {
  createNewApp,
  deleteApps,
  getAllApps,
  modifyApps,
} from "../../controllers/admin/dashboardController";
/**
 * @Route :
 * @Access :
 * @Description :
 */

router.get(
  "/apps",
  isAuthenticatedUsers,
  authorizeRolesAdmin("admin"),
  getAllApps
);

/**
 * @Route :
 * @Access :
 * @Description :
 */

router.post(
  "/create-app",
  isAuthenticatedUsers,
  authorizeRolesAdmin("admin"),
  createNewApp
);
/**
 * @Route :
 * @Access :
 * @Description :
 */

router.delete(
  "/delete-app",
  isAuthenticatedUsers,
  authorizeRolesAdmin("admin"),
  deleteApps
);
/**
 * @Route :
 * @Access :
 * @Description :
 */

router.put(
  "/modify-app",
  isAuthenticatedUsers,
  authorizeRolesAdmin("admin"),
  modifyApps
);

export default router;
