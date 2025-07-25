import SQLite from'react-native-sqlite-storage';

SQLite.enablePromise(true);

export const getDBConnection = async () => {
    return SQLite.openDatabase({ name: 'alexandria.db', location: 'default'});
    
};