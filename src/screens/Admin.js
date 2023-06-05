import React, { useState, useEffect } from "react";
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../features/userSlice";
import { addQuestion, getQuestions, selectQuestions } from "../features/questionsSlice";
import { List, TextInput, Surface } from "react-native-paper";
import { Button } from "react-native-paper";
import { fbSignOut } from "../app/firebase";
import CustomListAccordion from "../components/CustomListAccordion";

const Admin = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const [modalVisible, setModalVisible] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  const handleLogout = () => {
    dispatch(setLoading(true));
    fbSignOut();
  };

  const handleAddQuestion = () => {
    dispatch(addQuestion(newQuestion)).then(() => {
      setModalVisible(false);
      setNewQuestion("");
    });
  };

  const handleRefresh = () => {
    dispatch(getQuestions());
  };

  const renderItem = ({ item }) => (
    <CustomListAccordion item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <Surface style={styles.surface} elevation={4}>
          <Text style={styles.modalText}>Add new question to the survey</Text>
          <View style={{ width: "100%" }}>
            <TextInput
              label="New Question"
              value={newQuestion}
              onChangeText={(text) => setNewQuestion(text)}
              style={{ marginBottom: 40 }}
            />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button mode="contained" onPress={handleAddQuestion}>
              Add
            </Button>
            <Button mode="outlined" onPress={() => setModalVisible(false)}>
              Cancel
            </Button>
          </View>
        </Surface>
      </Modal>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Survey Questions</Text>
        }
      />
      <View style={styles.footer}>
        <Button
          icon={"plus"}
          mode="contained"
          onPress={() => setModalVisible(true)}
        >
          Add New
        </Button>
        <Button
          icon={"refresh"}
          mode="outlined"
          onPress={handleRefresh}
        >
          Refresh
        </Button>
        <Button icon={"logout"} mode="outlined" onPress={handleLogout}>
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    marginHorizontal: 16,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#EBE5EE",
    borderTopColor: "#000",
    borderTopWidth: 1,
  },
  surface: {
    padding: 12,
    height: 280,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Admin;