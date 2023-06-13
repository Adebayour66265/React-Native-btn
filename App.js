import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Icons, { icons } from './src/components/Icons'


export default function App() {

  const { width } = useWindowDimensions();
  const [theme, setTheme] = useState("dim");
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["52%", "75%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }



  return (
    <BottomSheetModalProvider>
      <View
        style={[
          styles.container,
          { backgroundColor: isOpen ? "gray" : "white" },
        ]}
      >
        <Text style={[styles.title, { marginBottom: 20 }]} onPress={handlePresentModal} >Your Shortcuts</Text>
        <StatusBar style="auto" />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backgroundStyle={{ borderRadius: 10 }}
          onDismiss={() => setIsOpen(true)}
        >
          <View style={styles.contentContainer}>
            <Text style={[styles.titles, { marginBottom: 20 }]}>Your Shortcuts </Text>
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
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
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
    padding: 10
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
