import React, { useState, useEffect } from 'react';
import {Button, View, Text, StyleSheet, SafeAreaView, ScrollView,TextInput,Modal } from 'react-native';
import axios from 'axios';



const DetailScreen = ({route}) => {
  const [data, setData] = useState([]);
  const [serviceHistory, setServiceHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const id = route.params ? route.params.data : null;
  const URL = "http://13.233.26.160:3002/leads/" + id;
  const SERVICE_HISTORY_URL = "http://13.233.26.160:3002/leads/servicehistory/" + id;
  useEffect(() => {
   console.log("inside useeffect 1")
      axios.get(URL)
        .then(response => {
          if (response.status !== 401) {
           
            setData(response.data);
            const sh2 = []
            response.data.serviceHistory.map(e=>{
                const sh = Object.keys(e).map((key) => ({
                  key: key,
                  value: e[key],
                }));
                console.log("sh",sh)
                sh2.push(sh)
            })
            console.log("sh2",sh2)
            setServiceHistory(sh2) 
          
          } else {
            setData([]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    
  }, [id]);



  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const  handleSubmit = async () => {
    // Handle the submission of heading and description here
    console.log('Heading:', heading);
    console.log('Description:', description);
    const values = {
      "serviceHistory":
      {
          "Task":heading,
          "Description":description
      }
  };
    const response = await axios.patch(SERVICE_HISTORY_URL, values);
    console.log("response",response)
    closeModal();
  };
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
         
            <View style={styles.expandedContent}>
                <Text style={styles.cell}>Id: {data.id}</Text>
                <Text style={styles.cell}>Name: {data.name}</Text>
                <Text style={styles.cell}>Phone: {data.phone}</Text>
                <Text style={styles.cell}>Address: {data.address}</Text>
                <Text style={styles.cell}>City: {data.city}</Text>
                <Text style={styles.cell}>Person To Contact: {data.personToContact}</Text>
                <Text style={styles.cell}>Person To Contact Phone: {data.personToContactPhone}</Text>
                <Text style={styles.cell}>serviceBeginDate: {data.serviceBeginDate}</Text>
                <Text style={styles.cell}>serviceExpirationDate: {data.serviceExpirationDate}</Text>
                <Text style={styles.cell}>pestsToControl: {data.pestsToControl}</Text>
                <Text style={styles.cell}>serviceFrequency: {data.serviceFrequency}</Text>
                <Text style={styles.cell}>propertyType: {data.propertyType}</Text>
                <Text style={styles.cell}>reneval: {data.reneval}</Text>
                <Text style={styles.cell}>paymentTerms: {data.paymentTerms}</Text>
                <Text style={styles.cell}>billingInstructions: {data.billingInstructions}</Text>
                <Text style={styles.cell}>Reneval: {data.Reneval}</Text>
                <Text style={styles.cell}>Service History:</Text>
                <ScrollView style={styles.scrollView}>
                {serviceHistory.map((e, i) => (
                  <View style={styles.segment}>
                    <Text>{i+1}:-</Text>
                    {Array.isArray(e) && e.map((e1, i1) => (
                    <React.Fragment key={i1}>
                      <Text>   {e1.key}: {e1.value}</Text>
                    </React.Fragment>
                    ))}
                    </View>
                ))}
                </ScrollView>
                <View style={styles.buttonContainer}>

            <Button title="Enter Service History" onPress={openModal} />
          </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Enter Details</Text>

            <TextInput
              placeholder="Task"
              value={heading}
              onChangeText={(text) => setHeading(text)}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />

            <TextInput
              placeholder="Description"
              value={description}
              onChangeText={(text) => setDescription(text)}
              multiline
              style={{ borderBottomWidth: 1, marginBottom: 20 }}
            />
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleSubmit} />
            <Button title="Close" onPress={closeModal} />
          </View>
         
          </View>
        </View>
      </Modal>
    </View>

                {/* </View> */}
         </ScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 1, paddingTop: 1, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { fontWeight: 'bold', textAlign: 'center' },
  row: { height: 40, backgroundColor: '#fff' },
  rowText: { textAlign: 'center' },
  expandedRow: { backgroundColor: '#e3f1fc' },
  expandedContent: { backgroundColor: '#f2f2f2', padding: 10 },
  cell: { marginBottom: 5 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});


export default DetailScreen;