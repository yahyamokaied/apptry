import React, { useEffect } from "react";
import { FlatList, StyleSheet, View, Text, ActivityIndicator, Button } from "react-native";

import useApi from "../api/useApi";
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
          <Text>Couldn't fetch data from server.</Text>
          <Text>{getListingsApi.error}</Text>
          <Button title="Try Again" onPress={getListingsApi.request} />
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
    justifyContent: 'center',
    alignItems:'center',
    height: 400,
    width:250,
    padding: 20,
  },
});

export default ListScreen;