export default function handler(req, res) {
  const { song, artist } = req.query;

  if (!song || !artist) {
    return res.status(400).json({ error: "song and artist required" });
  }

  res.status(200).json({
    song,
    artist,
    lyrics_lrc: `[00:01.00]Song: ${song}\n[00:02.00]Artist: ${artist}\n[00:03.00]Lyrics not implemented yet...`
  });
}
