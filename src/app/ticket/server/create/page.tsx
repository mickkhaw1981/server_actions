// where the user can interact with the form and provide the title, description and type fields and click a 'Submit' button to create the form. Any new forms should be defaulted to "open" status.

import { createTicket } from "@/app/lib/actions";

export default function CreateTicket() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Create New Ticket (Server)</h1>
        
        <form action={createTicket} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input 
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter ticket title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter ticket description"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
            <select
              id="type"
              name="type"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select type</option>
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
              <option value="request">Request</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 px-4 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Ticket
          </button>
        </form>
      </div>
    </div>
  );
}