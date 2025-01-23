import "server-only";
import fs from "fs";
import path from "path";

type Ticket = {
  id: number;
  title: string;
  description: string;
  type: 'feature' | 'bug' | 'request';
  status: 'open' | 'in_progress' | 'done';
};

type Database = {
  tickets: Ticket[];
};

const filePath = path.join(process.cwd(), "src/app/lib/database.json");

// Helper function to read data
export function readFile(): Database {
  try {
    if (!fs.existsSync(filePath)) {
      // Initialize with empty tickets array if file doesn't exist
      fs.writeFileSync(filePath, JSON.stringify({ tickets: [] }, null, 2));
    }
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (error) {
    console.error('Error reading file:', error);
    return { tickets: [] };
  }
}

// Helper function to write data
export function writeFile(data: Database) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}