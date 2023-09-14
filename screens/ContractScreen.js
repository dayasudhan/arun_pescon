import React, { useState, useEffect } from 'react';
import { Table, Row } from 'react-native-table-component';
import {Button, View, Text, StyleSheet, SafeAreaView,TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const URL = "http://13.233.26.160:3002/leads";

const ContractScreen = ({navigation}) => {
  const tableHead = ['#', 'ID', 'Name', 'Phone'];
  const [tableData, setTableData] = useState([]);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  useEffect(() => {
    if (tableData.length === 0) {
      axios.get(URL)
        .then(response => {
          if (response.status !== 401) {
            setTableData(response.data);
          } else {
            setTableData([]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const handleRowClick = (index) => {
    setExpandedRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <SafeAreaView style={styles.container}>
     
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
                <View style={styles.expandedContent}>
                  <Text style={styles.cell}>Name: {rowData.name}</Text>
                  <Text style={styles.cell}>Phone: {rowData.phone}</Text>
                  <Text style={styles.cell}>Address: {rowData.address}</Text>
                  <Text style={styles.cell}>City: {rowData.city}</Text>
                  <Text style={styles.cell}>Person To Contact: {rowData.personToContact}</Text>
                  <Text style={styles.cell}>Person To Contact Phone: {rowData.personToContactPhone}</Text>
                  <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
                </View>
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