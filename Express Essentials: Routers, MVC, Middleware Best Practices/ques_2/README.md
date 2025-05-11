# Ticketing System

This is a simple Ticketing System built using Express.js for internal issue tracking.

## Endpoints

- `GET /tickets` - Fetch all tickets.
- `GET /tickets/:id` - Fetch a ticket by ID.
- `POST /tickets` - Create a new ticket (requires title, description, priority, user).
- `PUT /tickets/:id` - Update a ticket.
- `DELETE /tickets/:id` - Delete a ticket.
- `PATCH /tickets/:id/resolve` - Resolve a ticket.

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
