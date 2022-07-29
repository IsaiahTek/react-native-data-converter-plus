import Converter from './BaseConverter'
class DataConverter extends Converter{
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
export default DataConverter