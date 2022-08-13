
import Converter from './BaseConverter'

export class AngleConverter extends Converter{
	constructor(from, to, value){
		super(from, to, value)
		this.name='Angle Converter'
	}
	get units(){
		return ['rad', 'deg']
	}
	get base_from(){
		return 'deg'
	}
	get base_to(){
		return 'rad'
	}
	get base_rate(){
		return {'deg':1, 'rad':Math.PI/180}
	}
}

export class AreaConverter extends Converter{
	constructor(from, to, value){
		super(from, to, value)
		this.name='Area Converter'
	}
	get units(){
		return ['mm sqr', 'cm sqr', 'dm sqr', 'm sqr', 'km sqr']
	}
	get base_from(){
		return 'mm sqr'
	}
	get base_to(){
		return 'm sqr'
	}
	get base_rate(){
		return {'mm sqr':Math.pow(1000,2), 'cm sqr':Math.pow(100,2), 'dm sqr':Math.pow(10,2), 'm sqr':Math.pow(1,2), 'km sqr':Math.pow(1000, -2)}
	}
}

export class DataConverter extends Converter{
	constructor(from, to, value){
		super(from, to, value)
		this.name = 'Data Converter';
	}
	get units(){
		return ['nibble','bit','byte','word','KB','KiB','MB','MiB','GB','GiB','TB','TiB','PB','PiB', 'EB','EiB', 'ZB','ZiB', 'YB','YiB']
	}
	get base_from(){ return this.units[5]}
	get base_to(){ return this.units[2]}
	get base_rate(){
		return {
			'nibble':2,
			'bit':8,
			'byte':1,
			'word':1/2,
			'KB':1/1000,
			'KiB':1/1024,
			'MB':1/Math.pow(1000, 2),
			'MiB':1/Math.pow(1024, 2),
			'GB':1/Math.pow(1000,3),
			'GiB':1/Math.pow(1024,3),
			'TB':1/Math.pow(1000,4),
			'TiB':1/Math.pow(1024,4),
			'PB':1/Math.pow(1000,5),
			'PiB':1/Math.pow(1024,5),
			'EB':1/Math.pow(1000,6),
			'EiB':1/Math.pow(1024,6),
			'ZB':1/Math.pow(1000,7),
			'ZiB':1/Math.pow(1024,7),
			'YB':1/Math.pow(1000,8),
			'YiB':1/Math.pow(1024,8)
		}
	}
}

export class LengthConverter extends Converter{
	constructor(from, to, value){
		super(from, to, value)
		this.name = 'Length Converter';
	}
	get units(){
		return ['mm','cm','dm','m','km','inch','yard','feet','mile','pt','px','dd','Q','H'
		]
	}
	get base_from(){ return 'cm'}
	get base_to(){ return 'm'}
	get base_rate(){
		return {'mm':1000,'cm':100,'dm':10,'m':1,'km':0.001,'inch':39.37,'yard':1.094,'feet':3.281,'mile':0.001,'pt':2834.646,'px':3780,'dd':2660.14,'Q':4000,'H':4000,
		}
	}
}

export class MassConverter extends Converter{
	constructor(name, from, to, value){
		super(name, from, to, value)
		this.name='Mass Converter'
	}
	get units(){
		return ['mg', 'cg', 'dg', 'g', 'kg', 'tone']
	}
	get base_from(){
		return 'mg'
	}
	get base_to(){
		return 'kg'
	}
	get base_rate(){
		return {'mg':1000, 'cg':100, 'dg':10, 'g':1, 'kg':1/1000, 'tone':1/1000000}
	}
}

export class TemperatureConverter{
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

export class TimeConverter extends Converter{
	constructor(from, to, value){
		super(from, to, value)
		this.name= 'Time Converter'
	}
	get units(){
		return ['sec','min','hr','day','week',]
	}
	get base_from(){ return 'sec'}
	get base_to(){ return 'min'}
	get base_rate(){
		return {'sec':60,'min':1,'hr':1/60,'day':1/(24*60),'week':1/(24*60*7)
		}
	}
}

export class VolumeConverter extends Converter{
	constructor(from, to, value){
		super(from, to, value)
		this.name='Volume Converter'
	}
	get units(){
		return ['cl', 'ml', 'cubic cm', 'litre', 'cubic m', 'dl']
	}
	get base_from(){
		return 'cl'
	}
	get base_to(){
		return 'litre'
	}
	get base_rate(){
		return {'ml':1000, 'cl':100, 'dl':10, 'litre':1, 'cubic cm':1, 'cubic m':0.001}
	}
}
// My WhatsApp Link: wa.me/2347062860995