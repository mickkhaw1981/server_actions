import { readFile } from '@/app/lib/helpers';
import { updateTicket } from '@/app/lib/actions';
import Link from 'next/link';

export default function EditTicket({ params }: { params: { id: string } }) {
  const data = readFile();
  const ticket = data.tickets.find(t => t.id === parseInt(params.id));

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Edit Ticket</h1>
        <form action={updateTicket} className="bg-white rounded-lg shadow p-6 space-y-6">
          <input type="hidden" name="id" value={ticket.id} />
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={ticket.title}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              id="description"
              defaultValue={ticket.description}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
            <select
              name="type"
              id="type"
              defaultValue={ticket.type}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            >
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              <option value="request">Request</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              id="status"
              defaultValue={ticket.status}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <Link
              href="/"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Update Ticket
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 