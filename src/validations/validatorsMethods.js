export const validatorsMethods = {
  start(value, field) {
    this.value = value;
    this.field = field;
    return this;
  },

  isRequired() {
    if (!this.value) {
      throw {
        field: this.field,
        message: "Mandatory Field ",
      };
    }
    return this;
  },

  number() {
    if (typeof this.value != "number") {
      throw {
        field: this.field,
        message: `This is not a valid ${this.field}*`,
      };
    }
    return this;
  },
  checkMobileNumber() {
    var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[6789]\d{9}$/;
    const PhoneValid = mobPattern.test(this.value);
    if (!PhoneValid) {
      throw {
        field: this.field,
        message: `This is not a valid ${this.field}*`,
      };
    }
    return this;
  },

  string() {
    if (typeof this.value != "string") {
      throw {
        field: this.field,
        message: `This is not a valid ${this.field}*`,
      };
    }
    return this;
  },

  positive() {
    if (this.value < 0) {
      throw {
        field: this.field,
        message: "This is a negative number*",
      };
    }
    return this;
  },

  max(range) {
    if (this.value > range) {
      throw {
        field: this.field,
        message: "Out of range number*",
      };
    }
    return this;
  },

  min(range) {
    if (this.value < range) {
      throw {
        field: this.field,
        message: "Enter the greater or equal value of " + range + "*",
      };
    }
    return this;
  },

  email() {
    // before the @gmail.com and accepts everything else)
    var regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Converting the email to lowercase
    if (regexp.test(String(this.value).toLowerCase()) == false) {
      throw {
        field: this.field,
        message: `Enter valid ${this.field}*`,
      };
    }

    return this;
  },

  strMax(range) {
    this.value = this.value.trim();
    if (this.value.length > range) {
      throw {
        field: this.field,
        message: `${
          this.field.slice(0, 1).toUpperCase() +
          this.field.slice(1, this.field.length)
        } should be less then or equal ${range} char*`,
      };
    }
    return this;
  },

  strMin(range) {
    this.value = this.value.trim();
    if (this.value.length < range) {
      throw {
        field: this.field,
        message: `${
          this.field.slice(0, 1).toUpperCase() +
          this.field.slice(1, this.field.length)
        }   should be greater then or equal ${range} char*`,
      };
    }
    return this;
  },

  checkConfirmPassword(password) {
    if (password.length < 8) {
      throw {
        field: this.field,
        message: `Password should be greater then or equal ${8} char*`,
      };
    } else if (this.value !== password) {
      throw {
        field: this.field,
        message: `Confirm password not matched*`,
      };
    }
    return this;
  },
  checkConfirmAccountNumber(bankAccount) {
    if (bankAccount.length < 10) {
      throw {
        field: this.field,
        message: `Account Number should be greater then or equal ${10} Number*`,
      };
    } else if (this.value !== bankAccount) {
      throw {
        field: this.field,
        message: `Confirm Account Number not matched*`,
      };
    }
  
    return this;
  },

  checkPassword() {
    const regex =
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})";
    const rex = new RegExp(regex);
    if (!rex.test(this.value)) {
      throw {
        field: this.field,
        message: `Use 8 or more characters with  letters, numbers & symbols*`,
      };
    }
    return this;
  },
  checkMatchMobile(mobile) {
   let primaryMobile = JSON.parse(localStorage.getItem("user"))
   let secondMobile = localStorage.getItem("secondMobile")
    if (primaryMobile.mobile == mobile || secondMobile==mobile) {
      throw {
        field: this.field,
        message: "Primary, Secondary & Third Holder Mobile Should Not be Same",
      };
    } 
  
    return this;
  },
  checkMatchEmail(email) {
    let primaryEmail = JSON.parse(localStorage.getItem("user"))
    let secondEmail = localStorage.getItem("secondEmail")
     if (primaryEmail.email == email || secondEmail==email) {
       throw {
         field: this.field,
         message: "Primary, Secondary & Third Holder Email Should Not be Same",
       };
     } 
   
     return this;
   },
  checkPan() {
    let regExpe =
      /^([A-Z]){3}(C|P|H|F|A|T|B|L|J|G){1}([A-Z]){1}([0-9]){4}([A-Z]){1}?$/;

    if (!regExpe.test(this.value)) {
      throw {
        field: this.field,
        message: "Invalid pan",
      };
    }
    return this;
  },
};
