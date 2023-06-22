import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../pages/Home";
import Balance from "../../pages/Balance";

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
		>
			<Tab.Screen name="Home" component={Home} />
		</Tab.Navigator>
	);
};

export default HomeTabs;
