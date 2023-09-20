import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export default isTablet = width >= 600 && height >= 600;