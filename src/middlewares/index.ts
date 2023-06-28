import { handleError } from "./handleError.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyEmailExists } from "./verifyEmailExist.middleware";
import { idExists } from "./verifyIdExists.middleware";
import { verifyAdmin } from "./verifyAdmin.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { verifyNameExists } from "./veryfyCategoryNameExists";
import { verifyOwner } from "./verifyOwnerOnCount.middleware";

export default{handleError,validateBody,verifyEmailExists,idExists,verifyAdmin,verifyToken,verifyNameExists,verifyOwner}