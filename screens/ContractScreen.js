import React, { useState, useEffect } from 'react';
import { Table, Row } from 'react-native-table-component';
import {Button, View, Text, StyleSheet, SafeAreaView,TouchableOpacity, ScrollView,TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
const URL = "http://13.233.26.160:3002/contracts";

const ContractScreen = ({navigation}) => {
  const tableHead = ['#', 'ID', 'Name', 'Phone'];
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKey, setSearchKey] = useState('name'); // Set your initial search key here
  const searchOptions = ['name', 'id', 'city', 'phone'];
  const isFocused = useIsFocused();
  useEffect(() => {
    if (tableData.length === 0 || isFocused) {
      axios.get(URL)
        .then(response => {
          if (response.status !== 401) {
            console.log("response.data",response.data)
            setTableData(response.data);
            setData(response.data);
          } else {
            setTableData([]);
            setData(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [isFocused]);
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
         <View>
      <View style={styles.segment}>
        {/* <Text style={styles.label}>Search Box</Text> */}
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
        {/* <Text style={styles.header}>Customer Table</Text> */}
      </View>
      {/* Add your table component here */}
    </View>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
        <ScrollView style={styles.scrollView}>
          {tableData.map((rowData, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <TouchableOpacity onPress={() => handleRowClick(rowIndex)}>
                <Row
                  data={[
                    rowIndex + 1,
                    'P' + rowIndex,
                    rowData.name,
                    rowData.phone
                  ]}
                  style={[
                    styles.row,
                    expandedRowIndex === rowIndex && styles.expandedRow,
                  ]}
                  textStyle={styles.rowText}
                />
              </TouchableOpacity>
              {expandedRowIndex === rowIndex && (
                 <ScrollView style={styles.scrollView}>
                <View style={styles.expandedContent}>
                  <Text style={styles.cell}>Name: {rowData.name}</Text>
                  <Text style={styles.cell}>Phone: {rowData.phone}</Text>
                  <Text style={styles.cell}>Address: {rowData.address}</Text>
                  <Text style={styles.cell}>City: {rowData.city}</Text>
                  <Text style={styles.cell}>Person To Contact: {rowData.personToContact}</Text>
                  <Text style={styles.cell}>Person To Contact Phone: {rowData.personToContactPhone}</Text>
                  {rowData.serviceHistory && <Text style={styles.cell}>Service History</Text>}
                  {
                    rowData.serviceHistory && Array.isArray(rowData.serviceHistory) && rowData.serviceHistory.map((e,i)=>{
                       const entries = Object.entries(e);
                       <Text style={styles.cell}>Service History </Text>
                        const ar = []
                        ar.push(<Text style={styles.cell}>{i+1} : </Text>)
                       entries.map(f=>
                         ar.push(<Text style={styles.cell}>       {f[0]} : {f[1]}</Text>)
                      )
                      
                     return ar;
                    })
                  }
                  {/* <Button
        title="Future Use"
        //onPress={() => navigation.navigate('Contracts')}
      /> */}
      
                </View>
                </ScrollView>
              )}
            </React.Fragment>
          ))}
        </ScrollView>
      </Table>
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


export default ContractScreen;