import React, { useState, useEffect } from 'react';
import { Table, Row } from 'react-native-table-component';
import {Button, View, Text, StyleSheet, SafeAreaView,TouchableOpacity, ScrollView,TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const URL = "http://13.233.26.160:3002/leads/64fc4c8e75cbefda670bffc4";

const DetailScreen = ({navigation}) => {
  const tableHead = ['#', 'ID', 'Name', 'Phone'];
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);
  const [serviceHistory, setServiceHistory] = useState([{"key": "date", "value": "1-2-2023"}, {"key": "task", "value": "Notes 123"}, {"key": "description", "value": "Need to update the pesticide"}]);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKey, setSearchKey] = useState('name'); // Set your initial search key here
  const searchOptions = ['name', 'id', 'city', 'phone'];
  useEffect(() => {
    if (tableData.length === 0) {
      axios.get(URL)
        .then(response => {
          if (response.status !== 401) {
            setTableData(response.data);
            setData(response.data);
           
            // if(response.data.serviceHistory)
            {
            const sh = Object.keys(response.data.serviceHistory).map((key) => ({
                key: key,
                value: response.data.serviceHistory[key],
              }));
             setServiceHistory(sh) 
             console.log(sh)
            }
          } else {
            setTableData([]);
            setData(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);
  const handleSearchChange = (text) => {
    setSearchQuery(text);
    const filteredResults = data.filter((item) =>
     item?.[searchKey]?.toLowerCase().includes(text.toLowerCase())
   );
      setTableData(filteredResults)
    // Implement your search logic here
  };

  const handleDropdownChange = (itemValue) => {
    setSearchKey(itemValue);
    // Implement your logic for handling dropdown change
  };
  const handleRowClick = (index) => {
    setExpandedRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <SafeAreaView style={styles.container}>
         {/* <View>
      <View style={styles.segment}>
       
        <Picker
          selectedValue={searchKey}
          onValueChange={(itemValue) => handleDropdownChange(itemValue)}>
          {searchOptions.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>

        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => handleSearchChange(text)}
        />
       
      </View>
     
    </View> */}
     
    
        <ScrollView style={styles.scrollView}>
       
   
            <View style={styles.expandedContent}>
                <Text style={styles.cell}>Id: {tableData.id}</Text>
                <Text style={styles.cell}>Name: {tableData.name}</Text>
                <Text style={styles.cell}>Phone: {tableData.phone}</Text>
                <Text style={styles.cell}>Address: {tableData.address}</Text>
                <Text style={styles.cell}>City: {tableData.city}</Text>
                <Text style={styles.cell}>Person To Contact: {tableData.personToContact}</Text>
                <Text style={styles.cell}>Person To Contact Phone: {tableData.personToContactPhone}</Text>
                <Text style={styles.cell}>serviceBeginDate: {tableData.serviceBeginDate}</Text>
                <Text style={styles.cell}>serviceExpirationDate: {tableData.serviceExpirationDate}</Text>
                <Text style={styles.cell}>pestsToControl: {tableData.pestsToControl}</Text>
                <Text style={styles.cell}>serviceFrequency: {tableData.serviceFrequency}</Text>
                <Text style={styles.cell}>propertyType: {tableData.propertyType}</Text>
                <Text style={styles.cell}>reneval: {tableData.reneval}</Text>
                <Text style={styles.cell}>paymentTerms: {tableData.paymentTerms}</Text>
                <Text style={styles.cell}>billingInstructions: {tableData.billingInstructions}</Text>
                <Text style={styles.cell}>Reneval: {tableData.Reneval}</Text>
                
                <ScrollView style={styles.scrollView}>
                {serviceHistory.map((e, i) => (
                    <React.Fragment key={i}>
                    <Text>{e.key}: {e.value}</Text>
                    </React.Fragment>
                ))}
                </ScrollView>
             
                  <Button
                    title="Insert into google calendar"
                    onPress={() => navigation.navigate('Contracts')}
                  />

                </View>
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
});


export default DetailScreen;