import Converter from './BaseConverter'
class VolumeConverter extends Converter{
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
export default VolumeConverter