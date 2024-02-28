import connectToDatabase from '../../../utils/mongodb';
import Transaction from '../../../db/models/Transaction';

export default async function handler(req, res) {
  await connectToDatabase();
  const { query: { id } } = req;

  if (req.method === 'DELETE') {
    try {
      const deleteResult = await Transaction.findByIdAndDelete(id);
      if (!deleteResult) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      return res.status(200).json({ message: 'Transaction deleted' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}