import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

export default function Home() {
	return (
		<View style={styles.container}>
			<Header user="David" />
			<Text>Home da Aplicação!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
