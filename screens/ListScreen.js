import React,{useEffect} from "react";
import { FlatList, StyleSheet,View,Text,ActivityIndicator,Button } from "react-native";

import useApi from "./useApi";
import listingsApi from "../api/listings";

function ListScreen() {
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
      }, []);


  return (
   <View style={styles.screen}>
      {getListingsApi.error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Text>{getListingsApi.error}</Text>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator animating={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Text>
            title={item.title}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    justifyContent: 'center',
    alignItems:'center'
    ,flex:1
  },
});

export default ListScreen;