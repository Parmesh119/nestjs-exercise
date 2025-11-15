import pool from "./db.js";

async function testConnection() {
    try {
        const [rows] = await pool.execute('SELECT NOW() AS currentTime');
        console.log('Database connection successful. Current time:', rows[0].currentTime);
    } catch (error) {
        console.error('Database connection failed:', error);
    } finally {
        await pool.end();
    }
}

async function createDatabase() {
    try {
        await pool.execute('CREATE DATABASE IF NOT EXISTS testdb');
        console.log('Database created successfully.');
    } catch (error) {
        console.error('Error creating database:', error);
    } finally {
        await pool.end();
    }
}

async function showDatabases() {
    try {
        const [rows] = await pool.execute('SHOW DATABASES');
        console.log('Databases:', rows);
    } catch (error) {
        console.error('Error fetching databases:', error);
    } finally {
        await pool.end();
    }
}

async function createTable() {
    try {
        await pool.execute(`create table if not exists testdb.users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100)
        )`);
        console.log('Table created successfully.');
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        await pool.end();
    }
}

async function insertRecord() {
    try {
        const [result] = await pool.execute(
            'INSERT INTO testdb.users (name, email) VALUES (?, ?)',
            ['John Doe', 'BbB0f@example.com']
        );
        console.log('Record inserted successfully. Insert ID:', result.insertId);
    } catch (error) {
        console.error('Error inserting record:', error);
    } finally {
        await pool.end();
    }
}

async function updateRecord() {
    try {
        const [result] = await pool.execute(
            'UPDATE testdb.users SET email = ? WHERE id = ?',
            ['BbB0f@gmail.com', 1]
        );
        console.log('Record updated successfully. Affected Rows:', result.affectedRows);
    } catch (error) {
        console.error('Error updating record:', error);
    } finally {
        await pool.end();
    }
}

async function deleteAllRecords() {
    try {
        const [result] = await pool.execute('DELETE FROM testdb.users');
        console.log('All records deleted successfully. Affected Rows:', result.affectedRows);
    } catch (error) {
        console.error('Error deleting records:', error);
    }   finally {   
        await pool.end();
    }
}

testConnection();
createDatabase();
showDatabases();
createTable();
insertRecord();
updateRecord();
deleteAllRecords();