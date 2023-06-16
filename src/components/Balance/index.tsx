import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Props } from "./types";

const styles = StyleSheet.create({
	container: { padding: 20 },
	upperContent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	defaultText: {
		fontSize: 20,
		fontWeight: "600",
	},
	accountBalance: {
		fontSize: 24,
		fontWeight: "600",
	},
});

const Balance: React.FC<Props> = ({ balance }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<View style={styles.upperContent}>
					<Text style={styles.defaultText}>Conta</Text>
					<Feather name="chevron-right" size={24} color="black" />
				</View>
				<Text style={styles.accountBalance}>
					R$ {String(balance).replace(".", ",")}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Balance;
