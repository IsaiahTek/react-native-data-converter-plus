// This is the Base class that other classes will inherit from

class Converter {
	constructor(from, to, value) {
		this.from = from;
		this.to = to;
		this.value = value;
	}
	convert_to_base() {
		return this.intermediate = this.value / this.base_rate[this.from];
	}
	convert_from_base_to_required() {
		return this.intermediate * this.base_rate[this.to]
	}
	convert() {
		this.convert_to_base();
		return Math.round(this.convert_from_base_to_required()*1000)/1000;
	}
}
export default Converter

// My WhatsApp Link: wa.me/2347062860995