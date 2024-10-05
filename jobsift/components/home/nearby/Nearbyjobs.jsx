import { React, useState } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import { COLORS, SIZES } from '../../../constants';
import useFetch from '../../../hook/useFetch'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search', {
    query: "NodeJS",
    num_pages: 1
  })
  const handleCardPress = (job) => {
    router.push(`/job-details/${job.job_id}`);
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NearBy jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ?
          <ActivityIndicator size={"large"} color={COLORS.primary} /> :
          error ?
            <Text>Something went wrong!!!</Text> :
            (data?.map((job) => (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleCardPress={handleCardPress}
              />
            )))
        }
      </View>
    </View>
  )
}

export default Nearbyjobs