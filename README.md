# AI Personal Finance Dashboard

## Overview
The **AI Personal Finance Dashboard** is a React-based application designed to help users track expenses, set financial goals, and receive AI-powered financial insights. The app uses modern technologies such as TypeScript, Material-UI, and `recharts` for an engaging user experience and integrates OpenAI APIs to provide personalized financial advice.

---

## Features
1. **Expense Tracker**:
   - Add, view, and delete expenses.
   - Link expenses to specific financial goals.
2. **Goal Tracker**:
   - Set financial goals with target amounts.
   - View progress toward achieving each goal.
3. **Charts and Visualizations**:
   - Visualize expenses and goals using bar charts.
   - Dynamic updates based on user input.
4. **AI Insights**:
   - Use OpenAI's GPT-4 to generate personalized financial insights.
   - Insights are based on the user's expense and goal data.
5. **State Management**:
   - Centralized state management using Context API for seamless data flow.
6. **Responsive Design**:
   - Built with Material-UI for a modern and responsive UI.

---

## Tech Stack
- **Frontend**:
  - React
  - TypeScript
  - Material-UI
  - Recharts (for charts and graphs)
- **State Management**:
  - Context API
- **AI Integration**:
  - OpenAI API
- **Environment Variables**:
  - `dotenv`

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/personal-finance-dashboard.git
   cd personal-finance-dashboard
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root.
   - Add your OpenAI API key:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key
     ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

---

## Project Structure
```
src/
|-- components/
|   |-- Dashboard.tsx          # Main dashboard layout
|   |-- ExpenseTracker.tsx     # Expense management
|   |-- GoalTracker.tsx        # Goal management
|   |-- Chart.tsx              # Visualization component
|   |-- AIInsights.tsx         # AI-powered insights
|
|-- state/
|   |-- GlobalState.tsx        # Context API for state management
|
|-- App.tsx                    # Root application component
|-- index.tsx                  # Application entry point
```

---

## Features in Detail

### 1. Expense Tracker
- Add expenses with descriptions, amounts, and associated goals.
- Delete expenses from the list.
- Automatically updates the linked goal's progress.

### 2. Goal Tracker
- Define financial goals with target amounts.
- View the current progress toward each goal.
- Dynamically updates based on linked expenses.

### 3. Charts and Visualizations
- Bar charts display:
  - Total expenses per goal.
  - Goal target amounts.
- Fully responsive and interactive.

### 4. AI Insights
- Generates personalized insights using OpenAI GPT-4.
- Example prompts include:
  - "Based on the user's expenses and goals, suggest savings strategies."
  - "Highlight areas of potential overspending."

---

## Security Considerations
1. **Environment Variables**:
   - API keys are stored in a `.env` file and should never be committed to version control.
2. **Frontend API Calls**:
   - Ensure sensitive data is handled securely. Consider using a backend proxy for higher security.

---

## Future Enhancements
1. **Authentication**:
   - Add user authentication to save and retrieve personal data.
2. **Recurring Expenses**:
   - Support recurring expenses with automated tracking.
3. **Budgeting**:
   - Introduce monthly or yearly budgeting features.
4. **Additional Visualizations**:
   - Include pie charts and trend lines for better data insights.

---

## Contributing
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
