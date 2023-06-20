import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Props } from "./types";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
	container: {
		display: "flex",
	},
	content: {
		margin: 20,
	},
	upperContent: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	downContent: {
		marginLeft: 8,
	},
	creditCardText: {
		fontWeight: "600",
		fontSize: 20,
	},
	billText: {
		color: "#9c9fa8",
		fontWeight: "600",
		fontSize: 16,
		marginTop: 8,
		marginBottom: 8,
	},
	availableValue: {
		color: "#9c9fa8",
		fontWeight: "400",
		fontSize: 14,
		marginTop: 12,
	},
});

const CreditCard: React.FC<Props> = ({ bill, limit }) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					borderTopColor: "#f5f5f5",
					borderTopWidth: StyleSheet.hairlineWidth,
				}}
			/>
			<TouchableOpacity>
				<View style={styles.content}>
					<View style={styles.upperContent}>
						<Text style={styles.creditCardText}>
							Cartão de crédito
						</Text>
						<Feather name="chevron-right" size={24} color="black" />
					</View>
					<View style={styles.downContent}>
						<Text style={styles.billText}>Fatura atual</Text>
						<Text style={styles.creditCardText}>
							R$ {bill ? String(bill).replace(".", ",") : "0,00"}
						</Text>
						<Text style={styles.availableValue}>
							Limite disponível de R${" "}
							{limit ? String(limit).replace(".", ",") : "0,00"}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default CreditCard;
