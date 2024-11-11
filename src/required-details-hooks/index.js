import { useState } from "react";
import {Validator,validatorsMethods} from '../validations'
import { pincode } from "../apisMethods";
import { toast } from "react-toastify";

const initialState = {
    pan:'',
    email:'',
    emailRelation:'',
    mobileNo:'',
    mobileRelation:'',//
    pob:'',
    occupation:'',
    inc_range:'',
    pinCode:'',
    address:'',
    landmark:'',
    city:'',
    state:'',
    country:'',
    nri_pin:'',
    nri_address:'',
    nri_landmark:'',
    nri_city:'',
    nri_state:'',
    nri_country:'',
};



function usePersonalDetails(nriState) {
  const [profileState, setProfileState] = useState(initialState);
 
  const profileChangeHandler = (e) => {

    setProfileState({ ...profileState, [e.target.name]: e.target.value });
    if(e.target.name == "pinCode" && e.target.value.length==6){
      console.log("done",e.target.value);
      let token = localStorage.getItem('token')
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      pincode({pincode:e.target.value}, headers).then(res => {
        if (!res.data) {
          toast.error(res.error.response.data.msg)
        } else {
          console.log(res.data.data);
          setProfileState({ ...profileState,["country"]:res.data.data.Country,["state"]:res.data.data.State,["pinCode"]:res.data.data.Pincode,["city"]:res.data.data.District})
          
        }
      })
    }
  };
  

  const checkErrors = async (err)=>{
console.log("err",);
    let nriErrors = {}
    const email = await Validator(profileState.email, "email", (a, b) => {
      validatorsMethods.start(a, b).isRequired().email()
    });
    const mobileNo = await Validator(profileState.mobileNo, "mobileNo", (a, b) => {
      validatorsMethods.start(a, b).isRequired().checkMobileNumber()
    });
    const emailRelation = await Validator(profileState.emailRelation, "emailRelation", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const mobileRelation = await Validator(profileState.mobileRelation, "mobileRelation", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const pob = await Validator(profileState.pob, "pob", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const occupation = await Validator(profileState.occupation, "occupation", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const inc_range = await Validator(profileState.inc_range, "inc_range", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });

    const address = await Validator(profileState.address, "address", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const city = await Validator(profileState.city, "city", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const state = await Validator(profileState.state, "state", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const country = await Validator(profileState.country, "country", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const pinCode = await Validator(profileState.pinCode, "pinCode", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });

    const nri_pin = await Validator(profileState.nri_pin, "nri_pin", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const nri_address = await Validator(profileState.nri_address, "nri_address", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const nri_city = await Validator(profileState.nri_city, "nri_city", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const nri_state = await Validator(profileState.nri_state, "nri_state", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });
    const nri_country = await Validator(profileState.nri_country, "nri_country", (a, b) => {
      validatorsMethods.start(a, b).isRequired()
    });


   if(nriState=="0") {
     if( nri_pin.message||
      nri_address.message||
      nri_city.message||
      nri_state.message||
      nri_country.message){

       nriErrors={  
        [nri_pin.field]: nri_pin.message ,
        [nri_address.field]: nri_address.message ,
        [nri_city.field]: nri_city.message ,
        [nri_state.field]: nri_state.message ,
        [nri_country.field]: nri_country.message ,
      }
      } 
   }

   if(err=== 1){
    if ( emailRelation.message||  mobileRelation.message|| pob.message|| occupation.message|| inc_range.message|| pinCode.message|| address.message|| city.message|| state.message|| country.message
      ){
  
        const errors = {
        [emailRelation.field]: emailRelation.message,
        [mobileRelation.field]: mobileRelation.message,
        [pob.field]: pob.message,
        [occupation.field]: occupation.message ,
        [inc_range.field]: inc_range.message ,
        [pinCode.field]: pinCode.message ,
        [address.field]: address.message ,
        [city.field]: city.message ,
        [state.field]: state.message ,
        [country.field]: country.message ,
        ...nriErrors,
        errors:true
       }
      return errors
      }
      return {errors:false}
   }


    else if ( emailRelation.message|| email.message|| mobileNo.message|| mobileRelation.message|| pob.message|| occupation.message|| inc_range.message|| pinCode.message|| address.message|| city.message|| state.message|| country.message
    ){

      const errors = {
      [emailRelation.field]: emailRelation.message,
      [email.field]: email.message,
      [mobileNo.field]: mobileNo.message,
      [mobileRelation.field]: mobileRelation.message,
      [pob.field]: pob.message,
      [occupation.field]: occupation.message ,
      [inc_range.field]: inc_range.message ,
      [pinCode.field]: pinCode.message ,
      [address.field]: address.message ,
      [city.field]: city.message ,
      [state.field]: state.message ,
      [country.field]: country.message ,
      ...nriErrors,
      errors:true
     }
    return errors
    }
    return {errors:false}
  }

  return { profileState, profileChangeHandler,checkErrors };
}

export { usePersonalDetails };
