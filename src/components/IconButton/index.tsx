import { FC } from "react"
import { StyleSheet, Text, View, ViewStyle } from "react-native"
import { purple7A, redC8, white } from "../../theme/Colors"
import { ElectricBolt, YellowStar } from "../../assets/images"
import Fonts from "../../assets/Fonts"

interface IconButtonProps {
    btnStyle?:ViewStyle
    bgColor?:string
    isStar:boolean,
    title:string
    isIcon:boolean
}

const IconButton:FC<IconButtonProps> = ({
    bgColor,
    isStar,
    title,
    btnStyle,
    isIcon
})=>{
    return (
    <View style={[styles.container,isStar ?{backgroundColor:redC8}:{backgroundColor:purple7A},btnStyle]}>
    {isIcon==true ?  isStar   ?<YellowStar height={10} width={10} style={{alignSelf:'center'}}/> :<ElectricBolt height={19} width={10}  style={{alignSelf:'center'}}/>:null}
        <Text style={styles.titleText}>{title}</Text>
    </View>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container:{
        height:25,
        flexDirection:'row',
        padding:5,
        paddingHorizontal:8,
        borderRadius:50,
    },
    titleText:{
        fontSize:12,
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        color:white,
        marginLeft:5
    }
})