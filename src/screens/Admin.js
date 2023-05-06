import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
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

  const handleLogout = () => {
    dispatch(setLoading(true));
    fbSignOut();
  };
  const handleAddQuestion = () => {
    dispatch(addQuestion(newQuestion)).then(() => {
      setModalVisible(false)
      setNewQuestion("")
    });
  };
  const handleRefresh = () => {
    dispatch(getQuestions())
  }
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
            <Button
              mode="outlined"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Cancel
            </Button>
          </View>
        </Surface>
        
      </Modal>
      <ScrollView style={{ flex: 1 }}>
        <List.Section title="Survey Questions">
          {questions.map((item) => (
            <CustomListAccordion item={item} key={item.id} />
          ))}
        </List.Section>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          icon={"plus"}
          mode="contained"
          onPress={() => setModalVisible(true)}
        >
          Add New
        </Button>
        <Button icon={"refresh"} mode="outlined" onPress={handleRefresh}>
          Refresh
        </Button>
        <Button icon={"logout"} mode="outlined" onPress={handleLogout}>
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
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
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 10,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    marginBottom: 25,
  },
  surface: {
    padding: 12,
    height: 280,
    backgroundColor: "#fff", // width: 80,
    margin: 10,
    marginTop: 30,
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
