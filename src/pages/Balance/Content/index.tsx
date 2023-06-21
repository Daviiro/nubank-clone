import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../../../App";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
		display: "flex",
		flexDirection: "column",
	},
	availableValue: {
		color: "#9c9fa8",
		fontWeight: "600",
		fontSize: 12,
	},
	valueText: {
		fontWeight: "600",
		fontSize: 24,
	},
});

const Content: React.FC = () => {
	const route = useRoute<RouteProp<StackParamList, "Balance">>();
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.availableValue}>Saldo disponível</Text>
				<Text style={styles.valueText}>
					R${" "}
					{route.params?.balanceValue
						? String(route.params.balanceValue).replace(".", ",")
						: "0,00"}
				</Text>
			</View>
		</View>
	);
};

export default Content;
