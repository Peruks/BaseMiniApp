import { openDB, DBSchema } from "idb";

interface BaseStyleDB extends DBSchema {
    creations: {
        key: string;
        value: {
            id: string;
            imageData: string; // Base64
            createdAt: number;
            style: string;
        };
        indexes: { "by-date": number };
    };
}

const DB_NAME = "basestyle-lab-db";
const STORE_NAME = "creations";

export async function initDB() {
    return openDB<BaseStyleDB>(DB_NAME, 1, {
        upgrade(db) {
            const store = db.createObjectStore(STORE_NAME, {
                keyPath: "id",
            });
            store.createIndex("by-date", "createdAt");
        },
    });
}

export async function saveCreation(imageData: string, style: string) {
    const db = await initDB();
    const id = crypto.randomUUID();
    await db.put(STORE_NAME, {
        id,
        imageData,
        createdAt: Date.now(),
        style,
    });
    return id;
}

export async function getCreations() {
    const db = await initDB();
    return db.getAllFromIndex(STORE_NAME, "by-date");
}

export async function deleteCreation(id: string) {
    const db = await initDB();
    return db.delete(STORE_NAME, id);
}
