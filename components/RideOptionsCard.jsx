import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplayer: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplayer: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplayer: 1.75,
        image: "https://links.papareact.com/7pf"
    }
]
const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const SURGE_CHARGE_RATE = 1.5
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("NavigateCard")}
                //   if item is selected display gray bg
                  style={tw`absolute top-3 left-5 z-50 p-3 rounded-full ${ id === selected?.id && "bg-gray-200"}` }>
                  <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                {/* call the travel time using travel distance api */}
                <Text style={tw`text-center py-3 text-xl`}>
                    Select a Ride - {travelTimeInformation?.distance.text}
                </Text>
            </View>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item: {id, title, image, multiplier}, item}) =>(
                <TouchableOpacity 
                onPress={() => setSelected(item)}
                style={tw`flex-row justify-between items-center px-10`}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                        }}
                        source={{uri: image}} 
                    />
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>Travel time...{travelTimeInformation.duration.text} Travel time</Text>
                    </View>
                    <Text style={tw`text-xl`}>
                        {new Intl.NumberFormat('en-gb', {
                            style: 'currency',
                            currency: 'NGN'
                        }).format(
                            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/100
                        )}
                    </Text>
                </TouchableOpacity>
              )} 
           />
           <View style={tw`mt-auto border-t border-gray-200`}>
               <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                   {/* display selected ride title below */}
                  <Text style={tw`text-center text-white text-xl`}>
                      Choose {selected?.title}
                  </Text>
               </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard
