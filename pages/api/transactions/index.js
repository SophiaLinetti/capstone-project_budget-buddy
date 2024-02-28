/* import { connectToDatabase } from '../../../utils/mongodb'; */
import Transaction from '@/db/models/Transaction';

const connectToDatabase = require('../../../utils/mongodb');

export default async function handler(req, res) {
  await connectToDatabase();
  try {
  switch (req.method) {
    case 'GET':
      try {
        const transactions = await Transaction.find({});
        res.status(200).json(transactions);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
         case 'POST':
        try {
          const transaction = new Transaction(req.body);
          const savedTransaction = await transaction.save();
          res.status(201).json(savedTransaction);
        } catch (error) {
          console.error('Error saving transaction:', error);
          res.status(500).json({ message: 'Failed to add transaction', error: error.message });
        }
        break;
      case 'PUT':
        
        const { id, ...updateData } = req.body;
        await collection.updateOne({ id }, { $set: updateData });
        res.status(200).json({ message: 'Transaction updated' });
        break;
      case 'DELETE':
      
          const { query: { _id } } = req;
          const objectId = new ObjectId(_id);
        
          const deleteResult = await collection.deleteOne({ _id: objectId });
          if (deleteResult.deletedCount === 1) {
            res.status(200).json({ message: 'Transaction deleted' });
          } else {
            res.status(404).json({ message: 'Transaction not found' });
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