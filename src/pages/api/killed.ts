import { NextApiHandler } from "next";
import { killUser } from "../../requests/mutations/kill";

const handler: NextApiHandler = async (req, res) => {
  const { eventId, userId } = req.body;
  try {
    const userGame = await killUser({ userId, eventId });
    res.status(200).json(userGame.games[0].have_to_kill_by?.user);
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

export default handler;
