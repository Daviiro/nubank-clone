import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ItemProps } from "./types";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		width: 80,
		height: 128,
	},
	circleShape: {
		width: 80,
		height: 80,
		borderRadius: 80 / 2,
		backgroundColor: "#efefef",
		justifyContent: "center",
		alignItems: "center",
	},
	descriptionText: {
		fontSize: 14,
		fontWeight: "600",
	},
});

const FeatureItem: React.FC<ItemProps> = ({ name, children }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.circleShape}>{children}</View>
			<Text style={styles.descriptionText}>{name}</Text>
		</TouchableOpacity>
	);
};

export default FeatureItem;
