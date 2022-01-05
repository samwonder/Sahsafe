import { BackHandler } from "react-native";

export default backKeyPress = async (onBackPress) => {
    try {
        const backAction = () => {
            onBackPress()
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    } catch (error) {
        console.log(error)
        return false;
    }
}