import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";
import BottomSheet from "./bottom-sheet/BottomSheet";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Icons, { icons } from './src/components/Icons'

export default function App() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Provider>
      <View
        style={[
          styles.container,
          { backgroundColor: isOpen ? "gray" : "white" },
        ]}
      >
        <Text style={[styles.titles, { marginBottom: 20 }]} onPress={() => setShow(true)} >Your Shortcuts</Text>
        <BottomSheet
          show={show}
          onDismiss={() => {
            setShow(false);
          }}
          enableBackdropDismiss
        >
          <ScrollView contentContainerStyle={{ padding: 16 }}>
            <View style={styles.contentContainer}>
              <Text style={[styles.titles, { marginBottom: 20 }]
              }
              >Your Shortcuts</Text>
              <View style={styles.shortcut}>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Feather} name="phone-call" color={'white'} />
                  </View>
                  <Text style={styles.title}>Contact Us</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Entypo} name="dots-three-vertical" />
                  </View>
                  <Text style={styles.title}>Food & Grocery</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Feather} name="search" />
                  </View>
                  <Text style={styles.title}>Explore B-Prime</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Entypo} name="dots-three-vertical" />
                  </View>
                  <Text style={styles.title}>Bloozon Pharmacy</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Text style={styles.productName}>Top Brands</Text>
                  </View>
                  <Text style={styles.title}>Top Brands</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Entypo} name="home" />
                  </View>
                  <Text style={styles.title}>Luxury Store</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Entypo} name="box" />
                  </View>
                  <Text style={styles.title}>Bloozon Product</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Text style={styles.productName}>Fan Shop</Text>
                  </View>
                  <Text style={styles.title}>Fan Shop</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Entypo} name="dots-three-vertical" />
                  </View>
                  <Text style={styles.title}>Todays Deals</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Feather} name="help-circle" />
                  </View>
                  <Text style={styles.title}>Help Directive</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Text style={styles.productName}>Bloozon Business</Text>
                  </View>
                  <Text style={styles.title}>Join Bloozon Business</Text>
                </View>
                <View style={styles.box} >
                  <View style={styles.card}>
                    <Icons icon={icons.Entypo} name="shopping-bag" />
                  </View>
                  <Text style={styles.title}>Used Item</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </BottomSheet>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  shortcut: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  box: {
    width: '25%',
    height: '20%',
    margin: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: "center",
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#40E0D0',
    padding: 12
  },
  titles: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 11,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: "center",
  },
  productName: {
    width: 50,
    height: 50,
    fontWeight: "900",
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: "center",
    padding: 2
  }
});