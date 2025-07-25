import { getDBConnection } from "./db";

export const createDatabase = async () => {
    const db = await getDBConnection();
    await db.executeSql('PRAGMA foreign_keys = ON;');
    await db.executeSql(
        `
        CREATE TABLE IF NOT EXISTS books(
        id_book  INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT,
        year INTEGER,
        genre_id INTEGER,
        FOREIGN KEY (genre_id) REFERENCES genres(id_genre) ON DELETE CASCADE
        );`
    );

    await db.executeSql(
        `        
        CREATE TABLE IF NOT EXISTS genres(
        id_genre INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
        );`
    )
}