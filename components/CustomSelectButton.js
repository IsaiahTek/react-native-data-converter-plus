import React, {useState} from "react"
import {TouchableHighlight} from "react-native"
import SelectableList from "./SelectableList"
import SelectorModal from "./SelectorModal"
export const CustomSelectButton = (props)=>{
    const handleSelectValueUpdate = props.handleSelectValueUpdate
    const [unitsListModalVisibility, setUnitsListModalVisibility] = useState(false)
    return(
        <>
            <TouchableHighlight activeOpacity={0.4} underlayColor="#51067EDD" style={{backgroundColor:"#51067E", paddingVertical:22, borderBottomRightRadius:90, borderTopRightRadius:90, elevation:10}} onPress={()=>{setUnitsListModalVisibility(true)}}>
                {props.children}
            </TouchableHighlight>
            <SelectorModal modalState={unitsListModalVisibility} setModalVisibility={setUnitsListModalVisibility}>
                <SelectableList arrayList={props.arrayList} action={handleSelectValueUpdate} closeModalHandler={setUnitsListModalVisibility} />
            </SelectorModal>
        </>
    )
}
