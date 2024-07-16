# GIAIC Exams Schedule

Welcome to the Exam Day Finder application! This tool helps students quickly find their exam schedule by simply entering their roll number.

[https://giaic-exams-schedule.vercel.app/](https://giaic-exams-schedule.vercel.app/)

## Features

- **Easy to Use**: Enter your roll number to search for your exam date, day, and time.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Technologies Used

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Validation**: Zod

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the Repository**:

    ```sh
    git clone https://github.com/yourusername/giaic-exams-schedule.git
    cd giaic-exams-schedule
    ```

2. **Install Dependencies**:

    ```sh
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following:

    ```sh
    MONGODB_URI="your_mongodb_connection"
    BASE_URI="http://localhost:3000"
    ```

4. **Run the Application**:

    ```sh
    npm run dev
    ```

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter your roll number in the input field.
3. Click the "Search" button to find your exam date, day, and time.

### Project Structure

- `pages/`: Contains Next.js pages.
- `components/`: Contains React components.
- `lib/`: Contains utility functions and validation schemas.
- `public/`: Contains static assets.

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! If you have any questions or need further assistance, feel free to open an issue or contact us.
