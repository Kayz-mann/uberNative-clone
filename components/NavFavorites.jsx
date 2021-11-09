import React from 'react'
import { FlatList, Touchable, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK",
    },
];

const NavFavorites = () => {
    return (
        <View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                // thin border line with tw and inline
                ItemSeparatorComponent={() => (
                    <View style={[tw`bg-gray-200`, {height: 0.5}]} />
                )}
                renderItem={({item: { location,destination, icon}}) => (
                    <TouchableOpacity style={tw`flex-row items=center p-5`}>
                        <Icon 
                            style={tw`mr-r-4 rounded-full bg-gray-300 p-3`}
                            name={icon}
                            type="ionicon"
                            color="white"
                            size={18}
                        />
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </TouchableOpacity>
            )}
            />
        </View>
    )
}

export default NavFavorites
