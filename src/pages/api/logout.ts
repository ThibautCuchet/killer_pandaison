import { NextApiHandler } from "next";
import { killUser } from "../../requests/mutations/kill";
import { logout } from "../../requests/mutations/logout";

const handler: NextApiHandler = async (req, res) => {
  const { userId, eventId } = req.body;
  try {
    await killUser({ userId, eventId });
    await logout({ userId });
    res.status(200).json({ message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

export default handler;
