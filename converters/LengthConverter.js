import Converter from './BaseConverter'
class LengthConverter extends Converter{
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
export default LengthConverter