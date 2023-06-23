import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../pages/Home";
import TabBar from "../TabBar";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTabs: React.FC = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#121212",
			}}
			tabBar={(props) => <TabBar {...props} />}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					title: "compare-arrows",
				}}
			/>
			<Tab.Screen
				name="Home2"
				component={Home}
				options={{
					title: "attach-money",
				}}
			/>
			<Tab.Screen
				name="Home3"
				component={Home}
				options={{
					title: "storefront",
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTabs;
