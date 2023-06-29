import "express-async-errors";
import express, { Application } from "express";
import { categoryRouter, realEstateRouter, sessionRouter, userRouter } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);

app.use("/login", sessionRouter);

app.use("/categories", categoryRouter);

app.use("/realEstate",realEstateRouter)

app.use(middlewares.handleError);

export default app;
