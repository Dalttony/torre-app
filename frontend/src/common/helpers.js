/**
 * validate if there are any element empty into the array
 * @param  {array} elements  Array of elements
 * @return {boolean}          True or False
 */
 export function validateAnyElementEmpty(data){
	return data.some((element) => {
		return (!element || 0 === element.trim().length);
	});
};

export const validateAtleastData = (atLeast) => {
	return (data) => {
		const validate = data.filter( ele => (!ele || 0 === ele.trim().length));
 		return validate.length == atLeast;
	};	
};

export const dateFormat = (date) =>{
    return new Date();
}

export const dateDiff = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return {
        milli: diffDays,
        day: diffDays
    };
}

export const dateDiffToday = (start) =>{
    return dateDiff(start, Date.now());
}