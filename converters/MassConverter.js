import Converter from './BaseConverter'
class MassConverter extends Converter{
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
export default MassConverter