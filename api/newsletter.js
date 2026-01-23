export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { email, firstName } = req.body;
  
    try {
      const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.VITE_LOOPS_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          firstName,
          source: 'Website Form'
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(response.status).json({ success: false, error: data });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }