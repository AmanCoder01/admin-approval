import { statusCode } from "../utils/constants.js";
import jsonGenerate from "../utils/helpers.js";
import { User } from "../models/user.models.js";


export const AdminDashboardController = async (req, res) => {
    try {

        if (req.accountType !== 'admin') {
            return res.json(jsonGenerate(statusCode.UNPROCCESSABLE_ENTRY, 'You are not admin!'))
        }

        const data = await User.find({ isVerified: false }).select("-password");

        return res.json(jsonGenerate(statusCode.SUCCESS, "Data fetched", data));

    }
    catch (error) {
        return res.json(jsonGenerate(statusCode.VALIDATION_ERROR, "Validation error", error
        ));
    }
};




export const ApproveUserAccount = async (req, res) => {
    try {

        if (req.accountType !== 'admin') {
            return res.json(jsonGenerate(statusCode.UNPROCCESSABLE_ENTRY, 'You are not admin!'))
        }

        const userId = req.body.userId;

        if (!userId) {
            return res.json(jsonGenerate(statusCode.UNPROCCESSABLE_ENTRY, 'user id reqyured'))

        }
        
        const updateDetails = await User.findByIdAndUpdate(userId, { isVerified: true }, { new: true });
        return res.json(jsonGenerate(statusCode.SUCCESS, "Data Updated", updateDetails));

    } catch (error) {
        return res.json(jsonGenerate(statusCode.VALIDATION_ERROR, "Validation error", error));

    }

}
