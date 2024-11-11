export const currentMonth = () =>{
    const d = new Date();
    let monthNum = d.getMonth()+1
    let month = monthNum.toString()
    let lengthOfMonth = month.length;
    if (lengthOfMonth == 1) {
      month = "0" + month;
      let year = d.getFullYear()
      let fyear = year.toString()
    let tempDate = fyear+"-"+month
    return tempDate
    } else {
      let year = d.getFullYear()
      let fyear = year.toString()
    let tempDate = fyear+"-"+month
    return tempDate

    }
}

