import { useState } from "react";
import { Validator, validatorsMethods } from '../validations'


const thirdInitial = { email_joinholder: "", mobileNo: "",mobileRelation:"",emailRelation:"", name: "",   occupation: "", incomeRange: "", place_of_birth: ""}

function useThirdDetailsHook() {
    const [thirdInitialState, setThirdInitialState] = useState(thirdInitial)
    const thirdHolderChangeler = (e) => {
        setThirdInitialState({ ...thirdInitialState, [e.target.name]: e.target.value })
    }

    const checkThirdHolderError = async () => {
       
        const email_joinholder = await Validator(thirdInitialState.email_joinholder, "email_joinholder", (a, b) => {
            validatorsMethods.start(a, b).isRequired().email().checkMatchEmail(thirdInitialState.email_joinholder)
        });
        const mobileNo = await Validator(thirdInitialState.mobileNo, "mobileNo", (a, b) => {
            validatorsMethods.start(a, b).isRequired().checkMobileNumber().checkMatchMobile(thirdInitialState.mobileNo)
        })
        const mobileRelation = await Validator(thirdInitialState.mobileRelation, "mobileRelation", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const emailRelation = await Validator(thirdInitialState.emailRelation, "emailRelation", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const name = await Validator(thirdInitialState.name, "name", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
     
        // const pan = await Validator(thirdInitialState.pan, "pan", (a, b) => {
        //     validatorsMethods.start(a, b).isRequired()
        // });
        const occupation = await Validator(thirdInitialState.occupation, "occupation", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const incomeRange = await Validator(thirdInitialState.incomeRange, "incomeRange", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const place_of_birth = await Validator(thirdInitialState.place_of_birth, "place_of_birth", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        if (
            email_joinholder.message || mobileNo.message || mobileRelation.message || emailRelation.message || name.message || place_of_birth.message ||  occupation.message|| incomeRange.message
        ) {
            const error = {
                [mobileNo.field]: mobileNo.message,
                [email_joinholder.field]: email_joinholder.message,
                [mobileRelation.field]: mobileRelation.message,
                [emailRelation.field]: emailRelation.message,
                [name.field]: name.message, 
                [place_of_birth.field]: place_of_birth.message,
                // [pan.field]: pan.message,
                [occupation.field]: occupation.message,
                [incomeRange.field]: incomeRange.message,
                error: true
            }
            return error

        }
        return { error: false }

    }


    return { thirdHolderChangeler, thirdInitialState,thirdInitial, checkThirdHolderError,setThirdInitialState };

}
export { useThirdDetailsHook };