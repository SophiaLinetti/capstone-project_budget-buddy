import Goal from '@/db/models/Goal';
const connectToDatabase = require('../../../utils/mongodb');

export default async function handler(req, res) {
  await connectToDatabase();
  switch (req.method) {
    case 'GET':
      try {
        const goals = await Goal.find({});
        res.status(200).json(goals);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
         case 'POST':
        try {
          const goal = new Goal(req.body);
          const savedGoal = await goal.save();
          res.status(201).json(savedGoal);
        } catch (error) {
          console.error('Error saving goal:', error);
          res.status(500).json({ message: 'Failed to add goal', error: error.message });
        }
        break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } 
  
  