# AttendenceHub - Track Attendences of workers

The AttendenceHub app is a web-based system for tracking the attendences of workers. It allows you to manage attendences, plan and schedule your workflow in current week / month. Plan holiday, create reports of it.

## Features (WIP):
- **Real-Time Attendance Tracking** - Track employee attendance live with clock-in and clock-out functionality.
- **Work Schedule Planning** - Create weekly/monthly work schedules for employees and teams. Customize shifts, set break times, and easily adjust for holidays. Automated notifications for upcoming shifts, shift changes, or missed check-ins.
- **Leave & Vacation Management** - Request and approve leave directly in the app. View available vacation days, and manage sick leaves and personal time off. Customizable leave policies for different teams or departments. Track leave history and balance for each employee.
- **Attendance & Leave Reports** - Generate daily, weekly, or monthly reports on attendance, absenteeism, and leave balance. Export reports to CSV or PDF formats for easy sharing with HR or management. Visual analytics (charts/graphs) to analyze attendance trends and improve workforce efficiency.
- **Automated Alerts & Notifications** - Send automated reminders for late check-ins or missed shifts. Notifications for upcoming leave requests and pending approvals. Alert managers about unusual patterns like frequent absenteeism.
- **Team Dashboard & Presence Overview** - A team overview dashboard to view who’s clocked in, on leave, or out sick in real-time. Easy access to current team availability for better workload distribution.
- **Overtime & Hours Tracking** - Track overtime hours and automatically calculate extra pay. Visualize how many hours employees have worked in a given period. Manage compliance with labor laws regarding overtime.

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
