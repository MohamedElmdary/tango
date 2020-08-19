import React from "react";
import { FlatList } from "react-native-gesture-handler";

import Layout from "../components/Layout";
import { calls } from "../store";
import Call from "../components/CallScreen/Call";

const CallScreen: React.FC = () => {
  return (
    <Layout title="Call">
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={calls}
        renderItem={({ item }) => <Call call={item} key={item.id} />}
        keyExtractor={({ id }) => id.toString()}
      />
    </Layout>
  );
};

export default CallScreen;
