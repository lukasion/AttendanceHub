# Recruitly - Recruitment Management System (ATS)

The Recruitly app is a web-based system for managing the recruitment process. It allows recruiters to manage job
postings, applications, and candidates. The system also provides tools for scheduling interviews, sending emails, and
generating reports.

## Features (WIP):

- **Job Postings**: Create and manage job postings.
- **Applications**: Track applications and manage candidates.
- **Interviews**: Schedule interviews and manage interviewers.
- **Emails**: Send emails to candidates and interviewers.
- **Reports**: Generate reports on job postings, applications, and interviews.
- **Settings**: Configure system settings and manage user accounts.
- **Notifications**: Receive notifications for new applications and interviews.

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
    cd AttendenceHub
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
