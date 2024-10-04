import { React, useState } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';

const Popularjobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const error = false
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ?
          <ActivityIndicator size={"large"} color={COLORS.primary} /> :
          error ?
            <Text>Something went wrong!!!</Text> :
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => (

                <PopularJobCard item={item} />
              )}

              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
        }
      </View>
    </View>
  )
}

export default Popularjobs