
import { Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator, RefreshControl, ScrollView } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'
import useFetch from '../../hook/useFetch';
import { COLORS, icons, SIZES } from '../../constants';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';


export default function JobDetails() {
    const router = useRouter();
    const params = useSearchParams();

    const { data, isLoading, error, reFetch } = useFetch('job-details', {
        // job_id là cái key VD : /search/${job_id} , còn cái params.id : là cái value được truyền vô cái key này
        job_id: params.id,

    })

    const tabs = ["About", "Qualifications", "Responsibilities"];
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState("About");

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        reFetch();
        setRefreshing(false);
    }, [])
    const displayTabContent = (activeTab) => {

        switch (activeTab) {
            case "About":
                return <JobAbout
                    info={data[0].job_description ?? " No data provide"} />;
                break;
            case "Qualifications":
                return <Specifics
                    title="Qualifications"
                    points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
                />;
                break;
            case "Responsibilities":
                return <Specifics
                    title="Responsibilities"
                    points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
                />;
                break;

            default:
                break;
        }
    }





    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.left} dimension={"60%"} handlePress={() => router.back()} />),
                    headerRight: () => (<ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"} />)
                }}
            />


            <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {isLoading ?
                    <ActivityIndicator size={"large"} color={COLORS.primary} /> :
                    error ?
                        <Text>Something went wrong</Text> :
                        data.length === 0 ?
                            <Text>No data</Text> :
                            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                                <Company data={data} />
                                <JobTabs
                                    tabs={tabs}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                                {displayTabContent(activeTab)}
                            </View>
                }
            </ScrollView>
            <JobFooter url={data[0]?.job_apply_link ?? ["N/A"]} />


        </SafeAreaView>
    );
}