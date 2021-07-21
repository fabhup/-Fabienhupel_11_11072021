
export function cleanStringForLink(str) {
	return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ' ]/g, "").replace(/  +/g, ' ').replace(/[ ]/g, "-");		
}