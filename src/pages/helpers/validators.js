
export const incCurrentAge = (state, setter) => {
    if (state < 60) {
        return setter(Number(state) + 1);
    }
};

export const decCurrentAge = (state, setter) => {
    if (state > 1) {
       return setter(state - 1);
    }
  }


  export const incTenLakh = (state, setter) => {
    if (state < 1000000) {
      setter(Number(state) + 500);
    }
    else if (state >= 1000000) {
      setter(Number(1000000));
    }
    else if (state == 0) {
      setter(Number(state) + 500);
    }

  };
  export const incSwenty = (state,setter) => {
    if (state < 70) {
        setter(Number(state) + 1);
    }
  };
  export const incFifty = (state,setter) => {
    if (state < 50) {
        setter(Number(state) + 1);
    }
  };

  export const incTwentyFive = (state,setter) => {
    if (state < 25) {
        setter(Number(state) + 1);
    }
  };
  export const decTwentyFive = (state,setter) => {
    if (state <= 25 && state>0) {
        setter(Number(state) - 1);
    }
  };
  export const incThirty = (state,setter) => {
    if (state < 30) {
        setter(Number(state) + 1);
    }
  };
  export const decTwenty = (state,setter) => {
    if (state <= 20 && state>0) {
        setter(Number(state) - 1);
    }
  };
  export const decFifty = (state,setter) => {
    if (state <= 50 && state>0) {
        setter(Number(state) - 1);
    }
  };

  export const incTwenty = (state,setter) => {
    if (state < 20) {
        setter(Number(state) + 1);
    }
  };
  export const decThirty = (state,setter) => {
    if (state <= 30 && state>0) {
        setter(Number(state) - 1);
    }
  };


   export const decTenLakh = (state, setter) => {
    if (state >= 500) {

        setter(state - 500);
    }
    else if (state < 499) {
        setter(0);
    }
  }

  export const incCrore= (state, setter) => {
    if (state < 10000000 ) {
      setter(Number(state) + 500);
    }
    else if (state >= 10000000) {
      setter(Number(10000000 ));
    }
    else if (state == 0) {
      setter(Number(state) + 500);
    }

  };

  export const incTenCrore= (state, setter) => {
    if (state < 100000000 ) {
      setter(Number(state) + 500);
    }
    else if (state >= 100000000) {
      setter(Number(100000000 ));
    }
    else if (state == 0) {
      setter(Number(state) + 500);
    }

  };


 export const incPointFive = (state, setter) => {
    if (state < 100  ) {
        setter(Number(state) + .5);
    }
  };
  export const incPointFiveFifty = (state, setter) => {
    if(isNaN(state)){
      return setter(0)
    }
    if (state <=50  ) {
        setter(Number(state) + .5);
    }
  };

  export const decPointFive = (state, setter) => {
    if (state > 1) {
        setter(state - .5);
    }
  }


