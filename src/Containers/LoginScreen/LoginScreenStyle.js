import { StyleSheet } from "react-native";
import { Colors, UtillSize } from "../../Themes";
const styles = StyleSheet.create({
    Container: {
        flex: 1, 
        backgroundColor: "#03abed"
    },
    button: {
        paddingHorizontal:15,
        paddingVertical:10,
        borderWidth:0.7,
        borderColor: 'red',
        borderRadius: 8,
        alignSelf:'center'
    },
    wrapHeader: {
        justifyContent:'center',
        alignItems:'center'
    },
    textTitleHeader: {
        fontFamily:'Cochin',
        letterSpacing: 3,
        fontWeight: '600',
        color:'#fff'
    },
    textDesHeader: {
        color: '#fff',
        letterSpacing: 5
    },
    wrapViewContent: {
        marginHorizontal: UtillSize.marginLogin
    },
    viewInput: {
        height: UtillSize.heightInput,
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#fff',
        marginBottom: 15
    },
    ButtonLogin: {
        backgroundColor: '#fff',
        height: UtillSize.heightInput,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    wrapTextForgot: {
        paddingVertical: 10,
        marginBottom: 10,
        alignItems:'flex-end'
    },
    textForGot: {
        color: "#fff",
        fontSize: UtillSize.memSizeText
    },
    textLogin: {
        color: Colors.mainColor,
        fontWeight: 'bold',
        fontSize: UtillSize.titleFontSize
    }
});
export default styles;