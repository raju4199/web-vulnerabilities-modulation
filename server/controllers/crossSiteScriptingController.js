exports.message = (req, res) => {
    const { message } = req.body;
  
    // Vulnerable code for Cross Site Scripting
    res.status(200).json({ message: `You said: ${message}` });
  };