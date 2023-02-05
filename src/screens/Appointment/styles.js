import { StyleSheet } from "react-native";
import { COLORS, PADDINGS } from '../../constants/Constants'
import { RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: COLORS.white,
        paddingHorizontal: PADDINGS.mdPadding,
        paddingTop: '5%',
        alignItems: 'center',
        paddingBottom: '1%',
    }, arrowButtonStyle: {
        elevation: RFValue(3)
    }, textHeaderStyle: {
        marginLeft: RFValue(-25)
    }, afterHeaderMargin: {
        marginBottom: '10%'
    }, afterEachCardMargin: {
        marginBottom: '5%'
    }, scrollViewStyle: {
        backgroundColor: COLORS.white
    }

})
export default styles;