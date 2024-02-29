import Transaction from '@/db/models/Transaction';
const connectToDatabase = require('../../../utils/mongodb');

export default async function handler(req, res) {
  await connectToDatabase();
  
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
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } 
  
  