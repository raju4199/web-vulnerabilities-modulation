const { exec } = require('child_process');

exports.executeCommand = (req, res) => {
  const { command } = req.body;

  // Vulnerable code for Command Execution
  exec(command, (err, stdout, stderr) => {
    if (err) {
      res.status(500).json({ message: `Command execution failed: ${err}` });
    } else {
      res.status(200).json({ message: `Command output: ${stdout}` });
    }
  });
};