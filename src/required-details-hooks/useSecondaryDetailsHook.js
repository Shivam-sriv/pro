import { useState } from "react";
import { Validator, validatorsMethods } from '../validations'


const secondInitial = { email_joinholder: "", mobileNo: "",mobileRelation:"",emailRelation:"", name: "",   occupation: "", incomeRange: "", place_of_birth: ""}

function useSecondaryDetailsHook() {
    const [secondInitialState, setSecondInitialState] = useState(secondInitial)
    const SecondHolderChangeler = (e) => {
        setSecondInitialState({ ...secondInitialState, [e.target.name]: e.target.value })
    }

    const checkSecondHolderError = async () => {
       
        const email_joinholder = await Validator(secondInitialState.email_joinholder, "email_joinholder", (a, b) => {
            validatorsMethods.start(a, b).isRequired().email().checkMatchEmail(secondInitialState.email_joinholder)
        });
        const mobileNo = await Validator(secondInitialState.mobileNo, "mobileNo", (a, b) => {
            validatorsMethods.start(a, b).isRequired().checkMobileNumber().checkMatchMobile(secondInitialState.mobileNo)
        })
        const mobileRelation = await Validator(secondInitialState.mobileRelation, "mobileRelation", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const emailRelation = await Validator(secondInitialState.emailRelation, "emailRelation", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const name = await Validator(secondInitialState.name, "name", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
     
        // const pan = await Validator(secondInitialState.pan, "pan", (a, b) => {
        //     validatorsMethods.start(a, b).isRequired()
        // });
        const occupation = await Validator(secondInitialState.occupation, "occupation", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const incomeRange = await Validator(secondInitialState.incomeRange, "incomeRange", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const place_of_birth = await Validator(secondInitialState.place_of_birth, "place_of_birth", (a, b) => {
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


    return { SecondHolderChangeler, secondInitialState,secondInitial, checkSecondHolderError,setSecondInitialState };

}
export { useSecondaryDetailsHook };