import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from '../api'
import { setDestination } from '../slices/navSlice'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw `bg-white flex-1`}>
            <Text style={tw `text-center py-5 text-xl`}>Good day, User</Text>
            <View style={tw `border-t border-gray-200 flex-shrink` }>
               <View>
                   <GooglePlacesAutocomplete 
                   onPress={(data, details = null) =>{
                        dispatch(
                            setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }))
                            navigation.navigate("RideOptionsCaard")
                        }}
                        placeholder="Where to?" 
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        returnKeyType={"search"}
                        minLength={2}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                   />
               </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard


const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 28,
        paddingBottom: 0,
    },
})
