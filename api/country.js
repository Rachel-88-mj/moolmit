// Returns the visitor's country code (from Vercel's IP geolocation header) for the suit flag.
module.exports = (req, res) => {
  const raw = String(req.headers['x-vercel-ip-country'] || '').toUpperCase();
  const cc = /^[A-Z]{2}$/.test(raw) ? raw : '';
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send(JSON.stringify({ cc }));
};
