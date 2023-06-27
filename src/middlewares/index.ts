import { handleError } from "./handleError.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyEmailExists } from "./verifyEmailExist.middleware";
import { idExists } from "./verifyIdExists.middleware";

export default{handleError,validateBody,verifyEmailExists,idExists}