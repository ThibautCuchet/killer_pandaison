import { NextApiHandler } from "next";
import { contreKillUser } from "../../requests/mutations/contre-kill";

const handler: NextApiHandler = async (req, res) => {
  const { eventId, userId } = req.body;
  try {
    const userGame = await contreKillUser({ userId, eventId });
    res.status(200).json(userGame.games[0].to_kill);
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

export default handler;
