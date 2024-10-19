# Signifer - Sports Facility Management System

The Signifer app is a web-based system for managing sports facilities. It allows you to manage passes, contracts, and tickets, create schedules for group classes, offer individual classes and personal training, track attendance, and more.

## Features (WIP):

- **Sale of Passes / Contracts / Tickets**: Manage and sell various types of passes, contracts, and tickets.
- **Schedule of Group Classes**: Create and manage schedules for group classes.
- **Individual Classes and Personal Training**: Offer and manage individual classes and personal training sessions.
- **Class Registration**: Allow clients to register for classes.
- **Class Notifications**: Send notifications to clients about their classes.
- **Attendance Module**: Track attendance for classes.
- **Basic Reports**: Generate reports on sales, activity of passes, income, arrears in payments, entry report, attendance at classes, and more.
- **Warehouse Management**: Manage inventory and warehouse operations.
- **Customer Messaging**: Send messages to customers.

## Technologies Used

- **Backend**: Laravel
- **Frontend**: Vue 3
- **Database**: MySQL
- **Package Management**: Composer (PHP), npm (JavaScript)
- **Others**: Docker, Quasar Framework, Tailwind CSS

## Installation

### Prerequisites

- PHP
- Composer
- Node.js and npm
- MySQL

### Steps

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd Signifer
    ```

2. **Install PHP dependencies**:
    ```sh
    composer install
    ```

3. **Install JavaScript dependencies**:
    ```sh
    npm install
    ```

4. **Set up environment variables**:
    - Copy the `.env.example` file to `.env`:
        ```sh
        cp .env.example .env
        ```
    - Update the `.env` file with your database and other configurations.

5. **Generate application key**:
    ```sh
    php artisan key:generate
    ```

6. **Run database migrations**:
    ```sh
    php artisan migrate
    ```

7. **Build the frontend assets**:
    ```sh
    npm run dev
    ```

8. **Start the development server**:
    ```sh
    php artisan serve
    ```

## Usage

- Access the application at `http://localhost:8000`.
- Register and log in as a user to start managing classes and reservations.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.