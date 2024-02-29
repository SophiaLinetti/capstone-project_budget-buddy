import Goal from '@/db/models/Goal';
const connectToDatabase = require('../../../utils/mongodb');

export default async function handler(req, res) {
  await connectToDatabase();
  const { query: { id }, method } = req;

  switch (method) {
    case 'PUT':
      try {
        const goal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
        if (!goal) {
          return res.status(404).json({ message: 'Goal not found' });
        }
        res.status(200).json(goal);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
      case 'DELETE':
        try {
          const deleteResult = await Goal.findByIdAndDelete(id);
        
          if (!deleteResult) {
            console.log(`Goal with id ${id} not found.`);
            return res.status(404).json({ message: 'Goal not found' });
          }
          console.log(`Goal with id ${id} deleted.`);
          return res.status(200).json({ message: 'Goal deleted' });
        } catch (error) {
          console.error(`Error deleting goal with id ${id}:`, error);
          return res.status(500).json({ message: error.message });
        }
  
    default:
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}