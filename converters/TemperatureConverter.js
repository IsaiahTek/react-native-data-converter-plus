class TemperatureConverter{
	constructor(from, to, value){
		this.name = 'Temperature Converter';
		this.from = from;
		this.to = to;
		this.value = value;
	}
	get units(){
		return ['C', 'K', 'F']
	}
	get base_from(){
		return 'C'
	}
	get base_to(){
		return 'K'
	}
	get base_rate(){
		return {'C':0, 'K':273, 'F':1.8}
	}
	convert_to_base(){
		return this.intermediate = this.value - this.base_rate[this.from];
	}
	convert_from_base_to_required(){
		return this.intermediate + this.base_rate[this.to]
	}
	convert_from_base_to_farenheit(){
		return this.intermediate*this.base_rate[this.to] + 32
	}
	convert_from_farenheit_to_base(){
		return this.intermediate = (this.value - 32)/this.base_rate[this.from]
	}
	convert(){
		let result = 0
		if(this.to != 'F' && this.from !='F'){
			this.convert_to_base()
			result = this.convert_from_base_to_required();
		}else if(this.to == 'F' && this.from != 'F'){
			this.convert_to_base()
			result = this.convert_from_base_to_farenheit();
		}else if(this.to != 'F' && this.from =='F'){
			this.convert_from_farenheit_to_base()
			result = this.convert_from_base_to_required()
		}
		else if(this.to == 'F' && this.from == 'F'){
			result = this.value;
		}
		return Math.round(result*1000)/1000
	}
}
export default TemperatureConverter