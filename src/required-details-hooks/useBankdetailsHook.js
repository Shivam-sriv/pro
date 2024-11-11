import { useState } from "react";
import { Validator, validatorsMethods } from '../validations'
import { getIfscDetails } from "../apisMethods";
import { toast } from "react-toastify";

const bankInitial = { bankAccount: "", confirmBankAccount: "", accountType: "", IFSCCode: "", SelectedBank: "", Branch: "",bank_code:"",BranchAddress:""}

function useBankdetailsHook() {
    const [bankDetails, setBankDetails] = useState(bankInitial)
    const BankChangeler = (e) => {
        
        setBankDetails({ ...bankDetails, [e.target.name]: e.target.value })
        console.log("e.target.value",e.target.value);
        console.log("e.target.label",e.target);
        if(e.target.name=="IFSCCode"){
            setBankDetails({ ...bankDetails, [e.target.name]: e.target.value.toUpperCase() })
        }
        if(e.target.name=="IFSCCode" && e.target.value.length ==11){
            let token = localStorage.getItem('token')
            const headers = { headers: { Authorization: `Bearer ${token}` } };
            getIfscDetails({ifsc:e.target.value},headers).then(res=>{
                if (!res.data) {
                    toast.error(res.error.response.data.msg)
                  } else {
                    console.log(res.data.data.BANK);
                    setBankDetails({ ...bankDetails,["SelectedBank"]: res.data.data.BANK,["BranchAddress"]:res.data.data.ADDRESS, ["Branch"]: res.data.data.BRANCH, ["IFSCCode"]: e.target.value.toUpperCase()})
                    
                  }
            })
        }

    }

    const checkBankError = async () => {
        const bankAccount = await Validator(bankDetails.bankAccount, "bankAccount", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const confirmBankAccount = await Validator(bankDetails.confirmBankAccount, "confirmBankAccount", (a, b) => {
            validatorsMethods.start(a, b).isRequired().checkConfirmAccountNumber(bankDetails.bankAccount)
        });
        const accountType = await Validator(bankDetails.accountType, "accountType", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const IFSCCode = await Validator(bankDetails.IFSCCode, "IFSCCode", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const SelectedBank = await Validator(bankDetails.SelectedBank, "SelectedBank", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        const Branch = await Validator(bankDetails.Branch, "Branch", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
        });
        // const BankProofType = await Validator(bankDetails.BankProofType, "BankProofType", (a, b) => {
        //     validatorsMethods.start(a, b).isRequired()
        // });
        // const BirthProofType = await Validator(bankDetails.BirthProofType, "BirthProofType", (a, b) => {
        //     validatorsMethods.start(a, b).isRequired()
        // });
        if (
            confirmBankAccount.message|| bankAccount.message || accountType.message || IFSCCode.message || SelectedBank.message || Branch.message
        ) {
            const error = {
                [bankAccount.field]: bankAccount.message,
                [accountType.field]: accountType.message,
                [confirmBankAccount.field]: confirmBankAccount.message,
                [IFSCCode.field]: IFSCCode.message,
                [SelectedBank.field]: SelectedBank.message,
                [Branch.field]: Branch.message,
                error: true
            }
            return error

        }
        return { error: false }

    }

    const checkNominiError =async (nominis) => {

        const nomini_name = await Validator(nominis.nomini_name, "nomini_name", (a, b) => {
          validatorsMethods.start(a, b).isRequired()
        });
        const nominiMinor = await Validator(nominis.nominiMinor, "nominiMinor", (a, b) => {
            validatorsMethods.start(a, b).isRequired()
          });
        const nomini_dob = await Validator(nominis.nomini_dob, "nomini_dob", (a, b) => {
          validatorsMethods.start(a, b).isRequired()
        });
        const nomini_relation = await Validator(nominis.nomini_relation, "nomini_relation", (a, b) => {
          validatorsMethods.start(a, b).isRequired()
        });
        const alocation_percentage = await Validator(nominis.alocation_percentage, "alocation_percentage", (a, b) => {
          validatorsMethods.start(a, b).isRequired()
        });
        if(nomini_name.message ||nominiMinor.message|| nomini_dob.message || nomini_relation.message || alocation_percentage.message){
              const error = {
                    [nomini_name.field]: nomini_name.message,
                    [nomini_dob.field]: nomini_dob.message,
                    [nomini_relation.field]: nomini_relation.message,
                    [alocation_percentage.field]: alocation_percentage.message,
                    [nominiMinor.field]: nominiMinor.message,
                    error: true
                }
                return error
    
            }
            return { error: false }
        // SetNominee("d-none");
        // SetSuccess("d-block");
        // SetActive2("active");
      };

    return { BankChangeler, bankDetails, checkBankError,checkNominiError };

}
export { useBankdetailsHook };