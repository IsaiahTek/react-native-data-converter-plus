import { AngleConverter, AreaConverter, DataConverter, LengthConverter, MassConverter, TemperatureConverter, TimeConverter, VolumeConverter
} from "./converters"
export default [
    {name:'length', class:new LengthConverter()},
    {name:'area', class:new AreaConverter()},
    {name:'volume', class:new VolumeConverter()},
    {name:'mass', class:new MassConverter()},
    {name:'time', class:new TimeConverter()},
    {name:'angle', class:new AngleConverter()},
    {name:'temperature', class:new TemperatureConverter()},
    {name:'data', class:new DataConverter()}
]