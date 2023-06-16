import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import FeaturesTab from "../../components/FeaturesTab";

export default function Home() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header user="David" />
			<Balance balance={800.25} />
			<FeaturesTab />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
