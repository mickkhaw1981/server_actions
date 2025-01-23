// using helpers.TS file create a server action to create a new ticket
'use server';

import { readFile, writeFile } from './helpers';
import { redirect } from 'next/navigation';

export async function createTicket(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const type = formData.get('type') as 'feature' | 'bug' | 'request';

  // Read existing tickets
  const data = readFile();
  
  // Create new ticket
  const newTicket = {
    id: data.tickets.length + 1,
    title,
    description,
    type,
    status: 'open' as const
  };

  // Add new ticket to existing tickets
  data.tickets.push(newTicket);

  // Write updated data back to file
  writeFile(data);
  
  redirect('/');
}

// Async function that takes a ticket ID as a parameter
export async function deleteTicket(ticketId: number) {
  // Read the current database state into memory
  const data = readFile();
  
  // Filter out the ticket with the matching ID, keeping all others
  data.tickets = data.tickets.filter(ticket => ticket.id !== ticketId);
  
  // Write the updated data back to the database file
  writeFile(data);
  
  // Return a success response
  return { success: true };
}

export async function updateTicket(formData: FormData) {
  const id = parseInt(formData.get('id') as string);
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const type = formData.get('type') as 'feature' | 'bug' | 'request';
  const status = formData.get('status') as 'open' | 'in_progress' | 'done';

  // Read existing tickets
  const data = readFile();
  
  // Find and update the ticket
  const ticketIndex = data.tickets.findIndex(t => t.id === id);
  if (ticketIndex !== -1) {
    data.tickets[ticketIndex] = {
      ...data.tickets[ticketIndex],
      title,
      description,
      type,
      status
    };
  }

  // Write updated data back to file
  writeFile(data);
  
  redirect('/');
}