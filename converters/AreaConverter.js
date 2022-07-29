import Converter from './BaseConverter'
class AreaConverter extends Converter{
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
export default AreaConverter