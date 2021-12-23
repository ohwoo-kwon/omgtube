import express from "express";
import { protectorMiddleware, videoUpload } from "../middlewares.js";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);
videoRouter.get("/upload", protectorMiddleware, getUpload);
videoRouter.post(
  "/upload",
  protectorMiddleware,
  videoUpload.fields([{ name: "video" }, { name: "thumb" }]),
  postUpload
);

export default videoRouter;
