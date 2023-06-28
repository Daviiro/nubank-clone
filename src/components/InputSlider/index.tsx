import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Svg, { Line } from "react-native-svg";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {},
	track: {
		height: 8,
		backgroundColor: "#aaadb2",
		borderRadius: 8 / 2,
	},
	svgContainer: {
		marginTop: -12,
	},
	labelsContainer: {
		width: windowWidth - 40,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 12,
	},
	label: {
		color: "#777",
	},
});

interface Props {
	min: number;
	max: number;
	steps?: number;
	onChangeValue?: void | ((limite: any) => void);
}

const KnobComponent = () => {
	return <PanGestureHandler></PanGestureHandler>;
};

const InputSlider: React.FC<Props> = ({ min, max, steps, onChangeValue }) => {
	return (
		<View style={[styles.container, { marginTop: windowHeight / 4 }]}>
			<View style={styles.labelsContainer}>
				<Text style={styles.label}>{min}</Text>
				<Text style={styles.label}>
					{String(max).replace(".", ",")}
				</Text>
			</View>
			<View style={styles.track}></View>
			<View style={styles.svgContainer}>
				<Svg height={16} width={windowWidth - 80}>
					<Line
						stroke={"#6bc758"}
						strokeWidth={8}
						x1={4}
						y1={8}
						x2={100}
						y2={8}
						strokeLinecap="round"
					/>
				</Svg>
			</View>
		</View>
	);
};

export default InputSlider;
