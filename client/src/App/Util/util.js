


    export function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    export function capitalizeWDash(string){
        return string.replace(/\-[a-z]/g, match => match.toUpperCase())
    }

const utils = {
    capitalize: capitalize,
    capitalizeWDash: capitalizeWDash
};

export default utils;



