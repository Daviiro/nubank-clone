import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationHeader from "../../components/NavigationHeader";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../../../App";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		margin: 20,
	},
	billText: {
		fontSize: 16,
		alignSelf: "center",
		color: "red",
	},
	adjustLimit: {
		marginTop: 60,

		alignSelf: "center",
	},
	limitText: {
		fontSize: 16,
		color: "green",
	},
});

const AdjustLimit: React.FC = () => {
	const route = useRoute<RouteProp<StackParamList, "AdjustLimit">>();

	const [calculatedBill, setCalculatedBill] = useState(
		route.params?.bill ? route.params?.bill : 0
	);
	const [calculatedLimit, setCalculatedLimit] = useState(
		route.params?.limit ? route.params.limit - calculatedBill : 0
	);

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NavigationHeader screen="HomePage" />
			<View style={styles.content}>
				<Text style={styles.billText}>
					Fatura: R${" "}
					{calculatedBill
						? String(calculatedBill).replace(".", ",")
						: "0,00"}
				</Text>
				<View style={styles.adjustLimit}>
					<Text style={styles.limitText}>
						R${" "}
						{calculatedLimit
							? String(calculatedLimit).replace(".", ",")
							: "0,00"}{" "}
						disponível para uso
					</Text>
				</View>
			</View>
		</View>
	);
};

export default AdjustLimit;
