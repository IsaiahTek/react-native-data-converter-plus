import Converter from './BaseConverter'

class TimeConverter extends Converter{
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
export default TimeConverter

// My WhatsApp Link: wa.me/2347062860995