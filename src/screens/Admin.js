import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ChartBar from './adminStack/ChartBar';
import ChartPie from './adminStack/ChartPie';
import AdminEdit from './adminStack/AdminEdit';

const Tab = createBottomTabNavigator();
const Admin = () => {
    return (
        <Tab.Navigator
            initialRouteName="EditAdmin"
            screenOptions={{
                tabBarActiveTintColor: '#6750a4',
            }}
        >
            <Tab.Screen
                name="AdminEdit"
                component={AdminEdit}
                options={{
                    tabBarLabel: 'Edit',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="pencil" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ChartPie"
                component={ChartPie}
                options={{
                    tabBarLabel: 'Chart',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ChartBar"
                component={ChartBar}
                options={{
                    tabBarLabel: 'Bar Chart',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Admin