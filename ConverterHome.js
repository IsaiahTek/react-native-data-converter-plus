import React, {useState, useEffect} from 'react'

import { TouchableHighlight, Text, useColorScheme, View}from "react-native"

require("./helpers")
import { AngleConverter, AreaConverter, DataConverter, LengthConverter, MassConverter, TemperatureConverter, TimeConverter, VolumeConverter
} from "./converters/converters"

import styles from './styles'

import { CustomSelectButton, SelectableList, SelectorModal, InputField } from './components/custom-components'
const converters = [
    {name:'length', class:new LengthConverter()},
    {name:'area', class:new AreaConverter()},
    {name:'volume', class:new VolumeConverter()},
    {name:'mass', class:new MassConverter()},
    {name:'time', class:new TimeConverter()},
    {name:'angle', class:new AngleConverter()},
    {name:'temperature', class:new TemperatureConverter()},
    {name:'data', class:new DataConverter()}
]

const convertersNameList = converters.map((key)=>key.name)

const ConverterHome = (props)=>{
    const dayNightMode = useColorScheme();
    
    const [converterType, setConverterType] = useState("length");
    const converter = converters.__getWhereInnerKeyHasValue("name", converterType).class
    const [input1Unit, setInput1Unit] = useState(converter.base_from)
    const [input1, setInput1] = useState(0)
    const [input2Unit, setInput2Unit] = useState(converter.base_to) 
    const [input2, setInput2] = useState(0)
    const [showConvertersListModalVisibility, setConvertersListModalVisibility] = useState(false)
    useEffect(()=>{
        setInput1Unit(converter.base_from)
        setInput2Unit(converter.base_to)
    }, [converterType])
    useEffect(()=>{
        convert1(input1)
    }, [input1Unit])
    useEffect(()=>{
        convert2(input2)
    }, [input2Unit])
    
    const convert1 = (value)=>{
        setInput1(value)
        setInput2(new converter.constructor(input1Unit, input2Unit, value).convert().toString())
    }
    const convert2 = (value)=>{
        setInput2(value)
        setInput1(new converter.constructor(input2Unit, input1Unit, value).convert())
    }
    const unitsList = converter.units
    return(
        <>
            <View style={styles.appBarStyle}>
                <View>
                    <Text style={{color:"yellow", fontSize:18}}>{converterType.toUpperCase()}</Text>
                    <Text style={{color:"white", fontSize:10}}>Converter</Text>
                </View>
                <TouchableHighlight activeOpacity={0.3} underlayColor="yellow" style={{backgroundColor:"yellow", padding:10, borderRadius:10}} onPress={()=>{setConvertersListModalVisibility(true)}}>
                    <Text style={{color:"purple"}}>Change</Text>
                </TouchableHighlight>
            </View>
            <View contentInsetAdjustmentBehavior="automatic" style={{paddingHorizontal:15}}>
                <SelectorModal modalState={showConvertersListModalVisibility} setModalVisibility={setConvertersListModalVisibility} >
                    <SelectableList
                        closeModalHandler={setConvertersListModalVisibility}
                        action={setConverterType}
                        arrayList={convertersNameList} />
                </SelectorModal>

                <View style={styles.verticalCenteredView}>
                    <InputField input={input1} convert={convert1} inputUnit={input1Unit} >
                        <CustomSelectButton arrayList={unitsList} handleSelectValueUpdate={setInput1Unit}>
                            <Text style={{textAlign:"center", fontSize:18, color:"yellow"}}>{input1Unit}</Text>
                        </CustomSelectButton>
                    </InputField>
                    <View  style={[styles.marginTop, styles.marginBottom]}/>
                    <InputField input={input2} convert={convert2} inputUnit={input2Unit}>
                        <CustomSelectButton arrayList={unitsList} handleSelectValueUpdate={setInput2Unit}>
                            <Text style={{textAlign:"center", fontSize:18, color:"yellow"}}>{input2Unit}</Text>
                        </CustomSelectButton>
                    </InputField>
                </View>
            </View>
        </>
    )
}
export default ConverterHome