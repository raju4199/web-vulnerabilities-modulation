const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const sqlInjectionRoutes = require('./routes/sqlInjectionRoutes');
const crossSiteScriptingRoutes = require('./routes/crossSiteScriptingRoutes');
const commandExecutionRoutes = require('./routes/commandExecutionRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/sql-injection', sqlInjectionRoutes);
app.use('/api/cross-site-scripting', crossSiteScriptingRoutes);
app.use('/api/command-execution', commandExecutionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});