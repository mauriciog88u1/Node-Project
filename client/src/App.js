// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider, ThemeToggle } from './helpers/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <ThemeToggle />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
