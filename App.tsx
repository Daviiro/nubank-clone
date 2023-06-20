import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Balance from "./src/pages/Balance";

export type StackParamList = {
	Home: undefined;
	Balance: { value: number };
};

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Balance" component={Balance} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
