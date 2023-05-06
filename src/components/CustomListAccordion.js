import React, { useState, useCallback } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, List } from 'react-native-paper';
import RatingStats from './RatingStats';
import { useDispatch } from 'react-redux';
import { deleteQuestion } from '../features/questionsSlice';

const CustomListAccordion = React.memo(({ item }) => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handlePress = useCallback(() => {
        setExpanded(prevExpanded => !prevExpanded);
    }, []);



    const handleDelete = () => {
        console.log("first")
        dispatch(deleteQuestion(item.id)).then(() => {
            setModalVisible(false)
        })
    }


    return (
        <View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <IconButton icon="alert" size={50} iconColor='#f4c008' />
                            <Text style={styles.modalText}>Are you sure you want to delete this question?</Text>
                            <Text style={styles.modalSubText}>This action is irreversible</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Button mode="outlined" onPress={handleDelete} style={{ marginRight: 10 }}>Yes</Button>
                                <Button mode="contained" onPress={() => setModalVisible(false)} style={{ marginLeft: 10 }}>No</Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            <List.Accordion
                title={item.text}
                expanded={expanded}
                onPress={handlePress}>
                <List.Item
                    title={<RatingStats data={item} />}
                />
                <List.Item
                    title="Delete"
                    onPress={() => setModalVisible(true)}
                    left={props => <List.Icon {...props} icon="delete" />}
                />
            </List.Accordion>
        </View>
    )
});

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    modalSubText: {
        fontSize: 14,
        marginBottom: 20,
    },
    title: {
        textAlign: 'center',
    }
});

export default CustomListAccordion;
