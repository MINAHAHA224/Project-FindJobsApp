import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useState } from 'react'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const jobsTitle = ["Full-time", "Part-time", "Contractor", "Remote", "Hybird"];
  const [activeJobType, setActiveJobType] = useState("");
  const router = useRouter();


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Helo Thai Cao</Text>
        <Text style={styles.welcomeMessage}>Find your perfect jobs</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            placeholder={"What are you looking for ?"}
            value=""
            onChange={() => { }}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode={"cover"}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobsTitle}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} >
              <Text style={styles.tabText(activeJobType, item)} onPress={() => {
                setActiveJobType(item),
                  router.push(`/search/${item}`)
              }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          keyExtractor={item => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome