
import Converter from './BaseConverter'

class AngleConverter extends Converter{
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
export default AngleConverter

// My WhatsApp Link: wa.me/2347062860995