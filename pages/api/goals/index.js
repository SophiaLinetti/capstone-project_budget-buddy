
import Goal from '@/db/models/Goal';

const connectToDatabase = require('../../../utils/mongodb');

export default async function handler(req, res) {
  await connectToDatabase();
  try {
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
      case 'PUT':
        
        const { id, ...updateData } = req.body;
        await collection.updateOne({ id }, { $set: updateData });
        res.status(200).json({ message: 'Goal updated' });
        break;
      case 'DELETE':
         
          const { query: { _id } } = req;
          
          const objectId = new ObjectId(_id);
          
          const deleteResult = await collection.deleteOne({ _id: objectId });
          if (deleteResult.deletedCount === 1) {
            res.status(200).json({ message: 'Goal deleted' });
          } else {
            res.status(404).json({ message: 'Goal not found' });
          }
          break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  
  }