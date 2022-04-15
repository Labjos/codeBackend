import { userEntity } from "../entities/user.entity";

import { logError, LogSuccess } from "@/utils/logger";

// CRUD REquered


/**
 * Obtain All User
 */

export const GetAllUsers =async (): Promise<any[] | undefined> => {

    try {
        let userModel = userEntity()

        return await userModel.find({isDelete: false})
    } catch (error) {
        logError(`[ORM ERROR]: Getting All Users: ${error}`)

    }

}

// TODO 
// more options for users find 