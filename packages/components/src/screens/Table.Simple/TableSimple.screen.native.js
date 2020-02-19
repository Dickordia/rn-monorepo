import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TableSimpleScreen() {
    const [tableHead, setTableHead] = useState(['Head', 'Head2', 'Head3', 'Head4'])
    const [tableData, setTableData] = useState([
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
    ])

    return (
        <View style={{ flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#23315f' }}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#23549d' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={tableData} textStyle={styles.text} />
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#008ba7' },
    head: { height: 40, backgroundColor: '#23315f' },
    text: { margin: 6, color: 'white' }
});